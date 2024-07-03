const prompt = require("prompt-sync")()
const fs = require("fs")

// Cria os vetores.
const nomeFilme = []
const duracaoFilme = []
const generoFilme = []

// Função pra listar os filmes.
function listaFilmes() {        
    let minutagem = duracaoFilme[i]
    let horas = Math.floor(minutagem / 60)
    let minutos = minutagem % 60
    
    if(minutos != 0 && horas >= 1) {
        console.log(`${String(i+1).padEnd(5)} ${nomeFilme[i].padEnd(24)} ${String(horas + "h" + minutos + "m").padEnd(24)} ${generoFilme[i]}`)
    }else if(horas == 0) {
        console.log(`${String(i+1).padEnd(5)} ${nomeFilme[i].padEnd(24)} ${String(minutos + "m").padEnd(24)} ${generoFilme[i]}`)
    }else {
        console.log(`${String(i+1).padEnd(5)} ${nomeFilme[i].padEnd(24)} ${String(horas + "h").padEnd(24)} ${generoFilme[i]}`)
    }
}

// Função de Incluir os Filmes por Nome, Duração e Gênero. ( Opção: 1)
function incluir() {
    const x = prompt("Nome: ")
    const y = prompt("Duração (min): ")
    const z = prompt("Gênero: ")

    nomeFilme.push(x)
    duracaoFilme.push(y)
    generoFilme.push(z)

    console.log("Filme adicionado com sucesso.")

    const listarNovamente = prompt("Deseja incluir algum filme novamente? (S/N): ").toUpperCase()

    if(listarNovamente == "S" || listarNovamente == "SIM" ) {
        incluir()
    }
}

// Função para Listagem dos filmes ao usuário. ( Opção: 2)
function listar() {
    console.log("Listagem dos Filmes: ")
    console.log("=".repeat(40))
    console.log("Nº    Nome                     Duração (min)            Gênero")
    
    for(i = 0; i < generoFilme.length; i++) {
        listaFilmes()
    }
}

// Função pra Pesquisar os filmes por gênero ( Opção: 3 )
function pesquisarGenero() {
    const pesquisaGenero = prompt("Por qual gênero deseja filtrar? ")
    let contador = 0

    console.log(`Listagem dos Filme por Gênero de ${pesquisaGenero}: `)
    console.log("=".repeat(40))
    console.log("Nº    Nome                     Duração (min)            Gênero")

    for(i = 0; i < generoFilme.length; i++) {
        if(pesquisaGenero == generoFilme[i]) {
            listaFilmes()
            contador++
        }
    }

    if (contador == 0) {
        console.log(`* Nenhum filme do Gênero ${pesquisaGenero} foram encontrados.`)
    }
}

// Função pra pesquisar por intervalo de duração do filme. ( Opção: 4)
function pesquisaAvancada() {
    const x = Number(prompt("Duração inicial da busca (minutos): "))
    const y = Number(prompt("Duração limite da busca (minutos): "))
    let contador = 0
    
    for(i = 0; i < nomeFilme.length; i++) {
        if(duracaoFilme[i] >= x && duracaoFilme[i] <= y) {
            listaFilmes()
            contador++
        }
    }

    if (contador == 0) {
        console.log(`* Nenhum filme entre o intervalo de ${x} e ${y} foram encontrados.`)
    }
}

function alterarFilme() {
    console.log("Nº    Nome                     Duração (min)            Gênero")
    listar()
    console.log("=".repeat(40))
    console.log()

    console.log(`Alteração de Gênero dos Filmes: `)
    const codigo = Number(prompt("Código do Filme: "))

    if(codigo <= 0 || codigo > nomeFilme.length) {
        console.log("Erro. Código Inválido")
        return
    }

    console.log(`Filme....: ${nomeFilme[codigo-1]}`)
    console.log(`Duração....: ${duracaoFilme[codigo-1]}`)
    console.log(`Gênero....: ${generoFilme[codigo-1]}`)

    const novoGenero = prompt(`Novo gênero de ${nomeFilme[codigo-1]}: `)

    generoFilme[codigo-1] = novoGenero

    console.log("\nGênero alterado com sucesso.")
}

function excluirFilme() {
    console.log("Nº    Nome                     Duração (min)            Gênero")
    listar()
    console.log("=".repeat(40))
    console.log()
    
    const codigo = Number(prompt("Código do Filme que deseja excluir: "))

    if(codigo <= 0 || codigo > nomeFilme.length) {
        console.log("Erro. Código Inválido")
        return
    }

    const confirmacao = prompt(`Deseja realmente excluir o filme ${nomeFilme[codigo-1]} ? (S/N) `).toUpperCase()

    if(confirmacao == "S" || confirmacao == "SIM") {
        nomeFilme.splice(codigo-1, 1)
        duracaoFilme.splice(codigo-1, 1)
        generoFilme.splice(codigo-1, 1)
    }


}

function salvarDados() {
    const filmesArquivo = []

    for(let i = 0; i < nomeFilme.length; i++) {
        filmesArquivo.push(nomeFilme[i] + ";" + duracaoFilme[i] + ";" + generoFilme[i])
    }

    fs.writeFileSync("filmesDados.txt", filmesArquivo.join("\n"))

    console.log("Dados salvos corretamente em arquivos.")
}

function carregarDados() {
    if(fs.existsSync("filmesDados.txt")) {
        const filmesArquivo = fs.readFileSync("filmesDados.txt", "utf-8").split("\n")

        for(i = 0; i < filmesArquivo.length; i++) {
            const partes = filmesArquivo[i].split(";")
            nomeFilme.push(partes[0])
            duracaoFilme.push(Number(partes[1]))
            generoFilme.push(partes[2])
        }
    }
}

carregarDados()

// Função pra alterar os filmes da Array.
menuPrincipal:
do {
    console.log(`1. Incluir Filme`)
    console.log(`2. Listar Filmes`)
    console.log(`3. Pesquisar por Gênero`)
    console.log(`4. Pesquisar por intervalo de Duração`)
    console.log(`5. Alterar Filme`)
    console.log(`6. Excluir Filme`)
    console.log(`7. Finalizar`)

    const menuEscolha = Number(prompt("Opção: "))

    switch(menuEscolha) {
        case 1: incluir()
            break
        case 2: listar()
            break
        case 3: pesquisarGenero()
            break
        case 4: pesquisaAvancada()
            break
        case 5: alterarFilme()
            break
        case 6: excluirFilme()
            break
        default: break menuPrincipal
        }

}while(true)

salvarDados()