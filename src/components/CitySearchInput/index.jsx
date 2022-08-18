import { useContext, useState } from "react";
import { teleportApi } from "../../services/teleportApi";
import { InputContainer } from "./styles";
import { PulseLoader } from "react-spinners";
import { LocationContext } from "../../contexts/LocationContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRef } from "react";

function CitySearchInput() {
  const { fetchWeatherAndImagesFromCityUrl } = useContext(LocationContext);
  const inputRef = useRef();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchMatches, setSearchMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocusOnInput, setIsFocusOnInput] = useState(false);
  const [isCitySelected, setIsCitySelected] = useState(false);

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

      setSearchMatches(matchesObjs);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <InputContainer>
      <div className="sub-container">
        <input
          type="text"
          ref={inputRef}
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={changeHandler}
          onFocus={() => setIsFocusOnInput(true)}
          onBlur={() => setTimeout(() => setIsFocusOnInput(false), 100)}
        />

        <div className="spinner">
          {isCitySelected && !isLoading && isFocusOnInput && (
            <AiOutlineCloseCircle
              style={{
                color: "#333",
                height: "25px",
                width: "25px",
                marginLeft: "15px",
                marginTop: "3px",
                cursor: "pointer",
              }}
              onClick={() => {
                setSearchTerm("");
                setIsCitySelected(false);
              }}
            />
          )}
          <PulseLoader loading={isLoading} size="8px" color="#555" />
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
                  setIsCitySelected(true);
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
