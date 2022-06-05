/*
const threeHours = 60 * 60 * 3 * 1000;
const oneDay = 60 * 60 * 24 * 1000;
const data = new Date(0 + threeHours - oneDay);
*/


// const data = new Date(2021, 3); // Y, M, D, h, m, s, ms
// const data = new Date('2019-04-20T20:20:59.500');


/*
const data = new Date('2019-04-26 20:20:59.500');

console.log('Dia: ', data.getDate());
console.log('Mês: ', data.getMonth() + 1); // Mês começa do zero
console.log('Ano: ', data.getFullYear());
console.log('Hora: ', data.getHours());
console.log('Min: ', data.getMinutes());
console.log('Seg: ', data.getSeconds());
console.log('ms: ', data.getMilliseconds());
console.log('Dia semana: ', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log('');

console.log(data.toString());
console.log(Date.now());
console.log('');
*/

function leftZero (num) {
    return num >= 10 ? num : `0${num}`;
}

function dateFormat(date) {
    const day = leftZero(date.getDate());
    const month = leftZero(date.getMonth() + 1);
    const year = leftZero(date.getFullYear());
    const hour = leftZero(date.getHours());
    const min = leftZero(date.getMinutes());
    const sec = leftZero(date.getSeconds());
  
    return `${day}/${month}/${year} ${hour}:${min}:${sec}`;
}

const date = new Date();

const dateBR = dateFormat(date);

console.log(dateBR);