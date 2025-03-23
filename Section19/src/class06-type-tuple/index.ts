// Tuple
const clientData1: readonly [number, string] = [1, 'Fernanda'];
const clientData2: [number, string, string] = [1, 'Fernanda', 'Ramos'];
const clientData3: [number, string, string?] = [1, 'Fernanda'];
const clientData4: [number, string, ...string[]] = [1, 'Fernanda', 'Carlos', 'Extra'];

// clientData1[0] = 100;
// clientData1[1] = 'Carlos';

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

// readonly array
const array1: readonly string[] = ['Fernanda', 'Oliveira'];
const array2: ReadonlyArray<string> = ['Fernanda', 'Oliveira'];

console.log(array1);
console.log(array2);

// Module mode
export default 1;
