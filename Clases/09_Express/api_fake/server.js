
const express = require("express");
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;

class  Usuario {
    constructor(){
        this._id = faker.string.uuid();
        this.username = faker.internet.userName();
        this.email = faker.internet.email();
        this.avatar = faker.image.avatar();
        this.password = faker.internet.password();
        this.birthdate = faker.date.birthdate();
    }
}

class Empresa{
    constructor(){
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.address = faker.location.streetAddress();
        this.city = faker.location.city();
        this.state = faker.location.state();
        this.zipCode = faker.location.zipCode();
        this.country = faker.location.country();
    }
}

const createUser = () => {
    const newUser = {
        _id : faker.string.uuid(),
        username : faker.internet.userName(),
        email : faker.internet.email(),
        avatar : faker.image.avatar(),
        password : faker.internet.password(),
        birthdate : faker.date.birthdate(),
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id : faker.string.uuid(),
        name : faker.company.name(),
        address : faker.location.streetAddress(),
        city : faker.location.city(),
        state : faker.location.state(),
        zipCode : faker.location.zipCode(),
        country : faker.location.country(),
    }
    return newCompany;
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.post("/api/v1/user/new", (req, res) => {
    const newUser = new Usuario();
    console.log(newUser);
    res.json( { newUser: newUser } );
});

app.post("/api/v2/user/new", (req, res) => {
    res.json( { newUser: createUser() } );
});

app.post("/api/v1/company/new", (req, res) => {
    const newCompany = new Empresa();
    console.log(newCompany);
    res.json( { newCompany: newCompany } );
});
app.post("/api/v2/company/new", (req, res) => {
    res.json( { newCompany: createCompany() } );
});

app.post("/api/v1/user/company", (req, res) => {
    const newCompany = new Empresa();
    const newUser = new Usuario();
    
    res.json( { newCompany, newUser  } );
});

app.post("/api/v2/user/company", (req, res) => {
    res.json( { newCompany: createCompany(), newUser: createUser()  } );
});



app.listen( port, () => console.log(`Listening on port: ${port} (http://localhost:${port}/)`) );