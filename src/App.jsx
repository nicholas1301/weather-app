import { useState, useEffect } from "react";
import axios from "axios";
import { weatherApi, weatherApiKey } from "./services/weatherApi";
import { teleportApi } from "./services/teleportApi";
import { GlobalStyle } from "./styles/global";
import CitySearchInput from "./components/CitySearchInput";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityImages, setCityImages] = useState(null);

  useEffect(() => {
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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
    }
  }, []);

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
    <>
      <GlobalStyle />
      <div className="App">
        <CitySearchInput
          setWeatherData={setWeatherData}
          setCityImages={setCityImages}
        />
        {weatherData && <pre>{JSON.stringify(weatherData, null, 4)}</pre>}
        {weatherData && (
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.name}
          />
        )}
        {cityImages && (
          <img
            src={cityImages.mobile}
            alt={weatherData ? weatherData.name : "city image"}
          />
        )}
        {cityImages && (
          <img
            src={cityImages.web}
            alt={weatherData ? weatherData.name : "city image"}
          />
        )}
      </div>
    </>
  );
}

export default App;
