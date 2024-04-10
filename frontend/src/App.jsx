import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import AddProduct from "./pages/AddProduct";
import CustomerReview from "./pages/CustomerReview";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/CustomerReview" element={<CustomerReview />} />
      </Routes>
    </div>
  );
}

export default App;
