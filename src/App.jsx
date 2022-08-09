import { useEffect, useContext } from "react";
import { GlobalStyle } from "./styles/global";
import CitySearchInput from "./components/CitySearchInput";
import { LocationContext } from "./contexts/LocationContext";
import { AppContainer } from "./styles/AppContainer";

function App() {
  const { weatherData, cityImages, fetchWeatherDataFromCoords } =
    useContext(LocationContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeatherDataFromCoords);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <CitySearchInput />
        {weatherData && <pre>{JSON.stringify(weatherData, null, 4)}</pre>}
        {weatherData && (
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.name}
          />
        )}
        {cityImages && (
          <img
            src={cityImages.mobile}
            alt={weatherData ? weatherData.name : "city image"}
          />
        )}
        {cityImages && (
          <img
            src={cityImages.web}
            alt={weatherData ? weatherData.name : "city image"}
          />
        )}
      </AppContainer>
    </>
  );
}

export default App;
