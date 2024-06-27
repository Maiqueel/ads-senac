const prompt = require("prompt-sync")()

const competidores = []

let num = 0

do {
    num = num + 1
    const nomes = prompt(`${num}º Competidor: `)

    if(nomes.toUpperCase() == "FIM") {
        break
    }

    competidores.push(nomes)
}while(true)

console.log(`Lista dos Competidores: `)
console.log("-".repeat(20))

for(i = competidores.length - 1; i >= 0; i--) {
    console.log(competidores[i])
}