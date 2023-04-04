// For Each is only available for arrays

const arr1 = [10, 20, 30];

// For Of
/*
for(let value of arr1) {
    console.log(value);
}
*/

// For Each
let sum = 0;

arr1.forEach((value) => {
    sum += value;
});

console.log(sum);
