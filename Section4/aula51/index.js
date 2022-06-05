// return
// Retorna um valor
// Termina a função


// Sum
function soma (a, b){
   return a + b;
}


// Change Color
function randomNumber() {
   return Math.floor(Math.random() * 256);
}

document.addEventListener('click', function(){
   document.body.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
});


// Create object
function createPerson(fName, lName){
   return {fName, lName};
}

const gf = createPerson('Mari', 'Milan');
const me = {
   fName: 'Fefê',
   lName: 'Oliveira'
};


// Function calls another
function talk(start) {
   function talkLast(last) {
      return start + ' ' + last;
   }
   return talkLast;
}

const helloWorld = talk('Hello');
const result = helloWorld('World');



// Função closure : fecha o escopo mesmo depois de já ter sido usado
// Create Multiplier
function createMultiplier(multiplier) {
   // Multiplier
   return function (n) {
      return n * multiplier;
   }
}

const twoTimes = createMultiplier(2);
const threeTimes = createMultiplier(3);
const fourTimes = createMultiplier(4);

console.log(twoTimes(2));
console.log(threeTimes(2));
console.log(fourTimes(2));

