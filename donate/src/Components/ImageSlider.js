import React, { useState, useEffect } from 'react';
import './cssfiles/imageslider.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/images2.jpg';
import img3 from '../assets/images3.jpg';

function ImageSlider() {
  const images = [img1,img2,img3  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="image-slider">
      <img  className='img_blur' src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
}

export default ImageSlider;
