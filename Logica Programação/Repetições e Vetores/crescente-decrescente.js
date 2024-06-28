// 6. [Vetores] Elaborar um programa que leia 5 números. Ao final, listar os números e informar se eles
// estão em ordem crescente ou não estão em ordem crescente.

const prompt = require("prompt-sync")()
const numero = []

for(i = 0; i < 5; i++) {
    numero[i] = Number(prompt(`${i+1}º Número: `))
}

console.log("-".repeat(25))
console.log("Números Informados: ")
for(i = 0; i < numero.length; i++) {
    console.log(numero[i])
}

let crescente = true
for(i = 0; i < numero.length; i++) {
    if(numero[i+1] < numero[i]){
        crescente = false
    }
}

if(crescente == true) {
    console.log("Ordem crescente.")
}else{
    console.log("Não está em ordem crescente.")
}