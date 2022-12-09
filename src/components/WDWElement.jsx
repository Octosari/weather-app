import cloud from "../assets/icons/cloud.svg";

export const WDWElement = () => {
  return (
    <div className="WDWElement">
      <img src={cloud} />
      <span className="WDWTemperature">15°</span>
    </div>
  );
};
