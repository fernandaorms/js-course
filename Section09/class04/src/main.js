import GenerateCPF from './modules/GenerateCPF'

import './assets/css/style.css';


const generator = new GenerateCPF();
const button = document.querySelector('#btnGenerate');
const result = document.querySelector('.result span');

button.addEventListener('click',() => {
    result.innerHTML = generator.generateNewCPF();
});
