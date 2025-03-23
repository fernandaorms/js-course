// import './form-control';

export function testFunction(this: Date, nome: string, age: number): void {
    console.log(this);
    console.log(nome, age);
}

testFunction.call(new Date(), 'Fernanda', 23);
testFunction.apply(new Date(), ['Fernanda', 23]);