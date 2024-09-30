import { useForm } from 'react-hook-form';
import './App.css'
import { useState } from 'react';

function App() {
  const { register, handleSubmit, reset } = useForm();
  const [ mensagem, setMensagem ] = useState("");
  const [ vinho, setVinho ] = useState("");

  function teste(data) {
    const nome = data.nome
    const prato = data.prato
    const idade = Number(data.idade)
    const saborcomplexo = data.saborcomplexo

    if (idade < 18) {
      alert(nome + ", você não deve beber vinho.")
      setVinho("")
      return
    }

    if (saborcomplexo == "sim") {
      setMensagem(nome + ", sugerimos: Vinho Tinto.")
      setVinho("tinto.png")
    }else {
      if (prato == "picanha-forno") {
        setMensagem(nome + ", sugerimos: Vinho Tinto.")
        setVinho("tinto.png")
      }else if (prato == "peixe-camarao"){
        setMensagem(nome + ", sugerimos: Vinho Rose.")
        setVinho("rose.png")
      }else {
        setMensagem(nome + ", sugerimos: Vinhos Suave.")
        setVinho("suave.png")
      }
    }
  }

  function resetForm() {
    setMensagem("")
    setVinho("")
    reset({
      nome: "",
      idade: "",
      prato: "",
      saborcomplexo: null
    })
  }

  return (
    <>
    <h1>Restaurante Avenida</h1>
    <h2>App: Sugestão de Vinho</h2>
    <form onSubmit={handleSubmit(teste)} onReset={resetForm}>
      <p>
        <label htmlFor="prato">Nome: </label>
        <input type="text" id="nome" {...register("nome")} required />
      </p>
      <p>
        <label htmlFor="idade">Idade: </label>
        <input type="text" id="idade" {...register("idade")} required />
      </p>
      <p><label htmlFor="prato">Prato Principal:
      <select name="prato" id="prato" required {...register("prato")}>
        <option value="">Selecione um Prato</option>
        <option value="peixe-camarao">Peixe ao Molho de Camarão</option>
        <option value="picanha-forno">Picanha ao Forno</option>
        <option value="strogonoff-frango">Strogonoff de Frango</option>
        <option value="frango-grelhado">Frango Grelhado</option>
      </select>
      </label></p>
      <label htmlFor="sabores">Gosta de sabores mais complexos?</label>
      <input type="radio" name="saborcomplexo" id="saborcomplexo" value="sim" {...register("saborcomplexo")} required/> Sim
      <input type="radio" name="saborcomplexo" id="saborcomplexo" value="nao" {...register("saborcomplexo")} required/> Não
      <br />
      <button type="submit">Enviar Dados</button>
      <button type="reset">Reiniciar</button>
    </form>
    <h2>{mensagem}</h2>
    {vinho &&
      <img src={vinho} alt="Vinho" />
    }
    </>
  )
}

export default App
