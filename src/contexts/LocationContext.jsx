import { useState, createContext } from "react";
import axios from "axios";
import { teleportApi } from "../services/teleportApi";
import { weatherApi, weatherApiKey } from "../services/weatherApi";

export const LocationContext = createContext({});

export function LocationProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [cityImages, setCityImages] = useState(null);

  const fetchWeatherDataFromCoords = async (position) => {
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

      const forecastResponse = await weatherApi.get("forecast", {
        params: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          appid: weatherApiKey,
          units: "metric",
          // lang: "pt_br",
        },
      });
      console.log(forecastResponse.data);
      setForecastData(forecastResponse.data);
      getLocationImages(response.data.name);
    } catch (err) {
      console.log(err);
    }
  };

  const getLocationImages = async (cityName) => {
    try {
      const searchResponse = await teleportApi.get(
        `/cities/?search=${cityName}`
      );
      const cityUrl =
        searchResponse.data._embedded["city:search-results"][0]._links[
          "city:item"
        ].href;

      const cityInfoResponse = await axios.get(cityUrl);
      if (cityInfoResponse.data._links["city:urban_area"]) {
        const imagesRequestUrl =
          cityInfoResponse.data._links["city:urban_area"].href + "images";
        const imagesResponse = await axios.get(imagesRequestUrl);
        setCityImages(imagesResponse.data.photos[0].image);
      } else {
        setCityImages(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchWeatherAndImagesFromCityUrl = async (cityUrl) => {
    try {
      const cityInfoResponse = await axios.get(cityUrl);
      const { latitude, longitude } = cityInfoResponse.data.location.latlon;
      const weatherResponse = await weatherApi.get("weather", {
        params: {
          lat: latitude,
          lon: longitude,
          appid: weatherApiKey,
          units: "metric",
        },
      });
      setWeatherData(weatherResponse.data);

      if (cityInfoResponse.data._links["city:urban_area"]) {
        const imagesRequestUrl =
          cityInfoResponse.data._links["city:urban_area"].href + "images";
        const imagesResponse = await axios.get(imagesRequestUrl);
        setCityImages(imagesResponse.data.photos[0].image);
      } else {
        setCityImages(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        weatherData,
        forecastData,
        setWeatherData,
        cityImages,
        setCityImages,
        getLocationImages,
        fetchWeatherDataFromCoords,
        fetchWeatherAndImagesFromCityUrl,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
