// -----------------------------------------------------------------------------
// REST/SPREAD OPERATOR (...)
// -----------------------------------------------------------------------------

const person = {
    firstName: "Billy",
    lastName: "Bob",
    email: "bob@email.com",
    username: "BillyB",
    password: "hmmmmmm",
};

const address = {
    street: "123 Main St",
    city: "Pittsburgh",
    state: "PA",
    zip: "15222",
}

const persona2 = person;
persona2.firstName = "PANCHO";
console.log(person);

const persona3 = { ...person };
persona3.firstName = "FRANCISCO"
console.log(person);

const conjunto = { ...person, ...address }
console.log(conjunto);

console.log("------------------------")

const conjunto1 = { ...person, ...address, email: 'jajaja', country: 'CHILE' }
console.log(conjunto1);

const animals = ["horse", "dog", "fish", "cat", "bird"];

const newAnimals = [...animals, "lion", "tiger", "bear"];
console.log(newAnimals);

const newAnimals2 = ["lion", "tiger", "bear", ...animals];
console.log(newAnimals2);

const newAnimals3 = ["lion", ...animals, "tiger", "bear"];
console.log(newAnimals3);


const [firstAnimal, secondAnimal, ...restAnimals] = animals;
console.log(firstAnimal); // Output: horse
console.log(secondAnimal); // Output: dog
console.log(restAnimals); // Output: ['fish', 'cat', 'bird']



// II) Exmaple 2 -> Gathering (Rest Operator)

const person2 = {
    firstName: "Billy",
    lastName: "Bob",
    email: "bob@email.com",
    username: "BillyB",
    password: "hmmmmmm",
};
const { firstName, lastName, ...rest } = person2;
console.log(rest);



console.log("----------------------");

function sum_1(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum_2(1, 2, 3, 4, 5)); // Output: 15

function sum_2(a, b, ...numbers) {
    let rest = 0;
    for (let num of numbers) {
        rest += num;
    }
    return a + b + rest;
}

console.log(sum_1(1, 2, 3, 4, 5)); // Output: 15
console.log(sum_2(1, 2, 3, 4, 5)); // Output: 15

// ------
