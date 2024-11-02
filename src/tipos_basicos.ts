let estaChovendo: boolean = false

estaChovendo = true

let idade : number = 27

let altura: number = 1.75

// tipagem explicita
const nacionalidade: string = 'brasileira'

// array de string
const colegas: string[] = ['lucas', 'fernanda']


const tecnologias: Array<string> = ['html', 'css', 'js']

// readonly array | push nao funciona
const notas: ReadonlyArray<number> = [7, 8, 9, 10]

// array multi tipado
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['gabriel', true, 12]

// variavel de com operador logico "or"
let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'

let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1,2,3]
dadosDaApi = 'string'

// tipagem implicita
let curso = 'front-end'