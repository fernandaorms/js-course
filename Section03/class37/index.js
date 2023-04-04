const nome = 'Fernanda Oliveira';

// for clássico
/*
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
*/

// for in
/*
for (let i in nome) {
    console.log(nome[i]);
}
*/

// for of 
/*
for (let letra of nome){
    console.log(letra);
}
*/


const nomes = [ 'Fernanda', 'Felipe', 'Flavia', 'Flavio'];

/*
for (let n of nomes){
    console.log(n);
}
*/

// for each

/*
nomes.forEach(function(el){
    console.log(el)
});
*/

// 02
nomes.forEach(function(el, i){
    console.log(i, el);
});


