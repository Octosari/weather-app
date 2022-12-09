import clouds from "./assets/icons/cloud.svg";
import rain from "./assets/icons/rain.svg";
import clear from "./assets/icons/clear.svg";
import mist from "./assets/icons/mist.svg";
import snow from "./assets/icons/snow.svg";

export const imageType = (data) => {
  const currentDate = new Date();
  if (data != null && data.weather[0].main === "Clouds") return clouds;
  else if (data != null && data.weather[0].main === "Rain") return rain;
  else if (data != null && data.weather[0].main === "Clear") return clear;
  else if (data != null && data.weather[0].main === "Snow") return snow;
  else if (
    (data != null && data.weather[0].main === "Mist") ||
    (data != null && data.weather[0].main === "Fog")
  )
    return mist;
};
