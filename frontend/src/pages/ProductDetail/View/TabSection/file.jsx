import React, { useState } from 'react';
import ProductDetailsTab from './ProductDetailsTab';
import CustomerReviewsTab from './CustomerReviewsTab';
import FaqTab from './FaqTab';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('product-details');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex mb-4">
        <button
          className={`mr-4 px-4 py-2 ${
            activeTab === 'product-details' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('product-details')}
        >
          Product Details
        </button>
        <button
          className={`mr-4 px-4 py-2 ${
            activeTab === 'customer-reviews' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('customer-reviews')}
        >
          Customer Reviews
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 'faq' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('faq')}
        >
          FAQ
        </button>
      </div>
      <div>
        {activeTab === 'product-details' && <ProductDetailsTab />}
        {activeTab === 'customer-reviews' && <CustomerReviewsTab />}
        {activeTab === 'faq' && <FaqTab />}
      </div>
    </div>
  );
};

export default Tabs;
