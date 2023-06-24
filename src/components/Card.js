import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ logements }) => {
  return (
    <NavLink className="link-card" to={"/annonces/" + logements.id}>
      <li className="cardd">
        <div className="card-image">
          <img className="img" src={logements.cover} alt={logements.title} />
        </div>
        <div className="infos">
          <h2 className="title">{logements.title}</h2>
        </div>
      </li>
    </NavLink>
  );
};

export default Card;
