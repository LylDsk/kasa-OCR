import React from "react";
import Banner from "../components/Banner";
import Aboutimg from "../components/Aboutimg";
import Collapsible from "../components/Collapsible";
import "../styles/About.css";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      {" "}
      <Banner />
      <Aboutimg />
      <div className="clps">
        <div className="oclps">
          <Collapsible
            label="Fiabilité"
            data="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
        </div>
        <div className="oclps">
          <Collapsible
            label="Respect"
            data="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className="oclps">
          <Collapsible
            label="Service"
            data="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
        </div>
        <div className="oclps">
          <Collapsible
            label="Sécurité"
            data="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
