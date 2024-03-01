import { useContext } from "react";
import MiContextoEstado from "./ContextoEstado";

const Ejemplo4 = ({ ejemploEstado, setEjemploEstado }) => {

    const { contextoState, setContextoStatePar } = useContext(MiContextoEstado);


    return (
        <>
            <div
                onClick={() => setEjemploEstado('PANCHO')}
            >
                FINAL {ejemploEstado}
            </div>
            <p
                onClick={
                    () => setContextoStatePar(
                        'nombre',
                        'Francisco 10'
                    )
                }
            >
                Contexto Desde el Ejemplo 4: {contextoState.nombre}
            </p>
        </>
    )
}

export default Ejemplo4