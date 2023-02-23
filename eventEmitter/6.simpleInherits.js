const utils = require('util');

function Person() {
  this.firstName = 'john';
  this.lastName = 'doe';
}

Person.prototype.greet = function() {
  console.log(`Hello ${this.firstName} + ${this.lastName}`);
};

function Policeman () {
  Person.call(this);
  this.id = 1234;
}

utils.inherits(Policeman, Person); // it just connect prototype!

// const testPolice = Policeman(); this instruct global and nothing returns
const policeman = new Policeman();
policeman.greet();