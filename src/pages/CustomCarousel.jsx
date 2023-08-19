import React, { useState } from 'react';
import '../css/CustomCarousel.css'; // Assurez-vous d'avoir un fichier CSS pour styliser le Carousel

function CustomCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="custom-carousel">
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />

      <div className="controls">
        <button onClick={prevImage}>&lt;</button>
        <button onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
}

export default CustomCarousel;
