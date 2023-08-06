// Classe VideoGame
class VideoGame {
    constructor(nome, fabricante, anoLancamento) {
        this.nome = nome;
        this.fabricante = fabricante;
        this.anoLancamento = anoLancamento;
    }

    jogar() {
        return `Jogando ${this.nome}...`;
    }

    desligar() {
        return `${this.nome} desligando...`;
    }
}

// Classe Console que herda de VideoGame
class Console extends VideoGame {
    constructor(nome, fabricante, anoLancamento, numControles) {
        super(nome, fabricante, anoLancamento);
        this.numControles = numControles;
    }

    conectarControle() {
        return `Conectando ${this.numControles} controles ao ${this.nome}...`;
    }
}

// Classe Portatil que herda de VideoGame
class Portatil extends VideoGame {
    constructor(nome, fabricante, anoLancamento, peso) {
        super(nome, fabricante, anoLancamento);
        this.peso = peso;
    }

    carregar() {
        return `Carregando o ${this.nome} portátil...`;
    }
}

// Classe RetroConsole que herda de VideoGame
class RetroConsole extends VideoGame {
    constructor(nome, fabricante, anoLancamento, modeloAntigo) {
        super(nome, fabricante, anoLancamento);
        this.modeloAntigo = modeloAntigo;
    }

    jogarJogosClassicos() {
        return `Jogando jogos clássicos no ${this.modeloAntigo} ${this.nome}...`;
    }
}

// Exemplo de utilização das classes
// Criando instâncias de objetos
const playstation = new Console("PlayStation 5", "Sony", 2020, 2);
const switchConsole = new Portatil("Nintendo Switch", "Nintendo", 2017, "300g");
const nes = new RetroConsole("NES", "Nintendo", 1985, "NES-001");

// Exemplo de utilização dos objetos
console.log(playstation.jogar());
console.log(playstation.conectarControle());
console.log(switchConsole.jogar());
console.log(switchConsole.carregar());
console.log(nes.jogar());
console.log(nes.jogarJogosClassicos());
console.log(nes.desligar());
