import { useState } from "react"
import PropTypes from 'prop-types';

const CajaTexto = ({children}) => {

    const [nombre, setNombre ] = useState('')

    const handleChange = (e) => {
        setNombre(e.target.value)
    }

    return (
        <div className="row">
            <div className="col-6">
                <div className="mt-4 p-2">
                    <label>Nombre</label>
                    <input 
                        className="form-control"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="col-6">
                <div className="mt-5 p-2">
                    <h5>El texto es: {nombre} </h5>
                </div>
            </div>
            {children}
        </div>
    )
}

CajaTexto.propTypes = {
    children: PropTypes.element,
};


export default CajaTexto