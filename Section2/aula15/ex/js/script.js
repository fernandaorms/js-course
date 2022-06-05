const number = Number(prompt('Digite um número: ')); 
const numberTitle = document.getElementById('number_title');
const text = document.getElementById('text');

numberTitle.innerHTML = number;

text.innerHTML = `
    <p> Raiz quadrada: ${Math.sqrt(number)} </p>
    <p> ${number} é inteiro: ${Number.isInteger(number)} </p>
    <p> É NaN: ${Number.isNaN(number)} </p>
    <p> Arredondado para baixo: ${Math.floor(number)} </p>
    <p> Arredondado para cima: ${Math.ceil(number)} </p>
    <p> Com duas casas decimais: ${number.toFixed(2)} </p>
`;