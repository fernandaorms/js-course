// For Clássico

// i  - index
// Imprimir 'Lista i' de 1 a 5
/*
for (let i = 0; i < 5; i++) {
    console.log(`Linha ${i + 1}`);
}
*/

const fruits = ['Laranja', 'Uva', 'Maracujá', 'Morango', 'Mexirica'];

fruits.sort();

for (let i = 0; i < fruits.length; i++){
    console.log(`Index ${i}: `, fruits[i]);
}