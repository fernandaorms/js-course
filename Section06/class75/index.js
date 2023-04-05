function Product(pName, pPrice) {
    this.pName = pName;
    this.pPrice = pPrice;
}

Product.prototype.discount = function(percent) {
    this.pPrice = this.pPrice - (this.pPrice * (percent / 100));
};

Product.prototype.increase = function(percent) {
    this.pPrice = this.pPrice + (this.pPrice * (percent / 100));
};

const p1 = new Product('Shirt', 50);

console.log(p1);

// Literal
const p2 = {
    pName: 'Cup',
    pPrice: 15
};

Object.setPrototypeOf(p2, Product.prototype);

p2.discount(100);

console.log(p2);

const p3 = Object.create(Product.prototype, {
    pName: {
        value: 'Funko '
    },
    pPrice: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    pSize: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

p3.increase(10);

console.log(p3);