import { useEffect, useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router-dom"


const PersonFormUpdate = () => {

    const { id } = useParams();
    const navegate = useNavigate()

    const initialValues = {
        firstName:'Cargando...',
        lastName: 'Cargando...',
        age: 0
    }

    const {values: person, handleChange, setValues} = useForm(initialValues)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/person/${id}`)
            .then(res => {
                console.log(res.data.person)
                setValues({
                    firstName: res.data.person.firstName,
                    lastName: res.data.person.lastName,
                    age: res.data.person.age
                })
            })
            .catch(err => console.log(err))
    }, []);


    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/person/${id}`, person)
            .then(res => {
                console.log(res.data.person)
                Swal.fire({
                    icon: "success",
                    title: "Actualizado!",
                    text: "Actualizaste una persona!!",
                });
                navegate("/")
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.error.message)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-danger">{error}</div>
            <div>
                <label className="mt-3">First Name: </label>
                <input type="text" className="form-control" name="firstName" value={person.firstName} onChange={handleChange} />
            </div>
            <div>
                <label className="mt-3">Last Name: </label>
                <input type="text" className="form-control" name="lastName" value={person.lastName} onChange={handleChange} />
            </div>
            <div>
                <label className="mt-3">Age: </label>
                <input type="number" className="form-control" name="age" value={person.age} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
            <button type="button" className="btn btn-danger mt-3 ms-3" onClick={() => navegate("/")}>Cancelar - Volver</button>
        </form>
    )
}

export default PersonFormUpdate