// -----------------------------------------------------------------------------
// DESTRUCTURING
// -----------------------------------------------------------------------------

// Destructuring is a process of pulling something outside of the data
//    structure (array or object) and assigning it to a local variable
//
// This will simplify accessing and using data

const person = {
    firstName: "Billy",
    lastName: "Bob",
    email: "bbob@email.com",
    password: "passw0rd!",
    username: "billyb",
    addresses: [
        {
            address: "1600 Pennsylvania Avenue",
            city: "Washington, D.C.",
            zipcode: "20500",
        },
        {
            address: "221B Baker St.",
            city: "London",
            zipcode: "WC2N 5DU",
        },
    ],
};

const animals = ["horse", "dog", "fish", "cat", "bird"];

const [caballo, perro, , gato] = animals;
console.log(caballo, perro, gato);

// I) BEFORE ES6 -> You had to destructure / access everything one value at a time (manually)
var es5_firstName = person.firstName;
var es5_lastName = person.lastName;
var es5_email = person.email;
var es5_password = person.password;
var es5_firstAnimal = animals[0];
var es5_thirdAnimal = animals[2];

console.log(es5_firstName); // Output: Billy
console.log(es5_lastName); // Output: Bob
console.log(es5_email); // Output: bbob@email.com
console.log(es5_password); // Output: passw0rd!
console.log(es5_firstAnimal); // Output: horse
console.log(es5_thirdAnimal); // Output: fish

console.log("----------------------");


// II) AFTER ES6 -> destructuring "automatically" copies a value from the object / array

// Destructuring an object
const { firstName, password, lastName, email } = person;
// const { firstName: firstName, password: password, lastName: lastName, email: email } = person;
console.log(firstName); // Output: Billy
console.log(lastName); // Output: Bob
console.log(email); // Output: bbob@email.com
console.log(password); // Output: passw0rd!

console.log("----------------------");

// Destructuring with renaming
const { firstName: nombre, lastName: apellido, email: emailPersonal } = person; // (key: variable) -> Objectives Literals

console.log(nombre);
console.log(apellido);
console.log(emailPersonal);


const usuario = {
    nombre: 'Francisco',
    apellido: 'Boisier',
    edad: 39,
}

function saludar({nombre, apellido, edad}){
    console.log('El nombre es: ', nombre);
    console.log('El apellido es: ', apellido, edad);
}

saludar(usuario);

// Skipping Values in Array
const [, , thirdAnimal, , fifthAnimal] = animals;
console.log(thirdAnimal); // Output: fish
console.log(fifthAnimal); // Output: bird

console.log("----------------------");

// Destructuring nested objects
const { addresses: [firstAddress, SecondAddress] } = person;

// Below same as above:
// const { addresses }= person; -> IDEM: const {addresses: addresses} = person;
// const [firstAddress, SecondAddress] = addresses;

console.log(firstAddress); // Output: { address: '1600 Pennsylvania Avenue', city: 'Washington, D.C.', zipcode: '20500' }
console.log(SecondAddress); // Output: { address: '221B Baker St.', city: 'London', zipcode: 'WC2N 5DU' }
