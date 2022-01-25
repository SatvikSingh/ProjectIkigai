const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("router");
const app = express();
var cookieParser = require('cookie-parser')

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(require('./Routes/index'));
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: "./config.env" });

// Connect to Database
const db = require('./models/db-connection')

app.listen(3001, "127.0.0.1", () => {
  console.log(`Server is up and running on Port ${3001}`);
});
  