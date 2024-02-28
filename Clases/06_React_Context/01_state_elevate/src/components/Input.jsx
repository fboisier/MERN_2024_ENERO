import PropTypes from 'prop-types';

const Input = ({filtro, setFiltro}) => {

    const handleFiltro = (e) => {
        setFiltro(e.target.value)
    }

    return (
        <input 
            className="form-control"
            value={filtro}
            onChange={ handleFiltro } 
            placeholder="Ingresa un filtro"
        />
    )
}

Input.propTypes = {
    filtro: PropTypes.string.isRequired,
    setFiltro: PropTypes.func.isRequired
};

export default Input