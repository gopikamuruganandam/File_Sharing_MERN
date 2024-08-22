// DynamicBackground.js
import React, { useState, useEffect } from 'react';
import './DynamicBackground.css'; // Import your CSS for styling
import images from '../images/background.jpg';
import images from '../images/img.jpeg';
import images from '../images/img2.jpeg';

const images = [
  images,
  // Add more background images as needed
];
const DynamicBackground = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="dynamic-background"
      style={{ backgroundImage: `url(${images[backgroundIndex]})` }}
    >
      {/* Your content */}
    </div>
  );
};

export default DynamicBackground;
