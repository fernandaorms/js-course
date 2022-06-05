// Inicial
/*
function getBigger(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}
*/

// Refatorando => arrow function
/*
const getBigger = (num1, num2) => {
    return num1 >= num2 ? num1 : num2;
}
*/

// Refatorando => arrow function, one line
const getBigger = (num1, num2) => num1 >= num2 ? num1 : num2;

console.log(getBigger(100, 15));
