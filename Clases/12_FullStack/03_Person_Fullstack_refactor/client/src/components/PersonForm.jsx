import { useState } from "react"
import useForm from "../hooks/useForm"
import axios from "axios"
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
import FormularioPerson from "./FormularioPerson"

const PersonForm = ({updatePersons}) => {

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
                console.log(res.data.person)
                updatePersons(res.data.person)
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
        <FormularioPerson handleSubmit={handleSubmit} error={error} person={person} handleChange={handleChange} />
    )
}

PersonForm.propTypes = {
    updatePersons: PropTypes.func
}

export default PersonForm