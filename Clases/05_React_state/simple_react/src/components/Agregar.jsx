import PropTypes from 'prop-types';


const Agregar = ({nombre, setNombre}) => {


    const modificarNombre = () => {
        setNombre("Pancho")
    }

    return (
        <button onClick={modificarNombre} className="btn btn-danger">
            Agregar {nombre}
        </button>
    )
}

Agregar.propTypes = {
    nombre: PropTypes.string.isRequired,
    setNombre: PropTypes.func.isRequired,
};

export default Agregar