const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateNumbers = () => String.fromCharCode(rand(48, 58));

const generateSymbols = () => {
    let interval =  rand(0, 4);

    switch(interval) {
        case 0:
            return String.fromCharCode(rand(33, 48));
        case 1:
            return String.fromCharCode(rand(58, 65));
        case 2:
            return String.fromCharCode(rand(91, 97));
        case 3:
            return String.fromCharCode(rand(123, 127));
    }
    
    return interval;
}

const generateLowercase = () => String.fromCharCode(rand(97, 123));

const generateUppercase = () => String.fromCharCode(rand(65, 91));

export default function generatePassword (size, numbers, symbols, lower, upper) {
    const passwordArray = [];

    let password = '';

    if(numbers) passwordArray.push(generateNumbers);
    if(symbols) passwordArray.push(generateSymbols);
    if(lower) passwordArray.push(generateLowercase);
    if(upper) passwordArray.push(generateUppercase);

    if(passwordArray.length != 0) {
        for(let i = 0; i < size; i++) {
            password += passwordArray[rand(0, passwordArray.length)]();
        }

        return password;
    }
    else return 'Error: No characters selected for password generation';
}