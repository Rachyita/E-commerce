import React from "react";
import Navbar from "../../components/Navbar"
import HeroSection from "./View/HeroSection";
import NewArrivals from "./View/NewArrivals";
import BrowswByDressStyle from "./View/BrowseByDressStyle";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <NewArrivals />
      <BrowswByDressStyle />
    </div>
  );
};

export default HomePage;
