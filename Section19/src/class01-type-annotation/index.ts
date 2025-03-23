// Basic Types (type's inferrence)
let name: string = 'Fernanda'; // Any type of strings: '' "" ``
let age: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; // true or false
let symbol: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint


// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b'];
let arrayOfStrings2: string[] = ['a', 'b'];


// Objects
let person: { name: string, age: number, adult?: boolean } = {
    age: 23,
    name: 'Fernanda',
    adult: true
};

console.log(`Name: ${person.name} | Age: ${person.age} | Adult: ${person.adult}`);


// Functions
function sum(x: number, y: number): number {
    return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;

// Module mode
export default 1;
