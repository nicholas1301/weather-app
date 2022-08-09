import { Container } from "./styles";

function WeatherInfoCard({ weatherData }) {
  return (
    <Container>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.name}
      />
      <h2>{Math.round(weatherData.main.temp)}°C</h2>
      <div className="min-max">
        <span>Min: {Math.round(weatherData.main.temp_min)}</span> -
        <span> Max: {Math.round(weatherData.main.temp_max)}</span>
      </div>
    </Container>
  );
}

export default WeatherInfoCard;
