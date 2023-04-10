// import * as Module1 from './module1';

import Person, { firstName, lastName, age, sum } from './module1';

const person = new Person (firstName, lastName, age)

console.log(person);

console.log('Sum = ' + sum(5, 8));