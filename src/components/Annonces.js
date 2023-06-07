import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/Annonces.css";

function Annonces() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Fonction pour charger le fichier JSON
    const loadJsonData = async () => {
      try {
        const response = await fetch("/logements.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Erreur lors du chargement du fichier JSON :", error);
      }
    };

    loadJsonData();
  }, []);
  return (
    <div>
      <ul className="annonces">
        {jsonData &&
          jsonData.map((logements, index) => (
            //<li key={index}>{logements.title}</li>
            <Card key={logements.id} logements={logements} />
          ))}
      </ul>
    </div>
  );
}

/*const Annonces = () => {
  const [data, setData] = useState([]);
  console.log(logements);
  return <div></div>;
};*/

export default Annonces;
