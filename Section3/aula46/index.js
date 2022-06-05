function setHour() {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(setHour());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 4000);

setTimeout( function(){
    console.log('Hellow World');
}, 5000);