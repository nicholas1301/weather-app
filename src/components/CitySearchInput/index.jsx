import { useState } from "react";
import axios from "axios";
import { teleportApi } from "../../services/teleportApi";
import { weatherApi, weatherApiKey } from "../../services/weatherApi";
import { InputContainer } from "./styles";

function CitySearchInput({ setWeatherData, setCityImages }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMatches, setSearchMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const findCityFromSearchTerm = async () => {
    try {
      const response = await teleportApi.get(`/cities/?search=${searchTerm}`);
      const cityUrl =
        response.data._embedded["city:search-results"][0]._links["city:item"]
          .href;
      const cityResponse = await axios.get(cityUrl);
      const { latitude, longitude } = cityResponse.data.location.latlon;
      const imagesRequestUrl =
        cityResponse.data._links["city:urban_area"].href + "images";

      const weatherResponse = await weatherApi.get("weather", {
        params: {
          lat: latitude,
          lon: longitude,
          appid: weatherApiKey,
          units: "metric",
        },
      });
      setWeatherData(weatherResponse.data);

      const imagesResponse = await axios.get(imagesRequestUrl);
      setCityImages(imagesResponse.data.photos[0].image);
    } catch (err) {
      console.log(err);
    }
  };

  const changeHandler = async (e) => {
    setSearchTerm(e.target.value);
    setIsLoading(true);
    try {
      const response = await teleportApi.get(`/cities/?search=${searchTerm}`);
      const matches = response.data._embedded["city:search-results"];
      const matchesFullName = matches.map((match) => match.matching_full_name);
      console.log(matchesFullName);
      setSearchMatches(matchesFullName);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <>
      <InputContainer>
        <input type="text" value={searchTerm} onChange={changeHandler} />
        <button onClick={findCityFromSearchTerm}>Find city</button>
      </InputContainer>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        searchMatches.length > 0 &&
        searchMatches.map((match) => <p>{match}</p>)}
    </>
  );
}

export default CitySearchInput;
