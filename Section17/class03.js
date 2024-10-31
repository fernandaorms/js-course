const { text, files } = require('./base');

// * (optionals) 0 ou n {0,}
// + (mandatory) 1 ou n {1,}
// ? (optionals) 0 ou 1 {0,1}
// \ escaping char
// {n,m} min and max
// {10,} min 10
// {,10} from 0 to 10
// {5,10} from 5 to 10
// {10}

// console.log(text);
// const regExp1 = /Ja+mes/gi
// console.log(text.match(regExp1));

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g

for (const file of files) {
  const valid = file.match(regExp2);

//   if(!valid) continue;

  console.log(file, valid);
}