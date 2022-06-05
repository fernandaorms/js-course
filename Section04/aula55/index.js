// IIFE

(function(age, weight, height){
   const fName = 'Mari';
   
   function createName(lName) {
      return fName + ' ' + lName;
   }

   function sayName() {
      console.log(createName('Milan'));
   }

   sayName();
   console.log(age, weight, height);
})(21, 54, 164);


const fName = 'Fernanda';

console.log(fName);