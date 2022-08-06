import "./App.css";
import { useState } from "react";
import { weatherApi, weatherApiKey } from "./services/weatherApi";
import { teleportApi } from "./services/teleportApi";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [cityImages, setCityImages] = useState(null);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const findCityFromSearchTerm = () => {
    console.log("hi");
  };

  const setPosition = async (position) => {
    try {
      const response = await weatherApi.get("weather", {
        params: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          appid: weatherApiKey,
          units: "metric",
          // lang: "pt_br",
        },
      });
      setWeatherData(response.data);
      getLocationImages(response.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const getLocationImages = async (cityName) => {
    try {
      const response = await teleportApi.get(`/cities/?search=${cityName}`);
      const cityUrl =
        response.data._embedded["city:search-results"][0]._links["city:item"]
          .href;
      const cityInfoResponse = await axios.get(cityUrl);
      const imagesRequestUrl =
        cityInfoResponse.data._links["city:urban_area"].href + "images";
      const imagesResponse = await axios.get(imagesRequestUrl);
      setCityImages(imagesResponse.data.photos[0].image);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={findCityFromSearchTerm}>Find city</button>
      <button onClick={getLocation}>Get current location</button>
      {weatherData && <pre>{JSON.stringify(weatherData, null, 4)}</pre>}
      {weatherData && (
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.name}
        />
      )}
      {cityImages && <img src={cityImages.mobile} alt={weatherData.name} />}
      {cityImages && <img src={cityImages.web} alt={weatherData.name} />}
    </div>
  );
}

export default App;
