import Agregar from "./Agregar"
import MostrarListado from "./MostrarListado"
import { useState } from "react"

const Listado = () => {

    const [nombre, setNombre] = useState('Francisco!')

    return (
        <>
            <h1 className="mt-4">Listados!</h1>
            <hr />
            <div className="row mt-5">
                <div className="col-6">
                    <Agregar nombre={nombre} setNombre={setNombre} />
                </div>
                <div className="col-6">
                    <MostrarListado nombre={nombre} />
                </div>
            </div>
        </>
    )
}

export default Listado