// Global
function returnFunction(fName) {
   return function() {
      return fName;
   };
}

const myFunction = returnFunction('Fernanda');
const myFunction2 = returnFunction('Mari');

console.dir(myFunction);
console.dir(myFunction2);

console.log(myFunction(), myFunction2());