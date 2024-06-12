import { useState, useEffect } from "react";
import { planetImg } from "./Api";


export default function API() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const mercuryImageSrc = await planetImg("Mercury", 57);
      const venusImageSrc = await planetImg("Venus", 70);
      const earthImageSrc = await planetImg("Earth", 16);
      const marsImageSrc = await planetImg("Mars", 78);
      const jupiterImageSrc = await planetImg("Jupiter", 92);
      const saturnImageSrc = await planetImg("Saturn", 36);
      const uranusImageSrc = await planetImg("Uranus", 61);
      const plutoImageSrc = await planetImg("Pluto", 19);

      const planetArray = [
        mercuryImageSrc,
        venusImageSrc,
        earthImageSrc,
        marsImageSrc,
        jupiterImageSrc,
        saturnImageSrc,
        uranusImageSrc,
        plutoImageSrc,
      ];

      setPlanets(planetArray);
    };

    fetchPlanets();
  }, []); 

  
  

  return (
    <div className="card_grid">
      {planets.map((el) => (
        <div key={el.index} className="card">
          <img
            src={el.imageSrc}
            id={el.index}
            alt={el.planet}
            style={{
              width: 200,
              height: 200,
            }}
          />
          <p>{el.planet}</p>
        </div>
      ))}
    </div>
  );
}
