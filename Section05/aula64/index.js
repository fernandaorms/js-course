const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// const array3 = array1.concat(array2, [7, 8, 9], 'Fernanda');

// ... rest -> ... spread

const array3 = [...array1, 'Fernanda', ...array2];

console.log(array3);
