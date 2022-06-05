// Initial Solution
const start = document.querySelector('button.iniciar');
const pause = document.querySelector('button.pausar');
const zero = document.querySelector('button.zerar');
const clock = document.querySelector('p.relogio');

let seconds = 0;
let timer = 0;

function startClock(){
    timer = setInterval( function() {
        seconds++;
        clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}

function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);

    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

console.log(getTimeFromSeconds(10));


start.addEventListener('click', function(event) {
    start.classList.add('active');

    pause.classList.remove('active');
    zero.classList.remove('active');

    clock.classList.remove('pausado');
    
    startClock();
});

pause.addEventListener('click', function(event) {
    pause.classList.add('active');

    start.classList.remove('active');
    zero.classList.remove('active');

    clock.classList.add('pausado');
    
    clearInterval(timer);
});

zero.addEventListener('click', function(event) {
    zero.classList.add('active');
    
    start.classList.remove('active');
    pause.classList.remove('active');

    clock.classList.remove('pausado');

    clearInterval(timer);
    seconds = 0;
    clock.innerHTML = getTimeFromSeconds(seconds);
});