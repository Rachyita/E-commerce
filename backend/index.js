const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.static("Public/assets"));

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

// Product Schema
const productSchema = new mongoose.Schema({
  Product_Name: String,
  Price: Number,
  Gender: String,
  Category: String,
  Stock: Number,
  Brand: String,
  Description: String,
  Image: String,
});

// Review Schema
const reviewSchema = new mongoose.Schema({
  Rating: Number,
  Customer_Name: String,
  Feedback: String,
});

// Model
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
const Review = mongoose.model("Review", reviewSchema);

// Routes

// api for user create
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

// api for add products

app.post("/addProduct", async (req, res) => {
  console.log(req.body);
  Product.create({
    Product_Name: req.body.Product_Name,
    Price: req.body.Price,
    Gender: req.body.Gender,
    Category: req.body.Category,
    Stock: req.body.Stock,
    Brand: req.body.Brand,
    Description: req.body.Description,
    Image: req.body.Product_Name,
  });
});

app.get("/Home", async (req, res) => {
  const response = await Product.find();
  res.json(response);
});

// api for add review
app.post("/SubmitReview", async (req, res) => {
  console.log(req.body);
  Review.create({
    Rating: req.body.Rating,
    Customer_Name: req.body.Customer_Name,
    Feedback: req.body.Feedback,
  });
});

// Retrieve reviews
app.get("/Reviews", async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

app.listen(8000, () => {
  console.log("Server Started");
});
