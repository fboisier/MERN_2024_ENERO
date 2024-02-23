import './App.css'
import CajaTexto from './components/CajaTexto'
import ContenedorContador from './components/ContenedorContador'
import Listado from './components/Listado'
import PersonCard from './components/PersonCard'

function App() {

  return (
    <>
      <div className="container mt-5">
        <h1>Esto es una lista de Personas!</h1>
        <PersonCard
          nombre="Francisco"
          apellido="Boisier"
          titulo="Primera Tarjeta"
          detalle="Esto es mi primer componente!"
          edad={30}
        />
        <PersonCard
          nombre="Javier"
          apellido="Sandoval"
          titulo="Segunda Tarjeta"
          detalle="Esto es mi primer componente!"
          edad={25}
        />
        <PersonCard
          nombre="Leonor"
          apellido="Boisier"
          titulo="Tercera Tarjeta"
          detalle="Esto es mi primer componente!"
          edad={3}
        />
        <ContenedorContador />
        <Listado />
        <CajaTexto />
        <CajaTexto>
          <h1>Hola</h1>
        </CajaTexto>
      </div>

    </>
  )
}

export default App
