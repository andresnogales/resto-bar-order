require("dotenv").config();
const mongoose = require("mongoose");

var mongoURL = process.env.DB_URL;
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB connection failed");
});

connection.on("connected", () => {
  console.log("Mongo DB connection OK");
});

module.exports = mongoose;
