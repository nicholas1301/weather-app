import { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { Container } from "./styles";
import CitySearchInput from "../CitySearchInput";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { FadeLoader } from "react-spinners";

function AppHeader() {
  const { loading, weatherData, cityImages } = useContext(LocationContext);
  const { height, width } = useWindowDimensions();

  return (
    <Container bgUrl={cityImages && width >= 768 ? cityImages.web : null}>
      {cityImages && <div className="background-overlay"></div>}
      <CitySearchInput />
      {loading && (
        <FadeLoader
          cssOverride={{ marginTop: "20px" }}
          loading={true}
          // size="20px"
          color="#fff"
        />
      )}
      {weatherData && !loading && (
        <h3 className="cityName">{weatherData.name}</h3>
      )}
    </Container>
  );
}

export default AppHeader;
