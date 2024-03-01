import { useState } from "react";

const FormularioObj = () => {

    const tiposUsuario = ['Administrador', 'Usuario', 'Invitado'];

    const initialState = {
        'email': '',
        'clave': '',
        'nombre': '',
        'tipo': 'Invitado',
        'recuerdame': false
    }

    const [login, setLogin] = useState(initialState);
    const [error, setError] = useState(initialState);

    const { email, clave, nombre, tipo} = login;
    const { email: emailError, clave: claveError, nombre: nombreError} = error;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login);
    }

    const handleInput = (e) => {

        console.log(e)
        if (e.target.type === 'checkbox'){
            setLogin({...login,[e.target.name]: e.target.checked })
        }else{
            setLogin({...login,[e.target.name]: e.target.value })
        }


        if ((e.target.name === 'nombre') && (e.target.value.length < 10 )){
            setError({...error, nombre: 'El campo tiene menos de 10 caracteres' })
        }else{
            setError({...error, nombre: '' })
        }

        if ((e.target.name === 'clave') && (e.target.value.length < 8 )){
            setError({...error, clave: 'La clave no puede tener menos de 8 caracteres' })
        }else{
            setError({...error, clave: '' })
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Ingresa Correo Electronico</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    value={email}
                    onChange={handleInput}
                />
                <div className="form-text text-danger">{emailError}</div>

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Ingresa tu contraseña</label>
                <input 
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={clave}
                    name="clave"
                    onChange={handleInput}
                />
                <div className="form-text text-danger">{claveError}</div>

            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputNombre" className="form-label">NOMBRE</label>
                <input 
                    type="text"
                    className="form-control"
                    id="exampleInputNombre"
                    value={nombre}
                    name="nombre"
                    onChange={handleInput}
                />
                <div className="form-text text-danger">{nombreError}</div>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputNombre" className="form-label">Seleccionar Perfil</label>
                <select value={tipo} name="tipo" className="form-select" onChange={handleInput}>
                    {
                        tiposUsuario.map((item, indice)=> 
                            <option key={indice}>{item}</option>
                        )
                    }
                </select>
                <div className="form-text text-danger">{nombreError}</div>
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <input className="form-check-input" onChange={handleInput} name="recuerdame" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Recuerdame
                    </label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Enviar Datos!!!</button>
        </form> 
    )
}

export default FormularioObj