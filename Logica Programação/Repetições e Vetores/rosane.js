// 2. [Repetições] Elaborar um programa que leia um número e um nome. Exiba o nome entre “*”. O
// número indica a quantidade de * que devem ser inseridas antes e após o nome

const prompt = require("prompt-sync")()

const nome = prompt("Nome: ")
const numero = Number(prompt("Número: "))

console.log(`${"-".repeat(numero)} ${nome} ${"-".repeat(numero)}`)