// adicionar tipagem aos argumentos (depois dos argumentos ) e tipagem do retorno (antes da chave)
function calculaArea(base: number, altura: number): number {
    return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => base * altura

// operador rest (onde nao se conhece todos os argumentos)
function somar(...numeros: number[]): void { // quando não temos retorno, o retorno é vazio "void"
    // numeros.reduce()
    console.log(numeros) 
}

function teste(): string | number {
    if (10 > 5) {
        return 'dez é maior que cinco'
    } else {
        return 5
    }
}

const resultadoDeTeste = teste()