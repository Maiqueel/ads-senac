// 3. [Repetições] Elaborar um programa que leia ‘n’ números, até ser digitado 0. Ao final, exiba quantos
// números foram digitados, a soma dos números e qual o maior número digitado.

const prompt = require("prompt-sync")()

let numDig = 0
let somaDig = 0
let maiorDig = 0
console.log("Informe números ou 0 para sair")
do {
    const x = Number(prompt("Número: "))
    
    if(x == 0) {
        break
    }
    
    if (x > maiorDig){
        maiorDig = x
    }

    numDig++
    somaDig = somaDig + x

}while(true)

console.log("-----------------------------")
console.log(`Números digitados: ${numDig}`)
console.log(`Soma dos Números: ${somaDig}`)
console.log(`Maior Número: ${maiorDig}`)



    // -----------------------------
    // console.log(`Números digitados: ${}`)
    // console.log(`Soma dos Números: ${}`)
    // console.log(`Maior Número: ${}`)