import useForm from "../hooks/useForm";

const FormularioHook = () => {

    const initialValues = {
        username: '',
        email: '',
        clave: ''
    }

    const {values, handleChange, clearData} = useForm(initialValues)

    const {username, email, clave} = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label className="mt-3">Username </label> 
                    <input className="form-control" type="text" name="username" value={username} onChange={handleChange} />
                </div>
                <div>
                    <label className="mt-3">Email Address: </label> 
                    <input className="form-control" type="text" name="email" value={email} onChange={handleChange}/>
                </div>
                <div>
                    <label className="mt-3">Password: </label>
                    <input className="form-control"  type="text" name="clave" value={clave} onChange={handleChange} />
                </div>
                <input  className="mt-3 btn btn-success" type="submit" value="Create User" />
                <button type="button" className="mt-3 ms-3 btn btn-info" onClick={clearData}>Limpiar</button>
            </form>
        </div>
    )
}

export default FormularioHook