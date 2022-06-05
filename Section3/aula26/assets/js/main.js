function myEscope() {
    const form = document.querySelector('#formulario');
    const result = document.querySelector('#resultado');


    function isEmpty(value) {
        if(value === '') return true;
        return false;
    }


    function isValid(value, max, min){
        if((value >= min) && (value <= max)) return true;
        return false;
    }


    function calculateIMC(weight, height) {
        return weight / (height * height);
    }


    function addParagraph(element, css, content) {
        element.innerHTML = `<p class='${css}'>${content}</p>`
    }
    

    function compareIMC(imc){
        let message = '';

        if(imc < 18.5) message = 'Abaixo do peso';
        else if((imc >= 18.5) && (imc <= 24.9)) message = 'Peso normal';
        else if((imc >= 25) && (imc <= 29.9)) message = 'Sobrepeso';
        else if((imc >= 30) && (imc <= 34.9)) message = 'Obesidade grau 1';
        else if((imc >= 35) && (imc <= 39.9)) message = 'Obesidade grau 2';
        else message = 'Obesidade grau 3';

        return message;
    }


    function getForm(event) {
        event.preventDefault();
        
        const weight = form.querySelector('#peso');
        const height = form.querySelector('#altura');

        const person = {
            peso: weight.value,
            altura: height.value,
        };

        if((isEmpty(person.peso)) || (!isValid(person.peso, 595, 20))){
            addParagraph(result, 'bad', 'Peso Inválido');
            return;
        }
        else if((isEmpty(person.altura)) || (!isValid(person.altura, 3, 1))){
            addParagraph(result, 'bad', 'Altura Inválida');
            return;
        }

        const imc = calculateIMC(person.peso, person.altura).toFixed(2);
        const imcClassified  = compareIMC(imc);

        const message = `Seu IMC é ${imc} (${imcClassified})`;

        addParagraph(result, 'good', message);  
    }

    
    form.addEventListener('submit', getForm);
}


window.onload = function() {
    myEscope();
};