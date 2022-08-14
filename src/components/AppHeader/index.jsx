import { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { Container } from "./styles";
import CitySearchInput from "../CitySearchInput";

function AppHeader({ bgUrl }) {
  const { weatherData } = useContext(LocationContext);
  return (
    <Container bgUrl={bgUrl}>
      <CitySearchInput />

      {weatherData && <h3 className="cityName">{weatherData.name}</h3>}
    </Container>
  );
}

export default AppHeader;
