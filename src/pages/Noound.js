import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import "../styles/Notfound.css";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Banner />
      <h1 className="nflogo">404</h1>
      <div className="nfmsg">
        <h2 className="nftxt">Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <NavLink className="homereturn" to="/">
        <p className="nfredir" href="">
          Retourner à la page d'acceuil
        </p>
      </NavLink>
      <Footer />
    </>
  );
};

export default NotFound;
