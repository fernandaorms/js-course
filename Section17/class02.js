const { text } = require('./base');
const regExp1 = /James|Emily/gi;

// (...( () ) )(...)(...)  $1 $2 $3 $4 $5
  
console.log(text);
console.log(text.match(regExp1));
console.log(text.replace(/(James|Emily)/gi, '<b>$1</b>'));
// console.log(texto.replace(/(João|Maria)/gi, function(input) {
//   return ' ############## ' + input.toUpperCase() + ' ############## ';
// }));