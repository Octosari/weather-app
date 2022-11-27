import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";
import SearchBar from "./SearchBar";
import useFetch from "../useFetch";

const Main = () => {
  return (
    <div className="mainWrapper">
      <div className="mainContainer">
        <div className="topWrapper">
          <SearchBar />
          <CurrentWeather />
        </div>

        <FutureWeather />
      </div>
    </div>
  );
};

export default Main;
