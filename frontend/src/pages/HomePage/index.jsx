import React from "react";
import Navbar from "../../components/Navbar"
import HeroSection from "./View/HeroSection";
import NewArrivals from "./View/NewArrivals";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <NewArrivals />
    </div>
  );
};

export default HomePage;
