/*
const person1 = new Object();

person1.firstName = 'Fernanda';
person1.lastName = 'Oliveira';
person1.age = 21;

person1.sayName = function() {
    console.log(`My name is ${this.firstName} ${this.lastName} `);
}

person1.getBirthDay = function() {
    const currentDate = new Date();
    return currentDate.getFullYear() - this.age;
}

// person1.sayName();
// console.log(person1.getBirthDay());

for (let key in person1) {
    console.log(`${key}: ${person1[key]}`);
}
*/


/*
const person2 = {
    firstName: 'Fernanda',
    lastName: 'Oliveira'
};

console.log(person1, person2);
*/


// Factory functions
/*
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
}

const p1 = createPerson('Fernanda', 'Oliveira');

console.log(p1.fullName);
*/


// Constructor functions 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.freeze(this);
}

const p1 = new Person('Fernanda', 'Oliveira');
const p2 = new Person('Mariana', 'Milan');

// console.log(p1.firstName, p1.lastName);
// console.log(p2.firstName, p2.lastName);

console.log(p1);
console.log(p2);


// Class
