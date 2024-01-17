class ValidateCpf {
    constructor(sentCpf) {
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

    isSequence() {
        return (this.cleanCpf[0].repeat(this.cleanCpf.length) === cpf);
    }

    getSum(number) {
        let sum = 0;

        this.arrayCpf.slice(0, number).forEach((value, key) => {
            sum += value * (number + 1 - key);
        });

        return sum;
    }

    getValidDigit(number) {
        let digit = 11 - (this.getSum(number) % 11);

        return digit > 9 ? 0 : digit;
    }

    compareDigits(firstDigit, secondDigit) {
        return ((this.cleanCpf.slice(-1) == secondDigit) && (this.cleanCpf.slice(-2, -1) == firstDigit));
    }

    validate() {
        if(typeof this.cleanCpf === 'undefined') return false;
        if(this.cleanCpf.length != 11) return false;
        if(this.isSequence()) return false;
    
        return this.compareDigits(this.getValidDigit(9), this.getValidDigit(10));
    }
}
