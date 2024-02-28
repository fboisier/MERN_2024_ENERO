import './App.css'
import ElevacionEstado from './components/ElevacionEstado'
import FormularioObj from './components/FormularioObj'
import Mapeos from './components/Mapeos'

const App = () => {

  return (
    <div className="container mt-5">
      <h1>1. Map</h1>
      <hr />
      <Mapeos />
      <h1 className="mt-5">2. Elevación de Estado</h1>
      <hr />
      <ElevacionEstado items={["Star Wars", "Star Trek", "Interstellar"]}/>
      <h1 className="mt-5">3. Formulario</h1>
      <hr />
      <FormularioObj />
    </div>
  )
}

export default App
