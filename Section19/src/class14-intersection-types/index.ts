type HasFirstName = { firstName: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasFirstName & HasLastName & HasAge; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;

const person: Person = {
    firstName: 'Fernanda',
    lastName: 'Oliveira',
    age: 23,
};

console.log(person);

// Module mode
export { person };
