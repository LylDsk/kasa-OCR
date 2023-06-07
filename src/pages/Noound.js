import React from "react";
import Banner from "../components/Banner";
import "../styles/Notfound.css";

const NotFound = () => {
  return (
    <>
      <Banner />
      <h1 className="nflogo">404</h1>
      <h2 className="nftxt">Oups! La page que vous demandez n'existe pas.</h2>
      <p className="nfredir" href="">
        Retourner à la page d'acceuil
      </p>
    </>
  );
};

export default NotFound;
