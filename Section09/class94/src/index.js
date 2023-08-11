import PersonClass , { fName, lName, age, sum } from "./module01";

// import PersonClass from "./module01";

const p1 = new PersonClass(fName, lName, age);
const p2 = new PersonClass('Fernanda', 'Ramos', 23);

console.log(p1);
console.log(p2);

console.log(sum(p1.personAge, p2.personAge));