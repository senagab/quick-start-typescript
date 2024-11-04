"use strict";
// adicionar tipagem aos argumentos (depois dos argumentos ) e tipagem do retorno (antes da chave)
function calculaArea(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => base * altura;
// operador rest (onde nao se conhece todos os argumentos)
function somar(...numeros) {
    // numeros.reduce()
    console.log(numeros);
}
function teste() {
    if (10 > 5) {
        return 'dez é maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
