const Emitter = require('events');
const eventConfigs = require('./4.config').events

const emitter = new Emitter();

emitter.on(eventConfigs.GREET, function() {
  console.log('hello world1');
});

emitter.on(eventConfigs.GREET, function() {
  console.log("i'm back!");
});

emitter.on(eventConfigs.BYE, () => {
  console.log('it is time to say good bye');
});

emitter.emit(eventConfigs.BYE);

console.log("I'm in global");
emitter.emit(eventConfigs.GREET);