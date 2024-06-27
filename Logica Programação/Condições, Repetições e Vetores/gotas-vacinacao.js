const prompt = require("prompt-sync")()

let continua

let gotasAplicadas = 0
let criancasVacinadas = 0

do {
    const nomeSave = prompt("Criança: ")
    const gotaSave = Number(prompt("Nº Gotas: "))

    gotasAplicadas = gotasAplicadas + gotaSave
    criancasVacinadas = criancasVacinadas + 1

    console.log(`${nomeSave} vacinado(a) com ${gotaSave} gotas.`)
    continua = prompt("Deseja continuar? (S/N) ").toUpperCase()
}while(continua == "S")

console.log("-".repeat(30))

console.log(`Crianças vacinadas: ${criancasVacinadas}`)
console.log(`Total de gotas: ${gotasAplicadas}`)

const frascos = Math.ceil(gotasAplicadas / 30)
console.log(`Nº de frascos abertos: ${frascos}`)