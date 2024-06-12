const body = document.querySelector("body");
// let dataOK = false;

const planetImg = async (planet, index) => {
  const planetUrl =
    "https://images-api.nasa.gov/search?q=" + planet + "&media_type=image";
  // console.log(planetUrl);
  try {
    const response = await fetch(planetUrl);
    if (!response.ok) {
      console.error("Can not fetch data");
    } else {
      const result = await response.json();
      // dataOK = true;
      const imageSrc = result.collection.items[index].links[0].href;
      const planetObj = { planet, imageSrc, index };
      return planetObj;
    }
  } catch (error) {
    console.error(error);
  }
};

const makePlanetArray = async () => {
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
  return planetArray;
};

const makeDomPlanets = async () => {
  const planetArray = makePlanetArray();
  console.log(planetArray);

  for (let i = 0; i < planetArray.length; i++) {
    const image = document.createElement("img");
    const paragraph = document.createElement("p");
    paragraph.textContent = planetArray[i].planet;
    image.setAttribute("src", planetArray[i].imageSrc);
    image.setAttribute("id", i);
    body.appendChild(image);
    body.appendChild(paragraph);
  }
};

export { planetImg, makeDomPlanets, makePlanetArray };
