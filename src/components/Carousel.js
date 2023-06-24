import React, { useState } from "react";
import prevArrow from "../assets/prev.png";
import nextArrow from "../assets/next.png";
import "../styles/Carousell.css";

const Carousel = ({ images }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % images.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="button-container">
        <button className="arrow arrow-prev" onClick={prevSlide}>
          <img className="arwimg" src={prevArrow} alt="Previous" />
        </button>
        <button className="arrow arrow-next" onClick={nextSlide}>
          <img className="arwimg" src={nextArrow} alt="Next" />
        </button>
      </div>
      <div className="crsl">
        <img className="crslimg" src={images[slide]} alt={`Image ${slide}`} />
      </div>
    </div>
  );
};

export default Carousel;
