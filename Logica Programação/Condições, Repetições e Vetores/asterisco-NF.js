const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

const metade = Math.floor(num / 2)

const abre = "[".repeat(metade)
const fecha = "]".repeat(metade)

if (num % 2 == 0) {
    console.log(abre + fecha)
} else {
    console.log(abre + "*" + fecha)
}
