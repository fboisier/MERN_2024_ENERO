import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
import DeletePerson from "./DeletePerson";


const PersonList = ({ persons, setPersons }) => {

    const successDelete = (personId) => {
        Swal.fire({
            icon: "success",
            title: "Eliminado!",
            text: "Eliminaste una persona!!",
        });
        setPersons(persons.filter(person => person._id !== personId))
    }

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/person")
            .then((response) => {
                console.log(response.data.persons)
                setPersons(response.data.persons);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false);
            });
    }, [setPersons]);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <table className="table table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map(person => (
                        <tr key={person._id}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.age}</td>
                            <td>
                                <Link to={`/person/${person._id}`} className="btn btn-outline-primary btn-sm me-1">Detalle</Link>
                                <Link to={`/person/${person._id}/update`} className="btn btn-outline-warning btn-sm me-1">Actualizar</Link>
                                <DeletePerson personId={person._id} successCallback={successDelete} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

PersonList.propTypes = {
    persons: PropTypes.array,
    setPersons: PropTypes.func.isRequired
}

export default PersonList