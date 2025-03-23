// Array<T> - T[]
export function multiplyArgs(...args: Array<number>): number {
    return args.reduce((ac, value) => ac * value, 1);
}

export function concatenateString(...args: string[]): string {
    return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((value) => value.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const concatenation = concatenateString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenation);
console.log(upper);