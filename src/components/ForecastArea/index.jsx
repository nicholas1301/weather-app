import { Container } from "./styles";
import ForecastCard from "../ForecastCard";
import { useRef } from "react";

function ForecastArea({ forecastData }) {
  const listRef = useRef();
  const time = Date.now();
  const currentTempIndex = forecastData.findIndex(
    (forecast) => forecast.dt * 1000 > time
  );
  const test = () => {
    const MAX_SCROLLLEFT =
      listRef.current.scrollWidth - listRef.current.clientWidth;
    listRef.current.scrollLeft = currentTempIndex * MAX_SCROLLLEFT;
  };

  return (
    <>
      <Container ref={listRef}>
        {forecastData.map((el, idx) => (
          <ForecastCard
            key={idx}
            forecast={el}
            isCurrent={currentTempIndex === idx}
          />
        ))}
      </Container>
    </>
  );
}

export default ForecastArea;
