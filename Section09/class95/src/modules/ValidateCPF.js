export default class ValidateCPF {
    constructor(sentCPF) {
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: sentCPF.replace(/\D+/g, '')
        });
    }

    isSequency() {
        return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
    }

    generateNewCPF() {
        const noDigitsCPF = this.cleanCPF.slice(0, -2);
        const digito1 = ValidateCPF.generateDigit(noDigitsCPF);
        const digito2 = ValidateCPF.generateDigit(noDigitsCPF + digito1);
        this.newCPF = noDigitsCPF + digito1 + digito2;
    }
    
    static generateDigit(noDigitsCPF) {
        let total = 0;
        let reverso = noDigitsCPF.length + 1;

        for(let stringNumerica of noDigitsCPF) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }
    
    validate() {
        if(!this.cleanCPF) return false;
        if(typeof this.cleanCPF !== 'string') return false;
        if(this.cleanCPF.length !== 11) return false;
        if(this.isSequency()) return false;
        this.generateNewCPF();

        return this.newCPF === this.cleanCPF;
    }
};
