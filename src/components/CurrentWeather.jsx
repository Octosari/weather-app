import { imageType } from "../imageType";

const CurrentWeather = ({ data, openWholeDay }) => {
  const currentDate = new Date();

  return (
    <div className="currentWeather" onClick={openWholeDay}>
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
            src={data != null ? imageType(data) : null}
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
