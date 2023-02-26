const fs = require('fs');

const greet = fs.readFileSync(__dirname + '/source/greet.txt', 'utf8');
console.log('sync', greet);

const greet2 = fs.readFile(__dirname + '/source/greet.txt', 'utf8', function(err, data) {
  console.log('async', data)
});

console.log('done');