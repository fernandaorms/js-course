
function ValidateCpf(sentCpf) {
    this.sentCpf = sentCpf;

    Object.defineProperty(this, 'cleanCpf', {
        enumerable: true,
        get: function() {
          return sentCpf.replace(/\D+/g, '');
        }
    });

    Object.defineProperty(this, 'arrayCpf', {
        enumerable: true,
        get: function() {
          return this.cleanCpf.split('');
        }
    });
}

ValidateCpf.prototype.isSequence = function() {
    return (this.cleanCpf[0].repeat(this.cleanCpf.length) === cpf);
}

ValidateCpf.prototype.getSum = function(number) {
    let sum = 0;

    this.arrayCpf.slice(0, number).forEach((value, key) => {
        sum += value * (number + 1 - key);
    });

    return sum;
}

ValidateCpf.prototype.getValidDigit = function(number) {
    let digit = 11 - (this.getSum(number) % 11);

    return digit > 9 ? 0 : digit;
}

ValidateCpf.prototype.compareDigits = function(firstDigit, secondDigit) {
    return ((this.cleanCpf.slice(-1) == secondDigit) && (this.cleanCpf.slice(-2, -1) == firstDigit));
}

ValidateCpf.prototype.isValid = function() {
    if(typeof this.cleanCpf === 'undefined') return false;
    if(this.cleanCpf.length != 11) return false;
    if(this.isSequence()) return false;

    return this.compareDigits(this.getValidDigit(9), this.getValidDigit(10));
}

ValidateCpf.prototype.validate = function() {
    if(this.isValid()) {
        console.log(`CPF: ${this.sentCpf}`);
        console.log(`First digit: ${this.getValidDigit(9)}`);
        console.log(`Second digit: ${this.getValidDigit(10)}`);
        console.log('Valid\n');
    }
    else console.log('Not Valid\n');
}

let cpf = new ValidateCpf('705.484.450-52');
let cpf2 = new ValidateCpf('070.987.720-03');
let cpf3 = new ValidateCpf('070.987.720-0');
let cpf4 = new ValidateCpf('070.987.720-00');

cpf.validate();
cpf2.validate();
cpf3.validate();
cpf4.validate();