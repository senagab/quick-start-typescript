"use strict";
// trecho abaixo retornará erro pois ja existe uma variavel idade em outro arquivo do projeto
// let idade: any = 25
// para resolver este erro utilize namespace
var casting;
(function (casting) {
    let idade = 25;
    // toFixed() adiciona casas decimais a variaveis numericas
    idade.toFixed();
    idade.length;
    // retorna erro: iteração de apenas um numero
    idade.forEach(x => {
        console.log(x);
    });
    let nome = 35;
})(casting || (casting = {}));
