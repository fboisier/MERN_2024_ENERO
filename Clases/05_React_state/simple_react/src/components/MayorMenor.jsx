import PropTypes from 'prop-types';

const MayorMenor = ({titulo, color}) => {
    return (
        <span className={`badge rounded-pill text-bg-${color} d-block mt-3`}>
            {titulo}
        </span>
    )
}

MayorMenor.propTypes = {
    titulo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default MayorMenor