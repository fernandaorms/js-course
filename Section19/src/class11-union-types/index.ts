function addOrConcat(
    a: number | string | boolean,
    b: number | string | boolean,
): number | string | boolean {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    else if (typeof a === 'boolean' && typeof b === 'boolean') return a && b;
    return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
console.log(addOrConcat(true, true));
console.log(addOrConcat(true, false));

// Module mode
export default 1;
