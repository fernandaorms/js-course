function myEscope(){
    
    // Functions
    function dateFormat(type, number) {
        const weekDayText = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
        const monthText = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        
        let size = 0;
        let array = [];
        let text;

        switch(type) {
            case 0:
                size = weekDayText.length;
                array = [...weekDayText];
                break;
            case 1:
                size = monthText.length;
                array = [...monthText];
                break;
            default:
                break;
        }

        return array[number];
    }


    function leftZero (num) {
        return num >= 10 ? num : `0${num}`;
    }



    // Call
    const heading = document.querySelector('h1');

    const date = new Date();

    const day = date.getDate();
    const year = date.getFullYear();
    const hour = leftZero(date.getHours());
    const min = leftZero(date.getMinutes());
    const weekDay =  dateFormat(0, date.getDay());
    const month =  dateFormat(1, date.getMonth());

    const dateFormated = `${weekDay}, ${day} de ${month} de ${year} ${hour}:${min}`;
    
    heading.innerHTML = dateFormated;
}


window.onload = () => {
    myEscope();
}; 



/*
** Solução usando .toLocaleDateString()

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });

*/