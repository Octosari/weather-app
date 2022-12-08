import clouds from "./assets/icons/cloud.svg";
import rain from "./assets/icons/rain.svg";
import clearDay from "./assets/icons/clearDay.svg";
import clearNight from "./assets/icons/clearNight.svg";
import mist from "./assets/icons/mist.svg";

export const imageType = (data) => {
  const currentDate = new Date();
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
