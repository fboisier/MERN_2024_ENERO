import MayorMenor from "./MayorMenor";
import PropTypes from 'prop-types';

const PersonCard = (props) => {
    //VARIABLES
    const {nombre, apellido, titulo, detalle, edad} = props;

    //MANEJADORES O HANDLERS

    // JSX
    return (
        <div className="card mt-4">
            <div className="card-header">
                {nombre} {apellido} con la edad de : {edad}
            </div>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">
                    {detalle}

                    {
                        (edad > 18) 
                        ? <MayorMenor titulo="es mayor" color="primary"/>
                        : <MayorMenor titulo="es menor" color="danger" />
                    }
                </p>
            </div>
        </div>
    )
}

PersonCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    detalle: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
};

export default PersonCard