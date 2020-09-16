import WeatherData from "./WeatherData.js";
import {
  TemperatureUnits,
  LengthUnits,
  PrecipitationTypes,
  SpeedUnits,
  CardinalDirections,
} from "./enums.js";

function WeatherHistory(value, type, unit, time, place) {
  const options = { value, type, unit, time, place };

  const getCurrentPlace = () => options.place;
  const setCurrentPlace = (newPlace) => (options.place = newPlace);
  const clearCurrentPlace = () => {
    if (options.place === undefined || options.place === null) {
      console.log("The place is already undefined");
    } else options.place === undefined;
  };

  const getCurrentType = () => options.type;
  const setCurrentType = (newType) => (options.type = newType);
  const clearCurrentType = () => {
    if (options.type === undefined || options.type === null) {
      console.log("The type is already undefined");
    } else options.type === undefined;
  };

  const getCurrentPeriod = () => options.period;
  const setCurrentPeriod = (newPeriod) => (options.period = newPeriod);
  const clearCurrentPeriod = () => {
    if (options.period === undefined || options.type === period) {
      console.log("The period is already undefined");
    } else options.period === undefined;
  };

  const convertToUSUnits = () => {
    switch (options.unit) {
      case TemperatureUnits.CELSIUS:
        options.unit = TemperatureUnits.FAHRENHEIT;
        options.value = options.convertToF();
        break;
      case LengthUnits.MM:
        options.unit = LengthUnits.INCHES;
        options.value = options.convertToInches();
        break;
      case SpeedUnits.MS:
        options.unit = SpeedUnits.MPH;
        options.value = options.convertToMPH();
        break;
      default:
        "Value is already in US Units";
    }
  };

  const convertToInternationalUnits = () => {
    switch (options.unit) {
      case TemperatureUnits.FAHRENHEIT:
        options.unit = TemperatureUnits.CELSIUS;
        options.value = options.convertToC();
        break;
      case LengthUnits.INCHES:
        options.unit = LengthUnits.MM;
        options.value = options.convertToMm();
        break;
      case SpeedUnits.MPH:
        options.unit = SpeedUnits.MS;
        options.value = options.convertToMS();
        break;
      default:
        "Value is already in US Units";
    }
  };

  const data = () => options.data;
  const add = (d) => options.data.push(d);

  return {
    getCurrentPlace,
    getCurrentType,
    getCurrentPeriod,
    setCurrentPlace,
    setCurrentType,
    setCurrentPeriod,
    clearCurrentPlace,
    clearCurrentType,
    clearCurrentPeriod,
    convertToUSUnits,
    convertToInternationalUnits,
    add,
    data,
    ...WeatherData(options),
  };
}
export default WeatherHistory;

const history = WeatherHistory(
  10,
  "temperature",
  "celsius",
  new Date("2000-1-1"),
  "Chisinau"
);

const history1 = WeatherHistory(
  10,
  "precipitation",
  "inches",
  new Date("2000-1-1"),
  "ThisPlace"
);
const history2 = WeatherHistory(
  10,
  "wind",
  "MS",
  new Date("2000-1-1"),
  "Brasov"
);

const d = WeatherHistory.data;
d.add(history);

history.convertToC();
console.log(history.getType());
console.log(history.getUnit());
console.log(history.getTime());

history.convertToF();
console.log(history.getTemperature());
console.log(history.getType());
console.log(history.getUnit());
console.log(history.getTime());
