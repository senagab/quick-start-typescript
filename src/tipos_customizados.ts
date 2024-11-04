// tipo customizado
type aluno = {
    nome: string,
    cursos?: string[], // propriedade opcional
    idade: number
}

const alunos: aluno[] = [ // array
    { // objeto
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27
    },
    { // objeto
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23
    },
]

// para adicionar julia ao array será preciso adicionar um objeto
// alunos.push("Julia") não ira funcionar
alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
});

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}