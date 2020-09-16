import WeatherData from "./WeatherData.js";

function WeatherHistory(value, type, unit, time, place) {
  const options = { value, type, unit, time, place };
  return { ...WeatherData(options) };
}
export default WeatherHistory;

const history = WeatherHistory(
  10,
  "temperature",
  "celsius",
  new Date("2000-1-1"),
  "Chisinau"
);

history.convertToC();
console.log(history.getType());
console.log(history.getUnit());
console.log(history.getTime());

history.convertToF();
console.log(history.getTemperature());
console.log(history.getType());
console.log(history.getUnit());
console.log(history.getTime());

