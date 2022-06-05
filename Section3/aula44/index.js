
/*
try{
    console.log(variable);
} catch(error) {
    console.log(`variable does't exist`);
    console.log(error);
}
*/

function soma(x, y) {
   if((typeof x !== 'number') || (typeof y !== 'number')) {
       throw new TypeError('x e y precisam ser números');
   }

   return x + y;
}

try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(err) {
    //console.log(err);
    console.log('Erro - NaN');
}
