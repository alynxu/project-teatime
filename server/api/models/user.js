const mongoose = require("mongoose");

// Define schema
const Schema = mongoose.Schema;

const usersSchema = new Schema(
    {
        firstName: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        phone_number: {
            type: String,
            trim: true,
        },
        deliveryFirstName: {
            type: String,
            trim: true,
        },
        deliveryLastName: {
            type: String,
            trim: true,
        },
        deliveryPhoneNumber: {
            type: String,
            trim: true,
        },
        street: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
        state: {
            type: String,
            trim: true,
            default: "BC",
        },
        zip: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("users", usersSchema);
