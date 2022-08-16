import { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { Container } from "./styles";

function WeatherInfoCard() {
  const { weatherData } = useContext(LocationContext);
  return (
    <Container>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.name}
      />
      <h2>{Math.round(weatherData.main.temp)}°C</h2>
      <div className="min-max">
        <span>Min: {Math.round(weatherData.main.temp_min)}°C</span> -
        <span> Max: {Math.round(weatherData.main.temp_max)}°C</span>
      </div>
    </Container>
  );
}

export default WeatherInfoCard;
