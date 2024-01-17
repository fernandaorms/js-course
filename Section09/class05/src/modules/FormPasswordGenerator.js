import generatePassword from './PasswordGenerator'


const size = document.querySelector('#passwordLenght');
const numbers = document.querySelector('#includeNumbers');
const symbols = document.querySelector('#includeSymbols');
const lower = document.querySelector('#includeLowercase');
const upper = document.querySelector('#includeUppercase');

const btnGenerate = document.querySelector('.button-generate > button');
const inputPassword = document.querySelector('#generatedPassword');

const btnCopy = document.querySelector('#buttonCopy');

export default () => {
    btnGenerate.addEventListener('click', () => { 
        const password = generatePassword(size.value, numbers.checked, symbols.checked, lower.checked, upper.checked);
        inputPassword.value = password;
    });

    btnCopy.addEventListener('click', (e) => { 

        inputPassword.select();
     
        document.execCommand('copy');
     
        inputPassword.setSelectionRange(0, 0);
     });
}
