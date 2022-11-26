const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.PORT,
    mongodb_uri: process.env.MONGO_URI,
}