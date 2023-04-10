export const firstName = 'John';
export const lastName = 'Doe';
export const age = 30;


export default class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
};


export function sum(x, y) {
    return x + y;
}
