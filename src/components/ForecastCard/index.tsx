import { FlipCard } from "./styles";
import { IForecastData } from "../../contexts/LocationContext";

interface IForecastCardProps {
  forecast: IForecastData;
  today: number;
  tomorrow: number;
}

function ForecastCard({ forecast, today, tomorrow }: IForecastCardProps) {
  const cardDate = forecast.dt_txt.split(" ")[0].split("-").reverse(); // [dd, mm, yyyy]

  const cardTime = forecast.dt_txt.split(" ")[1].slice(0, 2);
  const isToday = +cardDate[0] === today;
  const isTomorrow = +cardDate[0] === tomorrow;

  return (
    <FlipCard>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* <Card isCurrent={isCurrent}> */}
          <h2>
            {isToday
              ? "Today"
              : isTomorrow
              ? "Tomorrow"
              : cardDate.join("/").slice(0, 5)}
          </h2>
          <h2>{cardTime}h</h2>

          <img
            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
          />
          <h3>{Math.round(forecast.main.temp)}°C</h3>
          {/* </Card> */}
        </div>
        <div className="flip-card-back">
          <div className="row">
            <p>Atmospheric pressure:</p>
            <p>{forecast.main.pressure}hPa</p>
          </div>
          <div className="row">
            <p>Humidity:</p>
            <p>{forecast.main.humidity}%</p>
          </div>
        </div>
      </div>
    </FlipCard>
  );
}

export default ForecastCard;
