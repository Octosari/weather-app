import arrowBack from "../assets/icons/arrowBack.svg";

import { imageType } from "../imageType";
import { WDWElement } from "./WDWElement";

const WholeDayWeather = ({ data, goBackHandler }) => {
  return (
    <div className="mainContainer">
      <div className="wholeDayWeatherContainer">
        <div className="topWDWContainer">
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
        </div>
        <div className="WDWFutureInfo">
          <WDWElement />
          <WDWElement />
          <WDWElement />
          <WDWElement />
          <WDWElement />
          <WDWElement />
          <WDWElement />
          <WDWElement />
          <WDWElement />
        </div>
      </div>
    </div>
  );
};

export default WholeDayWeather;
