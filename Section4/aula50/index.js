
// arguments: variável que sustenta todos os argumentos enviados
// !!! só funciona para funções criadas com a palavra 'function'
/*
function myFunction() {
   let total = 0;

   for (arg of arguments) total+= arg;

   console.log(total);
}
myFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
*/


/*
arguments: {name, lastName, age}
let person = {
   name: 'fernanda',
   lastName: 'oliveira',
   age: 21
};
*/
/*
function myFunction([first, second, third]) {
   console.log(first, second, third);
}

let array  = ['fernanda', 21, 'mari', ]

myFunction(array);
*/

// Type 1
/*
function calculate(operator, counter, ...numbers) {
   for (let n of numbers) {
      if(operator === '+') counter += n;
      if(operator === '-') counter -= n;
      if(operator === '*') counter *= n;
      if(operator === '/') counter /= n;
   }

   console.log(counter);
}
*/

// Type 2
/*
const calculate = function(operator, counter, ...numbers) {
   for (let n of numbers) {
      if(operator === '+') counter += n;
      if(operator === '-') counter -= n;
      if(operator === '*') counter *= n;
      if(operator === '/') counter /= n;
   }

   console.log(counter);
};
*/

// Type 3
const calculate = (...args) => {
   console.log(args);
};

calculate('+', 0, 20, 30, 40, 50);