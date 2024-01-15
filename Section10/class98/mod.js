class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const firstName = 'Fernanda';
const lastName = 'Oliveira';


exports.firstName = firstName;

module.exports.lastName = lastName;

exports.randomKey = 'Random content';

this.Person = Person;