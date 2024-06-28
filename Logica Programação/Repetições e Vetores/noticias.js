// 5. [Vetores] Elaborar um programa que leia 10 notícias. Após, solicite o número de notícias que um
// usuário deseja ver. Listar as últimas notícias (mais recentes) conforme o número informado.

const prompt = require("prompt-sync")()

const noticias = []

for(i = 0; i <= 9; i++) {
    noticias[i] = prompt(`${i+1}º Notícia: `)
}

console.log()
const num = Number(prompt("Quantas notícias você quer ver? "))

for(i = 9; i >= 10-num; i--) {
    console.log(noticias[i])
}