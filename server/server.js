const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");

const mongoose = require('./config/database');

const user = require('./routes/user');

const dotenv = require('dotenv')
dotenv.config()

const app = express();

const bodyParser = require('body-parser');
const { port } = require('./config/config');

app.use(morgan("dev"));

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(express.static(join(__dirname, "build")));
app.get('/', (req, res) => {
  res.send("API is working properly");

});

app.use('/user', user);

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connetction error'));

app.listen(port, () => console.log(`Server listening on port ${port}`));