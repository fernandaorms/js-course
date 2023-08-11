
export const fName = 'Fernanda';
export const lName = 'Oliveira';
export const age = 22;

export function sum(x, y) {
    return x + y;
}

export default class Person {
    constructor(firstName, lastName, personAge) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.personAge = personAge;
    }
}

// export { fName, lName as lastName, age, sum, Person };