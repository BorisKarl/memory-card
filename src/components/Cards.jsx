import { useState, useEffect } from "react";
import { fetchPlanet } from "./Api";


export default function Game() {
  //const cardGrid = document.querySelector("card_grid");
  const [planets, setPlanets] = useState([]);
  const [count, setCount] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [spinner, setSpinner] = useState(false);
  const [gamesWon, setGamesWon] = useState(0);
  const [mountOK,  setMountOK] = useState(false);

  useEffect(() => {
   
    const fetchPlanets = async () => {
       setSpinner(true);
      const mercuryImageSrc = await fetchPlanet("Mercury", 57);
      const venusImageSrc = await fetchPlanet("Venus", 70);
      const earthImageSrc = await fetchPlanet("Earth", 16);
      const marsImageSrc = await fetchPlanet("Mars", 78);
      const jupiterImageSrc = await fetchPlanet("Jupiter", 92);
      const saturnImageSrc = await fetchPlanet("Saturn", 36);
      const uranusImageSrc = await fetchPlanet("Uranus", 61);
      const plutoImageSrc = await fetchPlanet("Pluto", 19);

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
      setMountOK(false);
      setSpinner(false);
      console.log("Planets set...");
    };
    fetchPlanets();

  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log("Shuffled!");

    return array;
  };

  const handleImageClick = (e) => {
    console.log(clickedImages);
    const clickedImageName = e.target.alt;

    if (clickedImages.some((image) => image.name === clickedImageName)) {
      if (highScore < count) {
        setHighScore(count);
      }
      setCount(0);
      setClickedImages([]);
    } else {
      setClickedImages((prev) => [
        ...prev,
        { name: e.target.alt, id: e.target.id },
      ]);
      setCount(count + 1);
    }
    const array = planets;
    console.log(array);

    setPlanets(shuffleArray(array));
  };

  useEffect(() => {
    const checkCounter = () => {
      if (count === 8) {
        alert("Hooray, you know all the planets!");
        setHighScore(count);
        setCount(0);
        setClickedImages([]);
        setGamesWon(gamesWon + 1);
      }
    }
     checkCounter();
  });

console.log(mountOK);
console.log("Spinner? " + spinner);


  return (
    <>
      {spinner ? (
        <div
          className="loading_wrapper">
          <h1>LOADING pictures from the NASA API...</h1>
        </div>
      ) : (
        <div className="wrapper">
          <div className="counter">
            <h1>Count: {count} </h1>
            <h1>Games won: {gamesWon}</h1> <h1> High Score: {highScore} </h1>
          </div>

          <div className="card_grid">
            {planets.map((el, index) => (
              <div key={index} className="card">
                <img
                  onClick={handleImageClick}
                  src={el.imageSrc}
                  id={index}
                  alt={el.planet}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                />
                <h2 className="planet_name">{el.planet}</h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
