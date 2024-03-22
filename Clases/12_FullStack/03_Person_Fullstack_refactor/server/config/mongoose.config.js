const mongoose = require("mongoose");
const db_name = "person_full_stack";

mongoose.connect(`mongodb://localhost/${db_name}`)
	.then(() => console.log(`Established a connection to the database ${db_name}`))
	.catch(err => console.log(`Something went wrong when connecting to the database ${db_name}`, err));
