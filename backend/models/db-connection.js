const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

app.use(cors());
dotenv.config({ path: "./config.env" });

// // Connect to DB

const db = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    port: process.env.port,
    password: process.env.password,
    database: process.env.database,
  });

  db.connect((err) => {
    if (err) {
      console.log("error in setting up the server ", err);
      return;
    }
    console.log("Successfully connected to database");
  });

  module.exports = db;
