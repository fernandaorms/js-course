// Person -> 
// Instructor
// Student 

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
}


function Instructor(firstName, lastName, salary) {
    Person.call(this, firstName, lastName);
    this.salary = salary;
}

Instructor.prototype = Object.create(Person.prototype);
Instructor.prototype.constructor = Instructor;

const instructor = new Instructor('John', 'Doe', 7000.00);

console.log(instructor);


function Student(firstName, lastName, grade) {
    Person.call(this, firstName, lastName);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.pass = function(value) {
    if(value >= 6.0) return 'Pass';

    return 'Fail';
}

const student1 = new Student('Mark', 'Z.', 6.0);
const student2 = new Student('Zach', 'E.', 5.99);

console.log(student1, student1.pass(student1.grade));
console.log(student2, student2.pass(student2.grade));