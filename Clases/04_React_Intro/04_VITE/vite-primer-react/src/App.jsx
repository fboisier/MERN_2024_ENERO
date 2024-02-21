
import './App.css'
import Logos from './components/Logos'
import Parrafo from './components/Parrafo'
import Tarjeta from './components/Tarjeta'
import Titulo from './components/Titulo'

const App = () => {
  return (
    <>
      <Logos />
      <Titulo contenido="En fineee1!"/>
      <Titulo contenido="En fin1!"/>
      <Titulo contenido="En fin2!"/>
      <Titulo contenido="En fi2n!"/>
      <Titulo contenido="En fin33333!"/>
      <Tarjeta />
      <Parrafo />
    </>
  )
}

export default App
