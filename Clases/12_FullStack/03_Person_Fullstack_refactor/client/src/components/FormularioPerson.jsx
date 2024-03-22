import PropTypes from 'prop-types';

const FormularioPerson = ({handleSubmit, error, person, handleChange }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="text-danger">{error}</div>
            <div>
                <label className="mt-3">First Name: </label>
                <input type="text" className="form-control" name="firstName" value={person.firstName} onChange={handleChange} />
            </div>
            <div>
                <label className="mt-3">Last Name: </label>
                <input type="text" className="form-control" name="lastName" value={person.lastName} onChange={handleChange} />
            </div>
            <div>
                <label className="mt-3">Age: </label>
                <input type="number" className="form-control" name="age" value={person.age} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    )
}

FormularioPerson.propTypes = {
    handleSubmit: PropTypes.func,
    error: PropTypes.string,
    person: PropTypes.object,
    handleChange: PropTypes.func
}

export default FormularioPerson