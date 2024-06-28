// 4. [Vetores] Elaborar um programa que leia modelo e preço de ‘n’ veículos (até ser digitado ‘Fim’ no
//     modelo). Após, leia o valor do frete (será o mesmo para todos os veículos). Exiba o valor final de cada
//     veículo acrescido do frete.


const prompt = require("prompt-sync")()

const veiculo = []
const valor = []
let num = 0

do {
    num++
    const x = prompt(`${num}º Veículo: `)

    if(x == "Fim") {
        break
    }

    const y = Number(prompt("Preço R$: "))

    veiculo.push(x)
    valor.push(y)
}while(true)

const frete = Number(prompt("Frete R$: "))


console.log("Tabela de Preços (com Frete)")
console.log("-".repeat(30))
for(i = 0; i < veiculo.length; i++) {
    console.log(`${veiculo[i]} - R$ ${(valor[i] + frete).toLocaleString("pt-br", {minimumFractionDigits: 2})}`)
}