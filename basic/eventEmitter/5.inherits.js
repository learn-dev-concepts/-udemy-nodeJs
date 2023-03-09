const EventEmitter = require('events');
const util = require('util');

function Greetr() {
  EventEmitter.call(this);
  this.greeting = 'hello world';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
  console.log(`emitter: data: ${data}`);
  this.emit('greet', data);
}

const greetr1 = new Greetr();

greetr1.on('greet', function(data) {
  console.log(`on data: ${data}`);
});

greetr1.greet('tony')