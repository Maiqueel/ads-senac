import { useForm} from 'react-hook-form';
import './App.css'
import { useState } from 'react';


function App() {
  const { register, handleSubmit} = useForm();
  const [ mensagemEntrada, setmensagemEntrada] = useState("");
  const [ mensagemParcela, setmensagemParcela] = useState("");

  function calcularVeiculo(data) {
    const modelo = data.modelo
    const preco = data.preco

    const precoMetade = preco / 2
    const parcela = precoMetade / 12

    setmensagemEntrada("Financie já o seu " + modelo + " pagando R$ " + precoMetade.toLocaleString("pt-br", {minimumFractionDigits: 2}))
    setmensagemParcela("E pague o restante em 12x de " + parcela.toLocaleString("pt-br", {minimumFractionDigits: 2}))
  }
  return (
    <>
    <h1>Financiamento de Veículo</h1>
    <form onSubmit={handleSubmit(calcularVeiculo)}>
      <p>
        <label htmlFor="modelo">Modelo: </label>
        <input type="text" id="modelo" {...register("modelo")}/>
      </p>
      <p>
        <label htmlFor="preco">Preço R$: </label>
        <input type="text" id="preco" {...register("preco")}/>
      </p>
      <button type="submit">Enviar Dados</button>
    </form>
    <h2>{mensagemEntrada}</h2>
    <h2>{mensagemParcela}</h2>
    </>
  )
}

export default App
