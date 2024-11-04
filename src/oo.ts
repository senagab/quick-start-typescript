class Pessoa {
    nome: string; // declarar propriedade antes
    renda?: number;

    constructor(nome: string, renda?: number) { // propriedade opcional deve ser passada como argumento por ultimo
        this.nome = nome;
        this.renda = renda
    }

    dizOla(): string {
        return `${this.nome} disse oi`
    }
}   

// modificadores (publico ou privado)
class ContaBancaria {
    public saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number){
        this.numeroConta = numeroConta;
    }

    static retornaNumeroDoBanco() {
        return 125; // pertence a classe nao a instancia
    }

    private getSaldo() { // get
        return this.saldo;
    }

    depositar(valor: number) { // set
        this.saldo += valor
    }

}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456)
ContaBancaria.retornaNumeroDoBanco()