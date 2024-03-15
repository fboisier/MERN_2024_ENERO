
const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Pet name is required"],
            minlength: [3, "Pet name must be at least 3 characters long"],
        },
        type: {
            type: String,
            required: [true, "Pet type is required"],
            minlength: [3, "Pet type must be at least 3 characters long"],
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Pet owner is required"],
        }
    },
    { timestamps: true }
);

const PetModel = mongoose.model("Pet", PetSchema);

module.exports = PetModel;
