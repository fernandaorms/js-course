function randomNumber(min=0, max=3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function waiting(message, time) {
    return new Promise((resolve, reject) => {
        if(typeof message !== 'string') {
            reject('ERROR');
            return;
        }
        setTimeout(() => {
            resolve(message.toUpperCase() + ' - passed');
        }, time);
    });
}

/*
waiting('Step 1', randomNumber())
    .then(value => {
        console.log(value);
        return waiting('Step 2', randomNumber());
    })
    .then(step => {
        console.log(step);
        return waiting('Step 3', randomNumber());
    })
    .then(step => {
        console.log(step);
        return step;
    })
    .then(step => {
        console.log('Finished at ' + step);
    })
    .catch(e => {
        console.log(e);
    });
*/

async function execute() {
  try {
    const step1 = waiting('Step 1', 1000);
    console.log(step1);

    setTimeout(function() {
        console.log('This promise was pending: ', step1);
      }, 1100);

    const step2 = await waiting('Step 2', randomNumber());
    console.log(step2);

    const step3 = await waiting('Step 3', randomNumber());
    console.log(step3);

    console.log('Finished at ' + step3);
  } catch(e) {
    console.log(e);
  }
}

execute();

const test = waiting('Something', 5000);
console.log(test, ' outside the function');