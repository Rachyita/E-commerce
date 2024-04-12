import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./View/HeroSection";
import NewArrivals from "./View/NewArrivals";
import TopSelling from "./View/TopSelling";
import BrowseByDressStyle from "./View/BrowseByDressStyle";
import ReviewSection from "./View/ReviewSction";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <NewArrivals />
      <TopSelling />
      <BrowseByDressStyle />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default HomePage;
