import { useForm } from "react-hook-form";
import './App.css'
import { useState } from "react";

function App() {
  const [ NotaFinal, setNotaFinal] = useState("");
  const { register, handleSubmit } = useForm();

  function calcularNota() {
    const nome = data.nome
    const nota1 = data.nota1
    const nota2 = data.nota2

    alert(nome + nota1 + nota2)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(calcularNota)}>
        <p>
          <label htmlFor="nome-aluno">Nome do Aluno: </label>
          <input type="text" id="nome-aluno" {...register(nome-aluno)}/>
        </p>
        <p>
          <label htmlFor="nome-aluno">Nota 1: </label>
          <input type="text" id="nota1" {...register(nota1)}/>
        </p>
        <p>
          <label htmlFor="nome-aluno">Nota 2: </label>
          <input type="text" id="nota2" {...register(nota2)}/>
        </p>
        <button type="submit">Calcular Nota</button>
      </form>
      <h2>{NotaFinal}</h2>
    </div>
  )
}

export default App
