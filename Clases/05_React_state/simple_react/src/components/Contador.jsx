import { useState } from "react";
import PropTypes from 'prop-types';

const Contador = ({inicio}) => {

    // VARIABLES
    const [contador, setContador] = useState(inicio)


    // MANEJADORES
    const subirContador = () => {
        setContador(contador + 1);
    }

    //JSX
    return (
        <div className="mt-4">
            <span>Contador: {contador}</span>
            <button 
                onClick={subirContador} 
                className={`btn btn-${ (contador > 30)? 'warning':'success' } btn-sm ms-3`}
            >
                Aumentar!
            </button>
        </div>
    )
}

Contador.propTypes = {
    inicio: PropTypes.number.isRequired
};


export default Contador