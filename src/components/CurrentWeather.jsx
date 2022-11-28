import clouds from "../icons/cloud.svg";
import rain from "../icons/rain.svg";
import clearDay from "../icons/clearDay.svg";
import clearNight from "../icons/clearNight.svg";
import mist from "../icons/mist.svg";

const CurrentWeather = ({ data }) => {
  const currentDate = new Date();
  const image = (data) => {
    if (data != null && data.weather[0].main === "Clouds") return clouds;
    else if (data != null && data.weather[0].main === "Rain") return rain;
    else if (
      data != null &&
      data.weather[0].main === "Clear" &&
      currentDate.getHours() > 20 &&
      currentDate.getHours() < 4
    )
      return clearNight;
    else if (
      data != null &&
      data.weather[0].main === "Clear" &&
      currentDate.getHours() < 20 &&
      currentDate.getHours() > 4
    )
      return clearDay;
    else if (
      (data != null && data.weather[0].main === "Mist") ||
      (data != null && data.weather[0].main === "Fog")
    )
      return mist;
  };

  return (
    <div className="currentWeather">
      {data != null ? (
        <>
          <div className="textContainer">
            <span>{data != null ? data.main.temp : null} ºC</span>
            <span>{data != null ? data.weather[0].main : null}</span>
            <span className="currentDate">
              {currentDate.getUTCFullYear()}.{currentDate.getUTCMonth() + 1}.
              {currentDate.getUTCDate()}
            </span>
          </div>

          <img
            src={data != null ? image(data) : null}
            alt="cloudy"
            draggable="false"
          />
        </>
      ) : (
        <div className="wrongCity">City no found</div>
      )}
    </div>
  );
};

export default CurrentWeather;
