import { useEffect, useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router-dom"
import FormularioPerson from "./FormularioPerson"


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
        <FormularioPerson handleSubmit={handleSubmit} error={error} person={person} handleChange={handleChange} />
    )
}

export default PersonFormUpdate