const prompt = require("prompt-sync")()

const num1 = Number(prompt("1º Nº: "))
const num2 = Number(prompt("2º Nº: "))

if(num1 % 2 == 0 && num2 % 2 == 0) {
    console.log(`Os 2 números são pares.`)
}else if(num1 % 2 == 1 && num2 % 2 == 1) {
    console.log(`Os 2 números são ímpares.`)
}else {
    console.log(`Os 2 números estão misturados.`)
}