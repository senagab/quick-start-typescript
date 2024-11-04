class Conta {
    numeroConta: number;
    saldo: number = 0;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}


// interface
interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;

}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class ContaCorrente extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += valor - this.taxaTransferencia;
        return true;
    };
    taxaTransferencia: number = 0;

}