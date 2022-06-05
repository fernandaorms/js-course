const nome = 'Fernanda';
const sobrenome = 'Ramos';
const idade = 20;
const peso = 52;
const alturaEmM = 1.64;

let anoAtual = 2022;

let IMC = peso / (alturaEmM * alturaEmM);
let anoNascimento = anoAtual - idade;


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${alturaEmM} m de altura e seu IMC é de ${IMC}`);
