let x = 10;
x = 0b1010;
const y = 10;
const a = 100;

const person = {
    firstName: 'Fernanda' as const,
    lastName: 'Oliveira',
};

export function chooseColor(cor: 'Red' | 'Yellow' | 'Blue'): string {
    return cor;
}
console.log(chooseColor('Red'), person, x, y);

// Module mode
export default 1;
