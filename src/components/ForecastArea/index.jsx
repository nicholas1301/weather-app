import { Container } from "./styles";
import ForecastCard from "../ForecastCard";

function ForecastArea({ forecastData }) {
  const time = new Date().getTime();
  console.log(time);
  const currentTempIndex = forecastData.findIndex(
    (forecast) => forecast.dt * 1000 > time
  );
  console.log(currentTempIndex);

  return (
    <Container>
      {forecastData.map((el, idx) => (
        <ForecastCard
          key={idx}
          forecast={el}
          isCurrent={currentTempIndex === idx}
        />
      ))}
    </Container>
  );
}

export default ForecastArea;
