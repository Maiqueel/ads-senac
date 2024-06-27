const prompt = require("prompt-sync")()

const amigos = []

for(let i = 1; i <= 5; i++) {
    const nome = prompt(`${i} amigo: `)
    amigos.push(nome)
}

console.log(`Seu primeiro amigo é ${amigos[0]}`)

console.log("Lista de amigos")
console.log("-".repeat(15))

for(let i = 0; i < amigos.length; i++) {
    console.log(amigos[i])
}