// Filter
// Always returns an array
// The new array lenght must be the same as teh original array or less

// Return numbers > 10
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];

/*
const newArray = numbers.filter((value, index, arr) => {
    console.log(index, ': ', value);

    if(index == numbers.length - 1) console.log(arr);

    return (value > 10);
});
*/


// Return people's name with >= 5 letters

// Return people's age >= 50 y

// Return people's name finished with 'a'

const people = [
    { pName: 'Luiz', pAge: 62 },
    { pName: 'Maria', pAge: 23 },
    { pName: 'Eduardo', pAge: 55 },
    { pName: 'Letícia', pAge: 19 },
    { pName: 'Rosana', pAge: 32 },
    { pName: 'Wallace', pAge: 47 },
];


const newArray = people.filter(value => {
    return value.pName.length >= 5;
});


const newArray2 = people.filter(value => value.pAge >= 50);


const newArray3 = people.filter(value => {
    return value.pName.toLowerCase().endsWith('a');
});


console.log(newArray2);
