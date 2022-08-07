// Return the sum of the double of all even

// Filter even
// Double values
// Reduce (sum all)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];

/*
const even = numbers.filter(value => value % 2 === 0);

const double = even.map(value => value * 2);

const sum = double.reduce((counter, value) => {
    counter += value;
    return counter;
}, 0);
*/

const sum = numbers.filter(value => value % 2 === 0).map(value => value * 2).reduce((counter, value) => {
    counter += value;
    return counter;
}, 0);


console.log(sum);
