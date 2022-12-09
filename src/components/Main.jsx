import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";
import SearchBar from "./SearchBar";
import useFetch from "../useFetch";
import { useState } from "react";
import WholeDayWeather from "./WholeDayWeather";

const Main = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [currentCity, setCurrentCity] = useState("Kherson");

  const cityFromInput = (city) => {
    setCurrentCity(city);
  };
  const goBackHandler = () => {
    setIsClicked(false);
  };
  const openWholeDay = () => {
    setIsClicked(true);
  };
  const { data } = useFetch(currentCity);

  return (
    <div className="mainWrapper">
      {isClicked ? (
        <WholeDayWeather
          data={data !== null && data.cod === 200 ? data : null}
          goBackHandler={goBackHandler}
        />
      ) : (
        <div className="mainContainer">
          <div className="topWrapper">
            <SearchBar cityFromInput={cityFromInput} />
            <CurrentWeather
              currentCity={currentCity}
              openWholeDay={
                data !== null && data.cod === 200 ? openWholeDay : null
              }
              data={data !== null && data.cod === 200 ? data : null}
            />
          </div>
          <FutureWeather />
        </div>
      )}
    </div>
  );
};

export default Main;
