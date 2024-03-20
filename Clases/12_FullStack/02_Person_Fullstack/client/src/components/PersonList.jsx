import useAxios from "../hooks/useAxios";

const PersonList = () => {

    const { data, isLoading, error } = useAxios("http://localhost:8000/api/person")
    
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    
    const { persons } = data
    return (
        <table className="table table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map(person => (
                        <tr key={person._id}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default PersonList