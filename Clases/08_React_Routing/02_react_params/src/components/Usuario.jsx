import Tarjeta from "./Tarjeta"
import { useParams } from "react-router-dom"

const Usuario = () => {

    const { nombre, apellidos } = useParams();

    return (
        <Tarjeta
            title={`Usuario ${nombre} ${apellidos}`}
            image="https://picsum.photos/201/201"
            buttonText="Visitar PaginaUno"
            buttonUrl="/uno"
        />
    )
}

export default Usuario