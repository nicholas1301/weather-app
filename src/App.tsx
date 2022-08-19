import { useEffect, useContext } from "react";
import { GlobalStyle } from "./styles/global";
import { LocationContext } from "./contexts/LocationContext";
import { AppContainer } from "./styles/AppContainer";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

function App() {
  const { fetchWeatherDataFromCoords } = useContext(LocationContext);

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
      </AppContainer>
    </>
  );
}

export default App;
