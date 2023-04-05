function createPerson(fisrtName, lastName) {
    const personPrototype = {
        sayFullName() {
            console.log(`Hey, my name is ${this.fisrtName} ${this.lastName}`);
        }
    };
    
    return Object.create(personPrototype, {
        fisrtName: { value: fisrtName },
        lastName: { value: lastName }
    });
}

const p1 = createPerson('John', 'Doe');

p1.sayFullName();