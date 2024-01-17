function* firstGenerator() {
   // Some random code
   yield 'Valor 1';
  
   // Some random code
   yield 'Valor 2';
  
   // Some random code
   yield 'Valor 3';
}

/*
const g1 = firstGenerator();

for (let value of g1) {
   console.log(value);
}
*/

function* counter() {
   let i = 1;

   while(true) {
      yield i;
      i++;
   }
}

/*
const g2 = counter();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
*/


function* secondGenerator() {
   yield 0;
   yield 1;
   yield 2;
}


function* thirdGenerator() {
   yield* secondGenerator();
   yield 3;
   yield 4;
   yield 5;
}

const g3 = thirdGenerator();


function* fourthGenerator() {
   yield function() {
      console.log('Vim do y1');
   };

   return function() {
      console.log('Vim do return');
   }

   // ...

   yield function() {
      console.log('Vim do y2');
   };
}

const g4 = fourthGenerator();

const func1 = g4.next().value;
const func2 = g4.next().value;

func1();
func2();
