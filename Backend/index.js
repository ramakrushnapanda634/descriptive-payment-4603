const { urlencoded } = require("express");
const express = require("express");
const connection = require("./config/database");
const app = express();
const router = require("./routes/auth");
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);
app.listen(8080, (req, res) => {
  if (connection) {
    console.log("Connected to MongoDB");
  }
  console.log("Server is running on port 8080");
});
