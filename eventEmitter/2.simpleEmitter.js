const Emitter = require('./1.emitter');

const emitter = new Emitter();

emitter.on('greet', function() {
  console.log('hello world1');
});

emitter.on('greet', function() {
  console.log("i'm back!");
});

emitter.on('bye', () => {
  console.log('it is time to say good bye');
});

emitter.emit('bye');

console.log("I'm in global");
emitter.emit('greet');