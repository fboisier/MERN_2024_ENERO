import Tarjeta from "./Tarjeta"
import { useParams } from "react-router-dom"
import useAxios from "../hooks/useAxios";

const PokemonDetalle = () => {

    const { id } = useParams();
    const {data: pokemon, isLoading, error} = useAxios(`https://pokeapi.co/api/v2/pokemon/${id}`)

    if (isLoading) {
        return <p>Cargando...</p>
    }

    if (error){
        return <p>{error}</p>
    }

    const {name, sprites} = pokemon

    return (
        <Tarjeta
            title={`Detalle del Pokemon ${name}`}
            image={sprites?.other?.["official-artwork"]?.front_default}
            buttonText="Visitar PaginaUno"
            buttonUrl="/uno"
        />
    )
}

export default PokemonDetalle