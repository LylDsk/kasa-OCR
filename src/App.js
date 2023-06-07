import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Noound from "./pages/Noound";
import Annonce from "./pages/Annonce";

const App = () => {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<Noound />} />
        <Route path="/*" element={<Noound />} />

        {jsonData &&
          jsonData.map((item) => (
            <Route
              key={item.id}
              path={`/annonces/${item.id}`}
              element={<Annonce data={item} />}
            />
          ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
