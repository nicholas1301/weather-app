import { Container } from "./styles";
import ForecastCard from "../ForecastCard";
import { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";

function ForecastArea() {
  const { forecastData } = useContext(LocationContext);
  const today = new Date().getDate();
  const tomorrow = new Date(Date.now() + 3600 * 1000 * 24).getDate();

  return (
    <Container>
      {forecastData?.map((el, idx) => (
        <ForecastCard
          key={idx}
          forecast={el}
          today={today}
          tomorrow={tomorrow}
        />
      ))}
    </Container>
  );
}

export default ForecastArea;
