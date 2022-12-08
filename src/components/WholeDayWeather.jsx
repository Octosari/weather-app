import arrowBack from "../assets/icons/arrowBack.svg";

import { imageType } from "../imageType";

const WholeDayWeather = ({ data, goBackHandler }) => {
  return (
    <div className="mainContainer">
      <div className="wholeDayWeatherContainer">
        <button onClick={goBackHandler}>
          <img src={arrowBack} />
        </button>

        <div className="currentType">
          <img src={imageType(data)} />
          <div className="textWDWContainer">
            <span>{data != null ? data.main.temp : null} ºC</span>
            <span className="weatherType">
              {data != null ? data.weather[0].main : null}
            </span>
          </div>
        </div>
        <div className="wholeDayElements"></div>
      </div>
    </div>
  );
};

export default WholeDayWeather;
