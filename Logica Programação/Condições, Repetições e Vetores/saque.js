const prompt = require("prompt-sync")()

const saques = []

console.log("Informe o valor do saque ou 0 para sair.")

do{
    const valor = Number(prompt("Saque R$: "))

    if(valor % 10 !== 0) {
        console.log("Inválido.")
        continue
    }else if (valor == 0) {
        break
    }

    saques.push(valor)
    console.log("Ok, saque válido.")
}while(true)

let total = 0
console.log("Saques Válidos:")
console.log("-".repeat(20))
for(i = 0; i < saques.length; i++) {
    total = total + saques[i]
    console.log(`R$ ${saques[i].toLocaleString("pt-br", {minimumFractionDigits: 2})}`)
}

console.log(`Total R$: ${total.toLocaleString("pt-Br", { minimumFractionDigits: 2})}`)