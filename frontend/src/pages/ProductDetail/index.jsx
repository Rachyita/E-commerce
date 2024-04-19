import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MainSection from "./View/MainSection";
import TabSection from "./View/TabSection";

import MightLikeSection from "./View/MightLikeSection";
import NewsLetter from "../../components/Newsletter";

const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <TabSection />
      <MightLikeSection />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductDetail;
