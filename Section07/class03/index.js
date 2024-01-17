class ElectronicDevice {
    constructor(dName) {
        this.dName = dName;
        this.on = false;
    }

    turnOn() {
        if(this.on) {
        console.log(this.dName + ' is already on');
        return;
        }

        this.on = true;
    }

    turnOff() {
        if(!this.on) {
        console.log(this.dName + ' is already off');
        return;
        }

        this.on = false;
    }
}
  
class Smartphone extends ElectronicDevice {
    constructor(dName, color, model) {
        super(dName);

        this.color = color;
        this.model = model;
    }
}

class Tablet extends ElectronicDevice {
    constructor(dName, hasWifi) {
        super(dName);
        this.hasWifi = hasWifi;
    }

    turnOn() {
        console.log('Look, you changed turnOn method.');
        this.on = true;
    }

    sayHello() {
        console.log('Hello');
    }

    static creator(dName, hasWifi) {
        return new Tablet.prototype.constructor(dName, hasWifi);
    }
}

const s1 = new Smartphone('Samsung', 'Black', 'Galaxy S20');
s1.turnOn();
console.log(s1);

console.log('\n');

const t1 = Tablet.creator('iPad', true);
t1.turnOn();
t1.turnOff();
t1.turnOff();
t1.sayHello();
console.log(t1);