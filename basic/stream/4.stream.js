const fs = require('fs');

const readable = fs.createReadStream(__dirname + '/source/lorem.txt', {
  encoding: 'utf8', highWaterMark: 32 * 1024
});

const writable = fs.createWriteStream(__dirname + '/source/loremCopy.txt');

readable.on('data', function(chunk) {
  console.log(chunk.length);
  writable.write(chunk);
})