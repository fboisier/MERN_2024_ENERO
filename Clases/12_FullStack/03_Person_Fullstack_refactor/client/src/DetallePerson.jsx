import { useParams, Link, useNavigate } from "react-router-dom";
import useAxios from "./hooks/useAxios";
import moment from 'moment/min/moment-with-locales'; // Importa Moment.js con todos los locales
import Swal from 'sweetalert2'
import DeletePerson from "./components/DeletePerson";


const DetallePerson = () => {
    const { id } = useParams();
    const navegate = useNavigate();
    const { data, isLoading, error } = useAxios(`http://localhost:8000/api/person/${id}`)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    const {person} = data

    const successDelete = (personId) => {
        console.log(personId)
        Swal.fire({
            icon: "success",
            title: "Eliminado!",
            text: "Eliminaste una persona!!",
        });
        navegate("/")
    }

    return (
        <div className="row">
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{person.firstName} {person.lastName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">ID: {person._id}</h6>
                        <ul>
                            <li>Edad: {person.age}</li>
                            <li>Creado: {moment(person.createdAt).fromNow()}</li>
                            <li>Actualizado: {moment(person.updatedAt).fromNow()}</li>
                        </ul>
                        <Link to="/" className="btn btn-outline-dark btn-sm me-1">Volver</Link>
                        <Link to={`/person/${person._id}/update`} className="btn btn-outline-warning btn-sm me-1">Actualizar</Link>
                        <DeletePerson personId={person._id} successCallback={successDelete} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetallePerson