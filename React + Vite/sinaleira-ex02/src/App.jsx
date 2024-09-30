import { useState } from 'react'
import './App.css'

function App() {
  const [imagem, setImagem] = useState("vermelha.png")
  const [texto, setTexto] = useState("Sinal Vermelho: Proibido passar")
  const [cor, setCor] = useState("cor-vermelha")

  function alterarSinaleira() {
    if (imagem == "vermelha.png") {
      setImagem("amarela.png")
      setTexto("Sinaleira Amarela!")
      setCor("cor-amarela")
    } else if (imagem == "amarela.png") {
      setImagem("verde.png")
      setTexto("Sinaleira Verde!!")
      setCor("cor-verde")
    }else {
      setImagem("vermelha.png")
      setTexto("Sinal Vermelho: Proibido passar")
      setCor("cor-vermelha")
    }
  }

  return (
    <>
    <h1>Escola de Trânsito</h1>
    <h2>Aula sobre sinaleira</h2>
    <hr />
    <img onClick={alterarSinaleira} src={imagem} alt="" />
    <h2 className={cor}>{texto}</h2>
    <h3><i>* Clique sobre a sinaleira para trocar de cor.</i></h3>
    </>
  )
}

export default App
