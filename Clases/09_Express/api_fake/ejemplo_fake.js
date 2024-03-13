const { faker } = require('@faker-js/faker');

class Product {
    constructor() {
        this.name = faker.commerce.productName();
        this.price = "$" + faker.commerce.price();
        this.department = faker.commerce.department();
        this.userId = faker.string.uuid();
        this.username = faker.internet.userName();
        this.email = faker.internet.email();
        this.avatar = faker.image.avatar();
        this.password = faker.internet.password();
        this.birthdate = faker.date.birthdate();
        this.registeredAt = faker.date.past();
    }
}

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
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

console.log(new Empresa());
console.log(new Usuario());