import { Outlet } from "react-router-dom"

const ContenedorPaginas = () => {
  return (
    <>
        <h4>Dentro del Contenedor de Paginas</h4>
        <hr />
        <Outlet />
    </>
  )
}

export default ContenedorPaginas