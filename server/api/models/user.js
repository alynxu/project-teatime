const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    given_name: {
        type: String,
        trim: true,
    },
    family_name: {
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
    location: {
        type: String,
        trim: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('users', usersSchema);