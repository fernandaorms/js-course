function randomNumber(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function wait(message, time) {
    return new Promise((resolve, reject) => {
        if(typeof message !== 'string') {
            reject(false);
            return;
        }
        setTimeout(() => {
            resolve(message.toUpperCase() + ' - passed');
        }, time);
    });

}


const promises = [
    // 'First Value',
    wait('Promise 1', randomNumber(1, 3)),
    wait('Promise 2', randomNumber(1, 3)),
    wait('Promise 3', randomNumber(1, 3)),
    // wait(0, 1000),
    // 'Last Value'
];


// Promise.all = returns all promises
/*
Promise.all(promises)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
*/


// Promise.race = return the fastest solved promise (or error)
Promise.race(promises)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });


// Promise.resolve
function downloadPage() {
    const inCache = false;

    if(inCache) return Promise.resolve('Page in cache');
        
    return wait('Page downloaded!', 5000);
}
  
downloadPage()
    .then(pageData => {
        console.log(pageData);
    })
    .catch(e => console.log('ERROR', e));

// Promise.resolve