import { useState } from 'react';
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

function ListarCrearPerson() {

    const [persons, setPersons] = useState(null);

    const updatePersons = (person) =>{
        setPersons([...persons, person])
    }

    return (
        <div className='row'>
            <div className='col-8'>
                <h3 className='mt-5'>Listado de Personas</h3>
                <hr />
                <PersonList persons={persons} setPersons={setPersons}/>
            </div>
            <div className='col-4'>
                <h3 className='mt-5'>Ingreso de Persona</h3>
                <hr />
                <PersonForm updatePersons={updatePersons}/>
            </div>
        </div>
    )
}

export default ListarCrearPerson
