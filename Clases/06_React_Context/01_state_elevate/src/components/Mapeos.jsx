import DatosCompra from "./DatosCompra";

const Mapeos = () => {

    const groceryList = ["tomates", "apio"];
    
    return (
        <div>{
            groceryList.map((item, i)=> {
                const color = (i%2 === 0) ? "danger" : "success"
                return <DatosCompra key={i} nombre={item} color={color} />
            })
        }</div>
    )
}

export default Mapeos