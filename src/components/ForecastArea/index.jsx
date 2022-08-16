import { Container } from "./styles";
import ForecastCard from "../ForecastCard";
import { useContext, useRef } from "react";
import { LocationContext } from "../../contexts/LocationContext";

function ForecastArea() {
  const { forecastData } = useContext(LocationContext);
  const listRef = useRef();
  const time = Date.now();
  const currentTempIndex = forecastData.findIndex(
    (forecast) => forecast.dt * 1000 > time
  );
  // const test = () => {
  //   const MAX_SCROLLLEFT =
  //     listRef.current.scrollWidth - listRef.current.clientWidth;
  //   listRef.current.scrollLeft = currentTempIndex * MAX_SCROLLLEFT;
  // };
  const today = new Date().getDate();
  const tomorrow = new Date(Date.now() + 3600 * 1000 * 24).getDate();

  return (
    <>
      <Container ref={listRef}>
        {forecastData.map((el, idx) => (
          <ForecastCard
            key={idx}
            forecast={el}
            isCurrent={currentTempIndex === idx}
            today={today}
            tomorrow={tomorrow}
          />
        ))}
      </Container>
    </>
  );
}

export default ForecastArea;
