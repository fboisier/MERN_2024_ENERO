import propTypes from 'prop-types';

const Titulo = ({contenido}) => {
    return (
        <h1>{contenido}</h1>
    )
}

Titulo.propTypes = {
    contenido: propTypes.string.isRequired,
};

export default Titulo
