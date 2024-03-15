const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nombre es requerido!"],
        trim: true,
        unique: true,
        minlength: [3, "name must be at least 3 characters long"],
        maxlength: [50, "name must be less than 50 characters long"]
    },
    age: {
        type: Number,
        required: true,
        validate: {
            validator: (val) => val >= 18,
            message: "deben ser mayor o igual a 18 años",
        },
    },
    interests: {
        type: [String],
        required: true,
        validate: {
            validator: (val) => val.length > 0,
            message: "At least one interest is required",
        },
    },
    pets: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Pet"
    }
}, {
    timestamps: true
});

UserSchema.plugin(uniqueValidator);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
