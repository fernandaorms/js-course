const isNumber = (num) => typeof(num) ===  "number";

const divides = (num, divisor) => num % divisor === 0;

const validate = (num) => {
    if(!isNumber(num)) return num;

    if((divides(num, 3)) && (divides(num, 5))) return 'FizzBuzz'

    if(divides(num, 3)) return 'Fizz';

    if(divides(num, 5)) return 'Buzz';

    return num;
};


for (let i = 0; i < 100; i++) {
    console.log(`${i} - ${validate(i)}`);
}
