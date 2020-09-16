import WeatherData from "../WeatherData.js";
import { LengthUnits } from "../enums.js";

function Precipitation(options) {
  const setPrecipitation = (newValue) => (options.value = newValue);
  const setPrecipitationType = (newType) => (options.type = newType);

  const getPecipitation = () => options.value;
  const getPrecipitationType = () => options.type;

  const convertToInches = () => {
    if (options.unit === LengthUnits.MM) {
      options.unit = LengthUnits.INCHES;
      options.value = options.value / 25.4;
    } else console.log("Precipitation is already in INCHES");
  };

  const convertToMm = () => {
    if (options.unit === LengthUnits.INCHES) {
      options.unit = LengthUnits.MM;
      options.value = options.value * 25.4;
    } else console.log("Precipitation is already in MM");
  };

  return {
    setPrecipitation,
    getPecipitation,
    setPrecipitationType,
    getPrecipitationType,
    convertToInches,
    convertToMm,
  };
}

export default Precipitation;
