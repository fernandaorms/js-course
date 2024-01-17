// Factory Function
// Constructor Function
function createPerson(fName, lName, height, weight) {
   return {
      fName,
      lName,
      age: 21,

      // Getter
      get fullName() {
         return `${this.fName} ${this.lName}`;
      },

      // Setter
      set fullName(arg) {
         arg = arg.split(' ');
         this.fName = arg.shift();
         this.lName = arg.join(' ');
      },

      talk(subject) {
         return `${this.fName} said: ${subject}`;
      },

      height,
      weight,

      // Getter
      get imc(){
         return (this.weight / (this.height ** 2)).toFixed(2);
      }
   };
}

let p1 = createPerson('Fernanda', 'Oliveira', 1.64, 54);
p1.fName = 'Fefê';


console.log('IMC: ', p1.imc);
console.log(p1.talk('I love Mari so much'));
p1.fullName = 'Fernanda de Oliveira Ramos';
console.log(p1.fullName);
console.log(p1.talk('I love Mari so much'));
