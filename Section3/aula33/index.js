const person = {
    name: 'Fernanda',
    lastName: 'Ramos',
    age: 20,
    address: {
        street: 'Av Brasil',
        number: 13
    }
};

// const { name: firstName = 'Felipe', lastName, age } = person;
// const { address: {street: av, number = 24}, address } = person;

// console.log(address);
// console.log(av, number);

const { name: firstName, ...rest } = person;

console.log(firstName);
console.log(rest);