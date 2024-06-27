const prompt = require("prompt-sync")()

const produto = []
const preco = []

let continua
do {
    const x = prompt("Nome do Produto: ")
    const y = Number(prompt("Valor do Produto: "))

    produto.push(x)
    preco.push(y)

    continua = prompt("Continuar com a lista? (S/N)").toUpperCase()
}while(continua == "S")

console.log(`Lista de Compras: `)

let total = 0
for(i = 0; i < produto.length; i++) {
    console.log(`${produto[i]} - R$${preco[i].toLocaleString("pt-br", {minimumFractionDigits: 2})}`)
    total = total + preco[i]
}

console.log()
console.log(`Total da Compra: R$${total.toLocaleString("pt-br", { minimumFractionDigits: 2})}`)