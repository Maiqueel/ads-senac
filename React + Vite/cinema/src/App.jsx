import { useForm } from 'react-hook-form'
import './App.css'
import { useState } from 'react';

function App() {
  const { register, watch } = useForm({
    defaultValues: {
      filme: "malvado-favorito",
      qtdIngressos: "1"
    }
  });

  function calcularTotal() {
    let total
    if(watch("filme") == "malvado-favorito") {
      total = 15 * watch("qtdIngressos")
    }else {
      total = 10
    }

    if(watch("pipoca-grande")) {
      total += 30
    }
    if(watch("pipoca-familia")) {
      total += 56
    }

    return total
  }

  return (
    <>
    <div>
      <h1>Escolha o filme, nº ingressos e pipoca.</h1>
      <img className="filme-css" src={watch("filme") + ".png"} alt="" />
      <p>Título do Filme: 
        <select name="filme" id="filme" {...register("filme")}>
          <option value="malvado-favorito">Meu Malvado Favorito 4 - 3D</option>
          <option value="vitor-filosofal">Vitor e a pedra filosofal - 2D</option>
          <option value="deadpool4">Deadpool 4 - 2D</option>
          <option value="indianajones">Indiana Jones - 2D</option>
        </select>
        </p>
        <p>Nº de Ingressos:
        <select name="qtdIngressos" id="qtdIngressos" {...register("qtdIngressos")}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        </p>
        <p>Pipoca:
        <input type="checkbox" name="pipoca-grande" id="pipoca-grande" {...register("pipoca-grande")}/>
        <label htmlFor="pipoca-grande">Grande</label>
        &nbsp;
        <input type="checkbox" name="pipoca-familia" id="pipoca-familia" {...register("pipoca-familia")}/>
        <label htmlFor="pipoca-familia">Familia</label>
        </p>
      <h2>Valor Total: {calcularTotal()}</h2>
    </div>
    </>
  )
}

export default App
