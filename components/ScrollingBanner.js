"use client"

import { useState, useEffect } from 'react';

const ScrollingBanner = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 h-screen w-full bg-cover bg-center transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ backgroundImage: `url("${image.url}")` }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 text-center">{image.welcomeText}</h2>
            <a
              href={image.promoLink}
              className="mt-4 px-8 py-2 text-lg font-semibold rounded animate-gradient-x"
              style={{
                backgroundImage: 'linear-gradient(to right, rgb(179, 157, 219), rgb(206, 147, 216), rgb(179, 157, 219))',
                color: 'white',
                borderRadius: '10px',
                display: 'inline-block',
                backgroundClip: 'padding-box',
                textDecoration: 'none'
              }}
            >
              {image.promoText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollingBanner;
