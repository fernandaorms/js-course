// Contructor ~ Class
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = () => 'ORIGINAL: ' + this.firstName + ' ' + this.lastName;
}


// Instance
const p1 = new Person('John', 'D.'); // <- Person = Contructor function
const p2 = new Person('Jane', 'F.'); // <- Person = Contructor function

Person.prototype.sayHello = 'Hello World!';

Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};

console.dir(p1);
console.dir(p2);


const currentDate = new Date(); // <-- Date = Contructor function

console.dir(currentDate);