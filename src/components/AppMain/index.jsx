import { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { MainContainer } from "./styles";
import WeatherInfoCard from "../WeatherInfoCard";
import ForecastArea from "../ForecastArea";

function AppMain() {
  const { weatherData, forecastData, weatherIconCode, cityImages, loading } =
    useContext(LocationContext);
  return (
    <MainContainer
      weatherIconCode={weatherIconCode}
      cityHasImages={!!cityImages}
    >
      {weatherIconCode && <div className="background-overlay"></div>}
      {weatherData && !loading && <WeatherInfoCard />}
      {forecastData && !loading && <ForecastArea />}
    </MainContainer>
  );
}

export default AppMain;
