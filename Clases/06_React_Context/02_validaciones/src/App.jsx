import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import MiContextoEstado from './components/ejemplo/ContextoEstado'
import Ejemplo1 from './components/ejemplo/Ejemplo1'
import FormularioHook from './components/FormularioHook'
import StyledComponents from './components/StyledComponents'

const App = () => {

  const [contextoState, setContextoState] = useState({
    nombre: 'Pancho'
  })

  const setContextoStatePar = ( clave, valor ) => {
    setContextoState({ ... contextoState, [clave]: valor})
  }

  const objetoContexto = {
    contextoState, 
    setContextoState, 
    setContextoStatePar 
  } 
  

  return (
    <MiContextoEstado.Provider value={objetoContexto}>
      <div className="container mt-5">
        <h2>4. Formularios con Formik y Yup</h2>
        <hr />
        <Formulario />
        <h2 className="mt-5">5. Problemas con Elevación de Estado!</h2>
        <hr />
        <Ejemplo1 />
        <h2 className="mt-5">6. Uso de Custom Hooks</h2>
        <hr />
        <FormularioHook />
        <h2 className="mt-5">7. Styled Components</h2>
        <hr />
        <StyledComponents />
      </div>
    </MiContextoEstado.Provider>
  )
}

export default App
