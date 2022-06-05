// Declaração de função (Function hoisting)
/*
sayHello();

function sayHello() {
   console.log('Hello World');
}
*/


// First-class objects (Objects de primeira classe)
// Function expression
/*
const imData = function() {
   console.log(`Wow, I'm like data`);
};

function executeFunction(func) {
   func();
}

executeFunction(imData);
*/


// Arrow Function (ES6+)
const arrowFunction = (x, y) => {
   console.log(`Result: ${x + y}`);
}

arrowFunction(2, 2);


// Dentro de um objeto
const obj = {
   // old
   /*
   talk: function() {
      console.log(`Hi, I'm an object`);
   }
   */

   // new
   talk() {
      console.log(`Hi, I'm an object`);
   }

};

obj.talk();
