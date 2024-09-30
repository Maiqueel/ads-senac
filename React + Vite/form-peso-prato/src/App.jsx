import { useForm } from "react-hook-form"
import './App.css'
import { useState } from "react"

function App() {
  const { register, handleSubmit } = useForm();
  const [ resposta, setResposta ] = useState();

  function calcularPrato(data) {
    const nome = data.nome
    const peso = data.peso
    
    setResposta(`${nome}, seu prato pesou ${peso} gr.`)
  }

  return (
    <>
    <form onSubmit={handleSubmit(calcularPrato)}>
      <p>
        <label htmlFor="nome">Nome do Cliente: </label>
        <input type="text" id="nome" {...register("nome")}/>
      </p>
      <p>
        <label htmlFor="nome">Peso do Prato (gr): </label>
        <input type="text" id="peso" {...register("peso")}/>
      </p>
      <button type="submit">Calcular</button>
    </form>
    <h2>{resposta}</h2>
    </>
  )
}

export default App
