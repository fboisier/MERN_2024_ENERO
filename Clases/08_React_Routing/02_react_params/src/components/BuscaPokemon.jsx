import { useState } from "react"
import { useNavigate} from "react-router-dom";
 

const BuscaPokemon = () => {

    const [texto, setTexto] = useState('')

    const navigate = useNavigate();

    const handleInput = (e) => {
        setTexto(e.target.value)
    } 
    
    const handleButton = () => {
        console.log('ir al pokemon', texto);
        navigate(`/pokemon/${texto}`)
    }

    return (
        <div className="input-group mb-3">
            <input type="number" className="form-control" value={texto} onChange={handleInput} placeholder="Ingresa un Numero" aria-label="Ingressa un Numero" aria-describedby="button-addon2" />
            <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={handleButton}>ir al Pokemon!</button>
        </div>
    )
}

export default BuscaPokemon