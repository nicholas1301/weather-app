import { useContext, useState } from "react";
import { teleportApi } from "../../services/teleportApi";
import { InputContainer } from "./styles";
import { MoonLoader } from "react-spinners";
import { LocationContext } from "../../contexts/LocationContext";

function CitySearchInput() {
  const { fetchWeatherAndImagesFromCityUrl } = useContext(LocationContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchMatches, setSearchMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocusOnInput, setIsFocusOnInput] = useState(false);

  const changeHandler = async (e) => {
    setSearchTerm(e.target.value);
    setIsLoading(true);
    try {
      const response = await teleportApi.get(`/cities/?search=${searchTerm}`);
      const matches = response.data._embedded["city:search-results"];
      const matchesObjs = matches.map((match) => {
        return {
          name: match.matching_full_name,
          url: match._links["city:item"].href,
        };
      });
      console.log(matchesObjs);
      // array of object of type
      // name: full_name, url:
      setSearchMatches(matchesObjs);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <InputContainer>
      <div className="sub-container">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={changeHandler}
          onFocus={() => setIsFocusOnInput(true)}
          onBlur={() => setTimeout(() => setIsFocusOnInput(false), 100)}
        />

        <div className="spinner" style={{ opacity: isLoading ? 1 : 0 }}>
          <MoonLoader loading={true} size="20px" />
        </div>
      </div>
      {isFocusOnInput && searchTerm.length > 0 ? (
        <div className="dropdown-menu">
          {!isLoading &&
            searchMatches.length > 0 &&
            searchMatches.map((match, idx) => (
              <div
                key={idx}
                className="city-option"
                onClick={() => {
                  setSearchTerm(match.name);
                  fetchWeatherAndImagesFromCityUrl(match.url);
                }}
              >
                {match.name}
              </div>
            ))}
        </div>
      ) : null}
    </InputContainer>
  );
}

export default CitySearchInput;
