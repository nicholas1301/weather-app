import { useState, createContext } from "react";
import axios from "axios";
import { teleportApi } from "../services/teleportApi";
import { weatherApi, weatherApiKey } from "../services/weatherApi";

export const LocationContext = createContext({});

export function LocationProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [cityImages, setCityImages] = useState(null);
  const [weatherIconCode, setWeatherIconCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherDataFromCoords = async (position) => {
    setLoading(true);
    setWeatherIconCode(null);
    try {
      const weatherPromise = weatherApi.get("weather", {
        params: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          appid: weatherApiKey,
          units: "metric",
          // lang: "pt_br",
        },
      });

      const forecastPromise = weatherApi.get("forecast", {
        params: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          appid: weatherApiKey,
          units: "metric",
          // lang: "pt_br",
        },
      });
      const [weatherResponse, forecastResponse] = await Promise.all([
        weatherPromise,
        forecastPromise,
      ]);
      console.log(forecastResponse.data.list[0]);
      setWeatherData(weatherResponse.data);
      setWeatherIconCode(weatherResponse.data.weather[0].icon);
      setForecastData(forecastResponse.data.list);
      getLocationImages(weatherResponse.data.name);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getLocationImages = async (cityName) => {
    setLoading(true);
    try {
      setCityImages(null);
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
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherAndImagesFromCityUrl = async (cityUrl) => {
    try {
      setLoading(true);
      setCityImages(null);
      setWeatherIconCode(null);

      const cityInfoResponse = await axios.get(cityUrl);
      const { latitude, longitude } = cityInfoResponse.data.location.latlon;
      const weatherPromise = weatherApi.get("weather", {
        params: {
          lat: latitude,
          lon: longitude,
          appid: weatherApiKey,
          units: "metric",
        },
      });

      const forecastPromise = weatherApi.get("forecast", {
        params: {
          lat: latitude,
          lon: longitude,
          appid: weatherApiKey,
          units: "metric",
          // lang: "pt_br",
        },
      });
      const [weatherResponse, forecastResponse] = await Promise.all([
        weatherPromise,
        forecastPromise,
      ]);
      setWeatherData(weatherResponse.data);
      setWeatherIconCode(weatherResponse.data.weather[0].icon);
      setForecastData(forecastResponse.data.list);

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        loading,
        setLoading,
        weatherData,
        weatherIconCode,
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
