const pessoa = {
    nome: 'Fernanda',
    sobrenome: 'Oliveira',
    idade: 18,
  
    fala() {
      console.log(`A minha idade atual é ${this.idade}.`);
    },
  
    incrementaIdade() {
      this.idade++;
    }
  };
  
  pessoa.fala();
  pessoa.incrementaIdade();
  pessoa.fala();
  pessoa.incrementaIdade();
  pessoa.fala();
  pessoa.incrementaIdade();
  pessoa.fala();