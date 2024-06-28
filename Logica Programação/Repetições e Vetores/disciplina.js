// 1. [Repetições] Elaborar um programa que leia disciplina e conceito (A, B, C ou D) de ‘n’ disciplinas.
// Informe ao final em quantas disciplinas o aluno for aprovado (A, B ou C) e em quantas reprovado (D).

const prompt = require("prompt-sync")()
let aprovado = 0
let reprovado = 0

let continua
do {
    const x = prompt("Disciplina: ")
    const conceito = prompt("Conceito: ").toUpperCase()

    if (conceito == "A" || conceito == "B" || conceito == "C") {
        aprovado = aprovado + 1
        } else if(conceito == "D") {
        reprovado++
        }
        
    continua = prompt("Continua (S/N) ").toUpperCase()
}while(continua == "S")

console.log("Resumo do Semestre:")
console.log("-".repeat(25))
console.log(`Aprovado: ${aprovado} disciplina(s)`)
console.log(`Reprovado: ${reprovado} disciplina(s)`)