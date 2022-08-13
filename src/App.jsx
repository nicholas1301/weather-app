import { useEffect, useContext } from "react";
import { GlobalStyle } from "./styles/global";
import CitySearchInput from "./components/CitySearchInput";
import { LocationContext } from "./contexts/LocationContext";
import { AppContainer } from "./styles/AppContainer";
import { useWindowDimensions } from "./hooks/useWindowDimension";
import WeatherInfoCard from "./components/WeatherInfoCard";
import ForecastArea from "./components/ForecastArea";

function App() {
  const { weatherData, forecastData, cityImages, fetchWeatherDataFromCoords } =
    useContext(LocationContext);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeatherDataFromCoords);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppContainer
        bgUrl={
          cityImages ? (width < 768 ? cityImages.mobile : cityImages.web) : null
        }
      >
        <CitySearchInput />

        {weatherData && <h3 className="cityName">{weatherData.name}</h3>}

        {weatherData && <WeatherInfoCard weatherData={weatherData} />}
        {forecastData && <ForecastArea forecastData={forecastData} />}
        {weatherData && false && (
          <pre>{JSON.stringify(weatherData, null, 4)}</pre>
        )}
        {forecastData && <pre>{JSON.stringify(forecastData, null, 4)}</pre>}
      </AppContainer>
    </>
  );
}

export default App;
