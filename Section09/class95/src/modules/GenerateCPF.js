import ValidateCPF from './ValidateCPF.js';

export default class GenerateCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    fomatted(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    generateNewCPF() {
        const noDigitCPF = this.rand();
        const digit1 = ValidateCPF.generateDigit(noDigitCPF);
        const digit2 = ValidateCPF.generateDigit(noDigitCPF + digit1);
        const newCPF = noDigitCPF + digit1 + digit2;
        return this.fomatted(newCPF);
    }
}
