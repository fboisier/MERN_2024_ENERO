import PropTypes from 'prop-types';

const MostrarListado = ({nombre}) => {
    return (
        <div>{nombre}</div>
    )
}
MostrarListado.propTypes = {
    nombre: PropTypes.string.isRequired
};

export default MostrarListado