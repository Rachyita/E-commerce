import React, { useState } from "react";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: "image1.jpg" },
    { id: 2, src: "image2.jpg" },
    { id: 3, src: "image3.jpg" },
    // Add more images as needed
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="image-gallery">
      <div className="thumbnails">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Image ${image.id}`}
            onClick={() => handleImageClick(image.src)}
          />
        ))}
      </div>
      <div className="enlarged-image">
        {selectedImage && (
          <img src={selectedImage} alt="Selected Image" className="enlarged" />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
