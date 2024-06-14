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
        alert("Gut gemacht, das waren alle acht Planeten!");
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

const handleGreeting = (e) => {
  e.target.style.display = "none";
};


  return (
    <>
      {spinner ? (
        <div className="loading_wrapper">
          <h1>
            Etwas Geduld, die NASA API lädt
            die Planeten...
          </h1>
        </div>
      ) : (
        <div>
          <div className="greeting_wrapper" onClick={handleGreeting}>
            <h1 className="greeting">
            <br/>
            Hallo Welt! <br/> Das ist ein Memory, bei dem sich nach jedem Klick die Reihenfolge der Planeten ändert.
            <br/>
            Klicke jeden Planeten nur ein Mal und klicke einmal zum Anfangen;)
            </h1>
          </div>
          <div className="wrapper">
            <div className="counter">
              <h1>Punkte: {count} </h1>
              <h1 className="games_won">Spiele gewonnen: {gamesWon}</h1>{" "}
              <h1> Highscore: {highScore} </h1>
            </div>

            <div className="card_grid">
              {planets.map((el, index) => (
                <div key={index} className="card">
                  <img
                    onClick={handleImageClick}
                    src={el.imageSrc}
                    id={index}
                    alt={el.planet}
                  />
                  <h2 className="planet_name">{el.planet}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
