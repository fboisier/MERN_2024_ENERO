import Contador from "./Contador"

const ContenedorContador = () => {
    return (
        <div className="container mt-4">
            <h4>Uso de States</h4>
            <hr />
            <Contador inicio={0} />
            <Contador inicio={49}/>
            <Contador inicio={60}/>
        </div>
    )
}

export default ContenedorContador