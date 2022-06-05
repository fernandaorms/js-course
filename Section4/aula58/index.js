// Constructor functions -> objects
// Factory functions -> objects

// Constructor -> Pessoa (new)

function Person(fName, lName) {
   // Private 
   const ID = 123456;
   const privateMethod = () =>{

   }

   // Public
   this.fName = fName;
   this.lName = lName;

   this.method = () => {
      this.fullName = `${fName} ${lName}`;
   };
}

const p1 = new Person('Fernanda', 'Oliveira');
const p2 = new Person('Mari', 'Milan');


console.log(p1.fName);
console.log(p2.fName);
p2.method()
console.log(p1);
console.log(p2);
