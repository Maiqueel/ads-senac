const prompt = require("prompt-sync")()

const numeroArray = []

do{
    const num = Number(prompt("Número: "))
    
    if(num == 0) {
        break
    }
    numeroArray.push(num)
}while(true)

console.log("Pares da Lista: ")
console.log("-".repeat(20))
for(i = 0; i < numeroArray.length; i++) {
    if(numeroArray[i] % 2 == 0) {
        console.log(numeroArray[i])
    }
}

console.log("Impares da Lista: ")
console.log("-".repeat(20))
for(i = 0; i < numeroArray.length; i++) {
    if(numeroArray[i] % 2 == 1) {
        console.log(numeroArray[i])
    }
}