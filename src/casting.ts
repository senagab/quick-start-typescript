// trecho abaixo retornará erro pois ja existe uma variavel idade em outro arquivo do projeto
// let idade: any = 25

// para resolver este erro utilize namespace
namespace casting {
    let idade: any = 25;
    // toFixed() adiciona casas decimais a variaveis numericas
    (idade as number).toFixed();
    (idade as string).length;

    // retorna erro: iteração de apenas um numero
    (idade as string[]).forEach(x => { // transforma em array de string
        console.log(x);
    })

    let nome: string = 35 as unknown as string;
}