const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyParser.json());
app.use(cors());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://Rachyita:OcabY84fUEdiNZcP@cluster0.gutgztf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}

// User Signup Schema
const userSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
});

// New Arrivals Schema
const newArrivalsSchema = new mongoose.Schema({
  Name: "String",
  Rating: "String",
  originalPrice: "String",
  offeredPrice: "String",
});

// Model
const User = mongoose.model("User", userSchema);
const newArrivals = mongoose.model("newArrivals", newArrivalsSchema);

// Routes
app.post("/", async (req, res) => {
  // console.log(req.body);
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.Password, salt);
  User.create({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: secPass,
  });
  const checkUser = await User.findOne({ Email: req.body.Email });
  if (!checkUser) {
    res.status(201).json({ message: "User created successfully" });
  } else res.json("already exists");
});

app.post("/Login", async (req, res) => {
  const response = await User.findOne({ Email: req.body.Email });
  if (!response) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  const passswordCompare = await bcrypt.compare(
    req.body.Password,
    response.Password,
    function (err, resp) {
      if (resp === true) {
        const token = jwt.sign(req.body.Email, "secretkey");
        res.json(token);
      } else res.json("user not authorized");
    }
  );
});

// api for new arrivals
app.post("/Home", (req, res) => {
  newArrivals.create({
    Name: "T-Shirt with Tape Details",
    Rating: "4.5",
    originalPrice: "$120",
    offeredPrice: "$120",
  });
});

app.listen(8000, () => {
  console.log("Server Started");
});
