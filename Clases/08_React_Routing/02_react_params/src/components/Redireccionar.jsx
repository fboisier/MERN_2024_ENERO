import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';

const Redireccionar = ({to}) => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    }, [to, navigate]);

    return null;
}

Redireccionar.propTypes = {
    to: PropTypes.string.isRequired,
};

export default Redireccionar
