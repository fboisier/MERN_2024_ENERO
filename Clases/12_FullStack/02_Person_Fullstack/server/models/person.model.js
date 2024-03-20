const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 3 characters long"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [3, "Last name must be at least 3 characters long"],
        validate: {
            validator:  (value) => /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]*$/.test(value),
            message: "Last name must contain only letters",
        },
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age must be at least 18"],

    }
}, { timestamps: true });

module.exports.PersonModel = mongoose.model('Person', PersonSchema);

