import WeatherData from "../WeatherData.js";

function CloudCoverage(options) {
  const setCloudCoverage = (newValue) => (options.value = newValue);
  const getCloudCoverage = () => options.value;

  return {
    setCloudCoverage,
    getCloudCoverage
  };
}

export default CloudCoverage;
