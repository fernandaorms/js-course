// Map
// Always returns an array
// The new array lenght must be the same as the original array

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];


const numbersDouble = numbers.map((value) => {
    return value * 2;
});

// console.log(numbersDouble);



// Return a string with people's name

// Remove the key 'name' from the object

// Add the key 'id' for the objects

const people = [
    { pName: 'Luiz', pAge: 62 },
    { pName: 'Maria', pAge: 23 },
    { pName: 'Eduardo', pAge: 55 },
    { pName: 'Letícia', pAge: 19 },
    { pName: 'Rosana', pAge: 32 },
    { pName: 'Wallace', pAge: 47 },
];

const newArray  = people.map(obj => obj.pName);

const newArray2 = people.map(obj => ({ pAge: obj.pAge }));

const newArray3 = people.map((obj, index) => {
    return {
        id: index,
        pName: obj.pName,
        pAge: obj.pAge
    };
});

console.log(newArray);
console.log(newArray2);
console.log(newArray3);

console.log(people);