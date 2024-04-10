import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./View/HeroSection";
import NewArrivals from "./View/NewArrivals";
import TopSelling from "./View/TopSelling";
import BrowseByDressStyle from "./View/BrowseByDressStyle";
import CustomerReview from "../../components/CustomerReview";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <NewArrivals />
      <TopSelling />
      <BrowseByDressStyle />
      <CustomerReview />
    </div>
  );
};

export default HomePage;
