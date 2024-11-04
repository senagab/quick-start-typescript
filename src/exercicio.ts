// MULTIPLICAÇÃO
let a:number, b:number; // instancia de variaveis com tipagem

function multiplicarNumeros(a: number, b:number): number { // argumentos e retorno com tipagem
    return a * b;
}

console.log(multiplicarNumeros(10,2)); // print com retorno

// SAUDAÇÃO
function saudacaoDePessoa(nome:string):string { // argumento e retorno com tipagem
    return `Olá ${nome}! Como vai?`
}

console.log(saudacaoDePessoa('jose')); // print com retorno utilizando aspas inferindo ser string