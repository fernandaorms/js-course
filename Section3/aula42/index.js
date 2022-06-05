// Inicial
// const ePaisagem = (width, height) => width > height ? true : false;

// Refatorando
const ePaisagem = (width, height) => width >= height;

console.log(ePaisagem(1920, 1080));