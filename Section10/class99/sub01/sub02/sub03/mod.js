module.exports = class Car {
    constructor(cName, price) {
        this.cName = cName;
        this.price = price;
        this.speed = 0;
    }

    speedUp(speed) {
        this.speed += speed;
    }

    speedDown(speed) {
        if((this.speed - speed) >= 0) this.speed -= speed;
        else this.speed = 0;
    }
};