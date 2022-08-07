//                -5        -4       -3        -2          -1
//                 0         1        2         3           4
const names = ['Eduardo', 'Maria', 'Joana', 'Fernanda', 'Mariana'];

// names.splice(index, delete, el1, el2, el3);

// push
// names.splice(names.length, 0, 'Felipe', 'Oliveira');

// unshift
// names.splice(0, 0, 'Felipe', 'Oliveira');

// pop
// const removed = names.splice(-1, 1);

// shift
// const removed = names.splice(0, 1);


const removed = names.splice(1, 2, 'Alda', 'Felipe');

console.log(names, removed);