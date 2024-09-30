import { useState } from 'react'
import './App.css'

function App() {
  const [mensagem, setMensagem] = useState();

  function casa() {
    setMensagem("Você selecionou a casa")
  }

  function apartamento() {
    setMensagem("Você selecionou o apartamento")
  }
  return (
    <>
    <h1>Imobiliaria Avenida</h1>
    <h2>Qual tipo de Imóvel você procura?</h2>
    <hr />
    <div className='imagens'>
      <img onClick={casa} src="./casas-bonitas-1.webp" alt="s" />
      <img onClick={apartamento} src="./apartamento.jpg" alt="s" />
    </div>
    <h2>{mensagem}</h2>
    </>
  )
}

export default App
