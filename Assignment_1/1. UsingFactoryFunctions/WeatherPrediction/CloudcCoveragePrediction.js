import CloudCoverage from "../WeatherData/CloudCoverage";

function CloudCoveragePrediction(options) {
  const matches = () => {
    if (options.value == true) {
      console.log("Weather Data matches");
    } else console.log(" Weather Data does NOT match");
  };

  const coverage = () => options.value;

  return {matches, coverage}
}

export default CloudCoveragePrediction;
