const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');

const redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);
client.hget = util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || '');
  
  return this;
}

mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    console.log('nocache')
    return exec.apply(this, arguments);
  }

  const key = JSON.stringify(Object.assign({}, this.getQuery(), { 
    collection: this.mongooseCollection.name 
  }));

  const cacheValue = await client.hget(this.hashKey, key);

  if (cacheValue) {
    console.log('cache')
    const cached = JSON.parse(cacheValue);

    if (Array.isArray(cached)) {
      return cached.map((attr) => new this.model(attr));
    }

    return new this.model(cached);
  }

  console.log('1st')
  const result = await exec.apply(this, arguments);
  
  client.hset(this.hashKey, key, JSON.stringify(result), 'EX', 10);

  return result;
}

module.exports = {
  clearHash(hashKey) {
    client.del(JSON.stringify(hashKey));
  }
}