const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.DATABASE;
const connection = mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = connection;
