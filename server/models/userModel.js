const mongoose = require('mongoose');

const gooseSchema = new mongoose.Schema({

      id: {
            type: String,
            required: false,
      },
      givenName: {
            type: String,
            required: true,
      },
      familyName: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
      },
      phone: {
            type: String,
            required: true,
      },
      location: {
            type: String,
            required: false,
      },
      timeCreated: {
            type: Date,
            default: () => Date.now(),
      },
      timeUpdated: {
            type: Date,
            default: () => Date.now(),
      }


});

module.exports = mongoose.model('USERS', gooseSchema);