// Reduce


// Sum all numbers(reduce)

// Return an array with even numbers (Filter)

// Return an array with double of the values (Map)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];

const sum = numbers.reduce((counter, value, index, arr) => {
    counter += value;
    return counter;
}, 0);

//console.log(sum);


const even = numbers.reduce((counter, value, index, arr) => {
    if(value % 2 == 0) counter.push(value);
    return counter;
}, []);

// console.log(even); 


const double = numbers.reduce((counter, value) => {
    counter.push(value * 2);
    return counter;
}, []);

// console.log(double);


const people = [
    { pName: 'Luiz', pAge: 62 },
    { pName: 'Maria', pAge: 23 },
    { pName: 'Eduardo', pAge: 55 },
    { pName: 'Letícia', pAge: 10 },
    { pName: 'Rosana', pAge: 64 },
    { pName: 'Wallace', pAge: 63 },
];


const older = people.reduce((counter, obj) => {
    if(obj.pAge > counter.pAge) counter = obj; 
    return counter;
});

console.log(older);
