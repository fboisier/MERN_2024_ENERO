import './App.css'
import PaginaUno from './components/PaginaUno'
import PaginaDos from './components/PaginaDos'
import PaginaTres from './components/PaginaTres'
import PaginaCuatro from './components/PaginaCuatro'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ContenedorPaginas from './components/ContenedorPaginas'

function AppRouter() {

    return (
        <BrowserRouter>
            <div className='container'>
                <header className='mt-3'>
                    <h1>SPA Router</h1>
                    <hr />

                    <nav>
                        <ul>
                            <li><Link to='/'>Pagina Uno</Link></li>
                            <li><Link to='/paginados'>Pagina Dos</Link></li>
                            <li><Link to='/paginatres'>Pagina Tres</Link></li>
                            <li><Link to='/paginacuatro'>Pagina Cuatro</Link></li>
                        </ul>
                    </nav>
                </header>


                <div className='row'>
                    <div className='col-4'>
                        <Routes>
                            <Route path="/" element={<PaginaUno />} />
                            <Route path="/paginados" element={<PaginaDos />} />
                            <Route path="/paginatres" element={<PaginaTres />} />
                            <Route path="/paginacuatro" element={<PaginaCuatro />} />

                            <Route path="/pagina/" element={<ContenedorPaginas />}>
                                <Route path="" element={<PaginaUno />} />
                                <Route path="dos" element={<PaginaDos />} />
                                <Route path="tres" element={<PaginaTres />} />
                                <Route path="cuatro" element={<PaginaCuatro />} />
                            </Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
