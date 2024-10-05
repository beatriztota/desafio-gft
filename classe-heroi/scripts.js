class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'ataque desconhecido';
          break;
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroi1 = new Hero('Gandalf', 100, 'mago');
  const heroi2 = new Hero('Aragorn', 87, 'guerreiro');
  const heroi3 = new Hero('Lao', 40, 'monge');
  const heroi4 = new Hero('Kage', 25, 'ninja');
  
  heroi1.atacar(); 
  heroi2.atacar(); 
  heroi3.atacar(); 
  heroi4.atacar(); 
  