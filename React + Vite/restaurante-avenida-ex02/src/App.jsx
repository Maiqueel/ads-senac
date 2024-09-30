import { useState } from 'react'
import './App.css'

function App() {
  const [mesa, setMesa] = useState(10)

  function entradaCliente() {
    if(mesa == 0) {
      alert("Todas as mesas já foram ocupadas.")
      return
    }
    const num = mesa - 1
    setMesa(num)
  }

  function saidaCliente() {
     if (mesa == 10) {
      alert("Todas mesas estão disponíveis.")
      return
     }

     const num = mesa + 1
     setMesa(num)
  }
  return (
    <>
    <h1>Restaurante Avenida</h1>
    <h2>Controle de Mesas</h2>
    <hr />
    <img src="./restaurante.jpg" alt="" />
    <h2>Mesas Disponíveis: {mesa} - Mesas Ocupadas: {10-mesa}</h2>
    <button onClick={entradaCliente}>Entrada de Cliente</button>
    <button onClick={saidaCliente}>Saída de Cliente</button>
    </>
  )
}

export default App
