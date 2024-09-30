import { useState } from 'react'
import './App.css'

function App() {
  const [imagemAposta, setimagemAposta] = useState("");
  const [imagemPC, setimagemPC] = useState("");
  const [mensagem, setMensagem] = useState("");

  function escolherImagem(imagem) {
    setimagemAposta(imagem)
  }

  function desafiarPC() {
    
    if(imagemAposta == "") {
      alert("Escolha uma figura pra apostar.")
      return
    }

    const num = Math.ceil(Math.random()*3)
    let imagem
    if (num == 1) {
      imagem = "pedra"
    }else if(num == 2) {
      imagem = "papel"
    }else {
      imagem = "tesoura"
    }
    setimagemPC(imagem)

    if(imagemAposta == imagem) {
      setMensagem("Empate! Tente Novamente!")
    }else if(imagemAposta == "pedra" && imagem == "tesoura" || imagemAposta == "papel" && imagem == "pedra" || imagemAposta == "tesoura" && imagem == "papel") {
      setMensagem("Você ganhou!")
    }else {
      setMensagem("Você perdeu!")
    }
  }

  return (
    <>
    <h1>Jogo: Pedra, Papel e Tesoura</h1>
    <hr />
    <h2>Clique sobre a aimgem para fazer sua aposta.</h2>
    <img onClick={() => escolherImagem("pedra")} src="./pedra.png" alt="" />
    <img onClick={() => escolherImagem("papel")} src="./papel.png" alt="" />
    <img onClick={() => escolherImagem("tesoura")} src="./tesoura.png" alt="" />
    {imagemAposta &&
    <>
    <span>Sua aposta é: </span>
    <img src={`${imagemAposta}.png`} alt="" /></>
    }

    <h2>Clique em desafiar PC para ver o resultado da sua aposta: <button onClick={desafiarPC}>Desafiar PC</button></h2>
    
    <img src="./pedra.png" alt="" />
    <img src="./papel.png" alt="" />
    <img src="./tesoura.png" alt="" />
    {imagemPC &&
    <>
    <span>Computador apostou: </span>
    <img src={`${imagemPC}.png`} alt="" />
    </>

    }
    {mensagem &&
    <>
    <h2>{mensagem}</h2>
    </>
    }
    </>
  )
}

export default App
