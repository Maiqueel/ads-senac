const prompt = require("prompt-sync")()

const veiculos = []
const preco = []

let continua
let num = 0
do {
    num = num + 1
    const nV = prompt(`${num}º Veículo: `)
    const pV = Number(prompt("Preço R$: "))

    veiculos.push(nV)
    preco.push(pV)

    continua = prompt("Continua (S/N): ").toUpperCase()
}while(continua == "S")

console.log(`Lista de Veículos da Revenda: `)
console.log("-".repeat(20))

let  totalVeiculos = 0
for(i = 0; i < veiculos.length; i++) {
    console.log(`${veiculos[i]} - R$${preco[i].toFixed(2)}`)
    totalVeiculos = totalVeiculos + preco[i]
}

const mediaValor = totalVeiculos / veiculos.length
console.log(`Preço Médio dos Veículos R$ ${mediaValor.toFixed(2)}`)