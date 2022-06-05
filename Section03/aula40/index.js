const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let i = 0;

for (let number of numbers) {
    if (number === 2) {
        console.log('2 pulado');
        continue;
    }

    if (number === 8) {
        console.log('8 encontrado, saindo...');
        break;
    }

    console.log(number);
}
