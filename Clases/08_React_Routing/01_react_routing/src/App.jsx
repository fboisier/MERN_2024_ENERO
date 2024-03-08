import { useState } from 'react'
import './App.css'
import PaginaUno from './components/PaginaUno'
import PaginaDos from './components/PaginaDos'
import PaginaTres from './components/PaginaTres'
import PaginaCuatro from './components/PaginaCuatro'

function App() {

    const [page, setPage] = useState(1)

    return (
        <>
            <div className='container'>
                <header className='mt-3'>
                    <h1>SPA</h1>
                    <hr />

                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={() => setPage(page - 1)}>Atrás</button>
                        <button type="button" className="btn btn-outline-primary px-3">{page}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={() => setPage(page + 1)}>Adelante</button>
                    </div>
                </header>


                <div className='row'>
                    <div className='col-3'>
                        { page == 1 && <PaginaUno /> }
                        { page == 2 && <PaginaDos /> }
                        { page == 3 && <PaginaTres /> }
                        { page == 4 && <PaginaCuatro /> }
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
