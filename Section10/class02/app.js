const path = require('path');

const Car = require(path.resolve(__dirname, 'sub01', 'sub02', 'sub03', 'mod.js'));

// const Car = require('./sub01/sub02/sub03/mod');

const c1 = new Car('Fiat Argo', 80000);

console.log(Car);

c1.speedUp(50);

c1.speedDown(20);

console.log(c1);
