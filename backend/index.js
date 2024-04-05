const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(cors());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://Rachyita:OcabY84fUEdiNZcP@cluster0.gutgztf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}

// Schema
const userSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
});

// Model
const User = mongoose.model("User", userSchema);

// Routes
app.post("/", (req, res) => {
  console.log(req.body)
  User.create({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  res.json("data saved");
});
app.listen(8000, () => {
  console.log("Server Started");
});
