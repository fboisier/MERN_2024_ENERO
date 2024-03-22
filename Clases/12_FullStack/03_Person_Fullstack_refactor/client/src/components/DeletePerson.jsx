import axios from "axios"
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';

const DeletePerson = ({ personId, successCallback }) => {

    const deletePerson = (personId) => {

        Swal.fire({
            title: "Seguro que quieres eliminar?",
            text: "Estas a punto de eliminar una persona.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminalo!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/person/${personId}`)
                    .then(res => {
                        console.log(res)
                        successCallback(personId)
                    })
            }
        });
    }

    return (
        <button onClick={() => deletePerson(personId)} className="btn btn-outline-danger btn-sm">Eliminar</button>
    )
}

DeletePerson.propTypes = {
    personId: PropTypes.string.isRequired,
    successCallback: PropTypes.func.isRequired
}

export default DeletePerson