import { useState } from "react";

const Formulario = () => {
    const [email, setEmail] = useState('')
    const [clave, setClave] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Bienvenido, Correo: ${email} Clave: ${clave}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Ingresa Correo Electronico</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Ingresa tu contraseña</label>
                <input 
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={clave}
                    onChange={(e)=>{setClave(e.target.value)}}
                />
            </div>
            <button type="submit" className="btn btn-primary">Enviar Datos!!!</button>
        </form> 
    )
}

export default Formulario