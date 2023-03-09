/**
 * Object.create is method implement Inheritance
 */

const person = {
  firstName: '',
  lastName: '',
  greet: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const john = Object.create(person); // the obj person become a prototype of the obj john;
john.firstName = 'John';
john.lastName = 'Doe';
console.log(john.greet());

const jane = Object.create(person); // the obj person become a prototype of the obj jane;
jane.firstName = 'Jane';
jane.lastName = 'Doe';
console.log(jane.greet());