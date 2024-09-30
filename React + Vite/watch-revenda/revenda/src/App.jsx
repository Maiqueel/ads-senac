import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const { register, watch } = useForm({
    defaultValues: {
      veiculo: 'fiesta.png'
    }
  });

  function consultaVeiculo() {
    let preco
    if(watch("veiculo") == "fiesta.png") {
      preco = 100000
    }else if (watch("veiculo" == "ka.png")) {
      preco = 89499
    }else {
      preco = 14000
    }
    
    if (watch("alarme")) {
      preco += 5000
    }
    if (watch("vidros")) {
      preco += 5000
    }

    return preco
  }

  return (
    <>
    <header>
      <img src="./Ford-Logo-PNG-Clipart.png" alt="" />
      <div className='header-textos'>
        <h1>Revenda Avenida</h1>
        <h2>Veículos em Promoção</h2>
      </div>
    </header>
    <section>
      <div>
        <h2>Modelos em Promoção:</h2>
        <input type="radio" name="" id="fiesta" value="fiesta.png" {...register("veiculo")}/>
        <label htmlFor="">Fiesta</label>
        <br />
        <input type="radio" name="ka" id="ka" value="ka.png" {...register("veiculo")}/>
        <label htmlFor="">Ka</label>
        <br />
        <input type="radio" name="eco_sport" id="eco_sport.png" value="eco_sport.png" {...register("veiculo")}/>
        <label htmlFor="">Eco Sport</label>
      </div>
      <div>
        <img className="veiculoimg" src={watch("veiculo")} alt="" />
      </div>
      <div>
        <h2>Selecione os Opcionais:</h2>
        <input type="checkbox" name="alarme" id="alarme" value="alarme" {...register("alarme")} />
        <label htmlFor="alarme">Alarme</label>
        <br />
        <input type="checkbox" name="vidros" id="vidros" value="vidros" {...register("vidros")} />
        <label htmlFor="vidros">Vidros Elétricos</label>
      </div>
    </section>
    <footer>
      <h2>{consultaVeiculo().toLocaleString("pt-br", {minimumFractionDigits: 2})}</h2>
    </footer>
    </>
  )
}

export default App
