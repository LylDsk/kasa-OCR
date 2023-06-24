import React, { useState } from "react";
import Banner from "../components/Banner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Annonce.css";
import redStar from "../assets/redStar.png";
import greyStar from "../assets/greyStar.png";
import Collapsible from "../components/Collapsible";
import Carousell from "../components/Carousel";
import Footer from "../components/Footer";

const Annonce = ({ data }) => {
  const [open, setOPen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const toggle = () => {
    setOPen(!open);
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const renderRatingStars = (rating) => {
    const maxRating = 5;
    const roundedRating = Math.round(rating);
    const fullStars = Array(roundedRating).fill(null);
    const emptyStars = Array(maxRating - roundedRating).fill(null);

    return (
      <>
        {fullStars.map((_, index) => (
          <img className="star" key={index} src={redStar} alt="Red Star" />
        ))}
        {emptyStars.map((_, index) => (
          <img className="star" key={index} src={greyStar} alt="Grey Star" />
        ))}
      </>
    );
  };

  return (
    <>
      <Banner />
      <div className="body-annonce">
        <Carousell images={data.pictures} />

        <div className="annonce-container">
          <div className="location-infos">
            <h2 className="title-annonce">{data.title}</h2>
            <p className="location">{data.location}</p>
            <ul className="tags-list">
              {data.tags.map((tag, index) => (
                <li className="tags" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="user-infos">
            <div className="profile">
              <p className="username">{data.host.name}</p>
              <img className="user-pic" src={data.host.picture} alt={`Image`} />
            </div>
            <div className="rating">{renderRatingStars(data.rating)}</div>
          </div>
        </div>
      </div>
      <div className="collapse-annonce">
        <div className="collapsible-container">
          <Collapsible label="Description" data={data.description} />
        </div>
        <div className="collapsible-container">
          <Collapsible label="Equipements" data={data.equipments} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Annonce;
