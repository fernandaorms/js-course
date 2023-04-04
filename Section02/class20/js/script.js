function myEscope() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado');

    const pessoas = [];
    
    function getForm(event) {
        event.preventDefault();

        const name = form.querySelector('.nome');
        const lastName = form.querySelector('.sobrenome');
        const weight = form.querySelector('.peso');
        const height = form.querySelector('.altura');

        const person = createObject(name.value, lastName.value, weight.value, height.value);

        pessoas.push(person);

        console.log(pessoas);

        addContent(name.value, lastName.value, weight.value, height.value);
    }

    function createObject(name, lastName, weight, height) {
        const object = {
            nome: name,
            sobrenome: lastName,
            peso: weight,
            altura:height
        };

        return object; 
    }

    function addContent(name, lastName, weight, height) {
        result.innerHTML += `<p>${name} ${lastName} - ${weight}Kg - ${height}cm</p>`
    }

    form.addEventListener('submit', getForm); 
}


window.onload = function() {
    myEscope();
};