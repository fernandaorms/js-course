/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)
Object.keys
Object.freeze
Object.defineProperties
Object.defineProperty
*/

const car = { brand: 'Fiat', model: 'Argo Trekking', price: 81800.00};

Object.defineProperty(car, 'brand', {
    writable: false,
    configurable: false
});

car.brand = 'Ford' // doesn't work
car.price = 75000;

console.log(Object.values(car));

// const otherCar = { ...car, offer: true };
const otherCar = Object.assign({}, car, { offer: true });

otherCar.brand = 'Renault';
otherCar.model = 'Sandero Stepway';
otherCar.price = 72000.00;

console.log(car);
console.log(otherCar);

for(let [key, value] of Object.entries(car)) {
    console.log(key, value);
}