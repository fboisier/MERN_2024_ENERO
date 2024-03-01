import { useContext, useState } from "react"
import Ejemplo2 from "./Ejemplo2"
import MiContextoEstado from "./ContextoEstado";

const Ejemplo1 = () => {
    const [ejemploEstado, setEjemploEstado] = useState('HOLA')
    const { contextoState } = useContext(MiContextoEstado);

    return (
        <div>
            <Ejemplo2 ejemploEstado={ejemploEstado} setEjemploEstado={setEjemploEstado}/>

            <p>El valor del estado EjemploEStado es: {ejemploEstado}</p>
            <p>Contexto desde Ejemplo1:{contextoState.nombre}</p>
        </div>
    )
}

export default Ejemplo1