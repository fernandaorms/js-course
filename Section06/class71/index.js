// defineProperty - defineProperties -> Getters and Setters

function Product(pName, price, inventory) {
    this.pName = pName;
    this.price = price;

    Object.defineProperty(this, 'inventory', {
        enumerable: true,   // shows the key
        value: inventory,
        writable: false,   // can change
        configurable: true
    });

    /*
    Object.defineProperties(this, {
        pName: {
            enumerable: true,   // shows the key
            value: pName,
            writable: false,   // can change
            configurable: true
        },
        price: {
            enumerable: true,   // shows the key
            value: price,
            writable: false,   // can change
            configurable: true
        },
    });
    */
}

const p1 = new Product('Camiseta', 20, 3);

console.log(Object.keys(p1));

for (let key in p1) console.log(key);
