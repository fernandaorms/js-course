class Person {
    constructor(firstName, lastName) {
        this.firstName =firstName;
        this.lastName = lastName;
    }

    fullName() {
        console.log(`Full name: ${this.firstName} ${this.lastName}`);
    }
}

const p1 = new Person('John', 'Doe');

p1.fullName();