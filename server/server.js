const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");
// const path = require('path');
// const connectDB = require("./db")

const dotenv = require('dotenv')
dotenv.config()

const app = express();

const port = process.env.SERVER_PORT || 3002;

// connect to db
const { default: mongoose } = require('mongoose');
mongoose.connect(
  process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("Error connecting to db")
});
db.once("open", () => {
  console.log("Mongodb connected!");
});

app.use(morgan("dev"));

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(express.static(join(__dirname, "build")));
app.get('/', (req, res) => {
  res.send("API is working properly");

});

app.listen(port, () => console.log(`Server listening on port ${port}`));