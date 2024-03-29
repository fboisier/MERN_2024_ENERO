import axios from "axios"
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';

const DeletePlayer = ({ playerId, name, successCallback }) => {

    const deletePlayer = (playerId, name) => {

        Swal.fire({
            title: "Seguro que quieres eliminar?",
            text: `Estas a punto de eliminar un jugador ${name}.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminalo!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/player/${playerId}`, { withCredentials: true })
                    .then(res => {
                        console.log(res)
                        successCallback(playerId)
                    })
            }
        });
    }

    return (
        <button onClick={() => deletePlayer(playerId, name)} className="btn btn-outline-danger btn-sm">DELETE</button>
    )
}

DeletePlayer.propTypes = {
    playerId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    successCallback: PropTypes.func.isRequired
}

export default DeletePlayer