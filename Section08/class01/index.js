function randomNumber(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function wait(message, time) {
    return new Promise((resolve, reject) => {
        if(message === 'Error') {
            reject(new Error('ERRO! Data Not Found'));
            return;
        }
        setTimeout(() => {
            resolve(message);
        }, time);
    });

}

wait('Connecting to DB...', randomNumber(1, 3))
    .then(awnser => {
        console.log(awnser);
        return wait('Searching data...', randomNumber(1, 3));
    })
    .then(awnser => {
        console.log(awnser);
        return wait('Error', randomNumber(1, 3));
    })
    .then(awnser => {
        console.log(awnser);
        return wait('Showing results :)', randomNumber(1, 3));
    })
    .then(awnser => {
        console.log(awnser)
    })
    .catch(error => {
        console.log(error);
    });
