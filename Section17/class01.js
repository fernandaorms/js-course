// g - global (find all occurences)
// i - insensitive 
// (()()) groups
// | or

const { text } = require('./base');

const regExp1 = /(emily|james|)(, today his wife)/i;
const found = regExp1.exec(text);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}