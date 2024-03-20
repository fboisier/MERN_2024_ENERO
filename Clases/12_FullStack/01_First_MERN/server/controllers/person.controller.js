module.exports = {
    person_hello : (request, response) => {
        response.json({
            message: "Hola PERSON"
        });
    }
}