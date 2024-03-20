import './App.css'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

function App() {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h3 className='mt-5'>Listado de Personas</h3>
                    <hr />
                    <PersonList />
                </div>
                <div className='col-6'>
                    <h3 className='mt-5'>Ingreso de Persona</h3>
                    <hr />
                    <PersonForm />
                </div>
            </div>
        </div>
    )
}

export default App
