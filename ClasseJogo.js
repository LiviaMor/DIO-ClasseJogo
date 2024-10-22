class Heroi {
    ataque = "";

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === "iniciador") {
            this.ataque = "bang";
        } else if (this.tipo === "controlador") {
            this.ataque = "smoke";
        } else if (this.tipo === "sentinela") {
            this.ataque = "armadilhas";
        } else if (this.tipo === "duelista") {
            this.ataque = "velocidade";
        } else {
            this.tipo = `- ${this.tipo} - é um TIPO INVÁLIDO`;
            this.ataque = "ATAQUE INVÁLIDO";
        }

        // Saída -> ataque
        console.log("O " + this.tipo + " atacou usando " + this.ataque);
    }
}

// Exemplo de uso
let heroi1 = new Heroi("Arthur", 30, "iniciador");
heroi1.atacar(); // Saída: O iniciador atacou usando bang

let heroi2 = new Heroi("Lara", 25, "duelista");
heroi2.atacar(); // Saída: O duelista atacou usando velocidade

let heroi3 = new Heroi("Zara", 28, "mago");
heroi3.atacar(); // Saída: O - mago - é um TIPO INVÁLIDO atacou usando ATAQUE INVÁLIDO