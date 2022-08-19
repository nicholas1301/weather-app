import { useState, createContext } from "react";
import axios from "axios";
import { teleportApi } from "../services/teleportApi";
import { weatherApi, weatherApiKey } from "../services/weatherApi";

interface IPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface IWeather {
  id: string;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: IWeather[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
}

export interface IForecastData {
  weather: IWeather[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  dt_txt: string;
}

interface ICityImages {
  mobile: string;
  web: string;
}

interface ILocationContextValues {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  weatherData: IWeatherData | null;
  weatherIconCode: string | null;
  forecastData: IForecastData[] | null;
  cityImages: ICityImages | null;
  setCityImages: React.Dispatch<React.SetStateAction<ICityImages | null>>;
  getLocationImages: (cityName: string) => void;
  fetchWeatherDataFromCoords: (position: IPosition) => void;
  fetchWeatherAndImagesFromCityUrl: (cityUrl: string) => void;
}

export const LocationContext = createContext({} as ILocationContextValues);

interface IProviderProps {
  children: React.ReactNode;
}

export function LocationProvider({ children }: IProviderProps) {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [forecastData, setForecastData] = useState<IForecastData[] | null>([]);
  const [cityImages, setCityImages] = useState<ICityImages | null>(
    {} as ICityImages
  );
  const [weatherIconCode, setWeatherIconCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherDataFromCoords = async (position: IPosition) => {
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

  const getLocationImages = async (cityName: string) => {
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

  const fetchWeatherAndImagesFromCityUrl = async (cityUrl: string) => {
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
