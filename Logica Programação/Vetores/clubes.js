const prompt = require("prompt-sync")()

const clubes = []

let continua
let num = 0
do {
    num = num + 1
    const time = prompt(`${num}º Clube: `)

    if(time == "fim") {
        break
    }
    
    clubes.push(time)
}while(true)

for(i = 0; i < clubes.length; i = i + 2) {
    console.log(`${clubes[i]} x ${clubes[i+1]}`)
}