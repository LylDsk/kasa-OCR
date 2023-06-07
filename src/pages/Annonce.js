import React, { useState } from "react";
import Banner from "../components/Banner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Annonce.css";
import "../styles/Bootstrap.css";

const Annonce = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <Banner />
      <div className="body-annonce">
        {data.pictures && data.pictures.length > 0 ? (
          <Carousel
            onChange={handleSlideChange}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
          >
            {data.pictures.map((picture, index) => (
              <div key={index}>
                <img
                  className="pictures"
                  src={picture}
                  alt={`Image ${index}`}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <p>Aucune image disponible</p>
        )}
        <h2 className="title-annonce">{data.title}</h2>
        <div className="user-infos">
          <p className="username">{data.host.name}</p>
          <img className="user-pic" src={data.host.picture} alt={`Image`} />
        </div>
        <p>{data.description}</p>
        <div>
          <div onClick={() => handleClick(0)}>
            <h3 className="case-title">Titre 1</h3>
          </div>
          {activeIndex === 0 && (
            <div>
              <p>Contenu 1</p>
            </div>
          )}

          <div onClick={() => handleClick(1)}>
            <h3 className="case-title">Titre 2</h3>
          </div>
          {activeIndex === 1 && (
            <div>
              <p>Contenu 2</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Annonce;
