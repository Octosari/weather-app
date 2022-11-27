import cloudLogo from "../icons/cloud.svg";

const CurrentWeather = () => {
  const currentDate = new Date();
  return (
    <div className="currentWeather">
      <div className="textContainer">
        <span>5º</span>
        <span>windy</span>
        <span className="currentDate">
          {currentDate.getUTCFullYear()}.{currentDate.getUTCMonth() + 1}.
          {currentDate.getUTCDate()}
        </span>
      </div>

      <img src={cloudLogo} alt="cloudy" draggable="false" />
    </div>
  );
};

export default CurrentWeather;
