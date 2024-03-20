import { useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'


const PersonForm = () => {

    const initialValues = {
        firstName:'',
        lastName: '',
        age: 18
    }
    const {values: person, handleChange, clearData} = useForm(initialValues)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/person', person)
            .then(res => {
                console.log(res)
                clearData()
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Agregaste una persona!!",
                });
                setError("")
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
        </form>
    )
}

export default PersonForm