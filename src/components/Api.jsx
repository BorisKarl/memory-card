let dataCount = 0;
const fetchPlanet = async (planet, index) => {
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
      dataCount++;
      console.log(
        `Fetched data for ${planetObj.planet}, dataCount: ${dataCount}`
      );
      return planetObj;
    }
  } catch (error) {
    console.error(error);
  }
};

export { fetchPlanet, dataCount };
