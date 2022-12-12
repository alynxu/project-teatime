//Set up mongoose connection
const mongoose = require('mongoose');
const { mongodb_uri } = require('./config');

var mongoString = mongodb_uri;

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((MongooseNode) => {
        console.log('Mongodb connected successfully');
       
    })
    .catch((error) => {
        console.log('Mongodb connection error ', error);
    })

mongoose.Promise = global.Promise;

module.exports = mongoose;