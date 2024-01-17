const _speed = Symbol('speed');

class Car {
    constructor(cName) {
      this.cName = cName;
      this[_speed] = 0;
    }

    get speed() {
        return this[_speed];
    }

    set speed(value) {
        if(typeof value !== 'number') return;
        if((value >= 100) || (value <= 0)) return;

        this[_speed] = value;
    }

    speedUp() {
        if(this[_speed] >= 100) return;
        this[_speed]++;
    }

    speedDown() {
        if(this[_speed] <= 0) return;
        this[_speed]--;
    }
}

const car = new Car('HB20');

for(let i = 0; i <= 200; i++) car.speedUp();

car.speed = 85;

console.log(car);