const prompt = require("prompt-sync")()

const candidatoNome = []
const candidatoAcertos = []

let continua
let num = 0
do {
    num = num + 1
    const x = prompt(`${num}º Candidato: `)
    const y = Number(prompt("Nº de Acertos: "))

    candidatoNome.push(x)
    candidatoAcertos.push(y)

    continua = prompt("Continua (S/N): ").toUpperCase()
}while(continua == "S")

console.log(`Resultado do Concurso`)
console.log("-".repeat(20))

for(i = 0; i < candidatoNome.length; i++) {
    if(candidatoAcertos[i] >= 30) {
        console.log(`${candidatoNome[i]} - ${candidatoAcertos[i]} acertos - Aprovado(a)`)
    }else {
        console.log(`${candidatoNome[i]} - ${candidatoAcertos[i]} acertos - Reprovado(a)`)
    }
}