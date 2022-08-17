import { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { FlipCardContainer } from "./styles";

function WeatherInfoCard() {
  const { weatherData } = useContext(LocationContext);
  return (
    <FlipCardContainer>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.name}
          />
          <h2>{Math.round(weatherData.main.temp)}°C</h2>
          <div className="min-max">
            <span>Min: {Math.round(weatherData.main.temp_min)}°C</span> -
            <span> Max: {Math.round(weatherData.main.temp_max)}°C</span>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="row">
            <p>Atmospheric pressure:</p>
            <p>{weatherData.main.pressure}hPa</p>
          </div>
          <div className="row">
            <p>Humidity:</p>
            <p>{weatherData.main.humidity}%</p>
          </div>
        </div>
      </div>
    </FlipCardContainer>
  );
}

export default WeatherInfoCard;
