import { useEffect, useContext } from "react";
import { GlobalStyle } from "./styles/global";
import { LocationContext } from "./contexts/LocationContext";
import { AppContainer } from "./styles/AppContainer";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

function App() {
  const { weatherData, forecastData, fetchWeatherDataFromCoords } =
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
        <AppHeader />
        <AppMain />

        {weatherData && false && (
          <pre>{JSON.stringify(weatherData, null, 4)}</pre>
        )}
        {forecastData && false && (
          <pre>{JSON.stringify(forecastData, null, 4)}</pre>
        )}
      </AppContainer>
    </>
  );
}

export default App;
