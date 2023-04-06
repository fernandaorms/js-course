class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Instance Method
    volumeUp() {
        this.volume += 2;
    }
    volumeDown() {
        this.volume -= 2;
    }

    // Static Method
    static sum(x, y) {
        console.log(x + y);
    }
}

const c1 = new RemoteControl('LG');
console.log(c1);

RemoteControl.sum(3, 10);