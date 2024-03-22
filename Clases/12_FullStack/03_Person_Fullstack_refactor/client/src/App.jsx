import { Route, Routes } from 'react-router-dom'
import ListarCrearPerson from './ListarCrearPerson'
import DetallePerson from './DetallePerson'
import PersonFormUpdate from './components/PersonFormUpdate'

const App = () => {
    return (
        <div className='container mt-3'>
            <h1>CRUD Completo.</h1>
            <Routes>
                <Route path="/" element={<ListarCrearPerson />} />
                <Route path="/person/:id" element={<DetallePerson />} />          
                <Route path="/person/:id/update" element={<PersonFormUpdate />} />          
            </Routes>
        </div>
    )
}

export default App