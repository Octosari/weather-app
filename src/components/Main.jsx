import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";
import SearchBar from "./SearchBar";
import useFetch from "../useFetch";
import { useState } from "react";

const Main = () => {
  const [currentCity, setCurrentCity] = useState("Kherson");

  const cityFromInput = (city) => {
    setCurrentCity(city);
  };
  const { data } = useFetch(currentCity);

  return (
    <div className="mainWrapper">
      <div className="mainContainer">
        <div className="topWrapper">
          <SearchBar cityFromInput={cityFromInput} />
          <CurrentWeather
            data={data != null && data.cod == 200 ? data : null}
          />
        </div>
        <FutureWeather />
      </div>
    </div>
  );
};

export default Main;
