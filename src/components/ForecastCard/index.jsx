import { Card } from "./styles";

function ForecastCard({ forecast, isCurrent }) {
  return (
    <Card isCurrent={isCurrent}>
      <h2>{forecast.dt_txt.split(" ")[0]}</h2>
      <h2>{forecast.dt_txt.split(" ")[1]}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt={forecast.name}
      />
      <h3>{Math.round(forecast.main.temp)}°C</h3>
    </Card>
  );
}

export default ForecastCard;
