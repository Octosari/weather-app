import cloudLogo from "../icons/cloud.svg";

const FutureWeatherElement = () => {
  return (
    <div className="futureWeatherElement">
      <div className="dateAndType">
        <span>21.11</span>
        <div className="classAndRisk">
          <img src={cloudLogo} alt="cloud" />
          <span className="riskOfPrecipitation"> 10%</span>
        </div>
      </div>

      <span className="temperature">5º...11º</span>
    </div>
  );
};

export default FutureWeatherElement;
