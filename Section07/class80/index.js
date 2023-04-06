class Person {
    constructor(fisrtName, lastName) {
        this.fisrtName = fisrtName;
        this.lastName = lastName;
    }

    fullName() {
        console.log(`${this.fisrtName} ${this.lastName}`);
    }
}

function Person2(fisrtName, lastName) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
}


Person2.prototype.fullName = function() {
    console.log(`${this.fisrtName} ${this.lastName}`)
}

const p1 = new Person('John', 'Doe');
p1.fullName();

const p2 = new Person2('Joe', 'Jonas');
p2.fullName();