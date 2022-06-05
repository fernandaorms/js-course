/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados
Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'Fernanda',
    sobrenome: 'Oliveira'
  };
  const b = {...a}; // ... == spread, copia o valor de a para b
  
  b.nome = 'Felipe';
  console.log(a);
  console.log(b);