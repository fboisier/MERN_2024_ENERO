import PropTypes from 'prop-types';

const DatosCompra = ({nombre, color}) => {
  return (
        <div className={`alert alert-${color}`} role="alert">
            {nombre}
        </div>
  )
}


DatosCompra.propTypes = {
    nombre: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default DatosCompra