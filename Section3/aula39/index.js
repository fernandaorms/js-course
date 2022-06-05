/*
let controler = 0;

while(controler <= 10){
    console.log(controler);
    controler++;
}
*/

function random(min, max) {
    const n = Math.random() * (max - min) + min;
    return Math.round(n);
}

const min = 1;
const max = 50;

let rand = random(min, max);
rand = 10;


while(rand !== 10) {
    console.log(rand);
    rand = random(min, max);
}


do {
    console.log(rand);
    rand = random(min, max);
} while(rand !== 10);


console.log('');
console.log('Found: ', rand);
