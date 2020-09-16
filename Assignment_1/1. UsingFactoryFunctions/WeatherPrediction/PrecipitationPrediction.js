import Precipitation from "../WeatherData/Precipitation";

function PrecipitationPrediction(options) {
  const types = () => (options.value = []);
  const matches = () => {
    if (options.value == true) {
      console.log("Weather Data matches");
    } else console.log(" Weather Data does NOT match");
  };
  const convertToInches = () => options.value / 25.4;
  const convertToMm = () => options.value * 25.4;

  return {types, matches, convertToInches, convertToMm}
}

export default PrecipitationPrediction;
