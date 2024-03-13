const { faker } = require('@faker-js/faker');

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

module.exports = Usuario