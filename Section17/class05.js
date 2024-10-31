const { alphabet } = require('./base');

// [abc] -> Conjunto [^] -> Negation
// [0-9]
// [min-maxANYTHING] 
// [^min-maxANYTHING] -> Everything but this
console.log(alphabet);
console.log(alphabet.match(/[0-9]+/g));
console.log(alphabet.match(/[a-z]+/g));
console.log(alphabet.match(/[A-Z]+/g));
console.log(alphabet.match(/[^a-zA-Z0-9]+/g)); // Nagation
console.log(alphabet.match(/[\u00A0-\u00BA]+/g)); // Unicode
console.log(alphabet.match(/\w+/g));
console.log(alphabet.match(/\W/g));
console.log(alphabet.match(/\d+/g));
console.log(alphabet.match(/\D+/g));
console.log(alphabet.match(/\s+/g));
console.log(alphabet.match(/\S+/g));