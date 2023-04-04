// ... rest, spread

// const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// const [one, two, three, ...rest] = numbers;
// const [one, , three, , five, , seven] = numbers;

const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// const [ , [ , , six]] = numbers;

const [list1, list2, list3] = numbers;

const [,five] = list2;
const [,,six] = list2;

console.log(five, six);