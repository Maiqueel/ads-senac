const prompt = require("prompt-sync")()

const disciplina = []
const conceito = []

let continua
do {
    const x = prompt("Disciplina: ")
    const y = prompt("Conceito: ").toUpperCase()

    disciplina.push(x)
    conceito.push(y)

    continua = prompt("Continuar (S/N): ").toUpperCase()
}while(continua == "S")

const filtroPesquisa = prompt("Qual conceito filtrar?").toUpperCase()

console.log(`Disciplinas com ${filtroPesquisa}`)
console.log("-".repeat(25))
for(i = 0; i < disciplina.length; i++) {
    if(conceito[i] == filtroPesquisa) {
        console.log(disciplina[i])
    }
}

console.log()
console.log(`Outros conceitos`)
console.log("-".repeat(25))
for(i = 0; i < disciplina.length; i++) {
    if(conceito[i] !== filtroPesquisa) {
        console.log(`${disciplina[i]} - ${conceito[i]}`)
    }
}