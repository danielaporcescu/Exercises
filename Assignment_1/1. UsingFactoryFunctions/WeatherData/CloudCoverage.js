import WeatherData from "../WeatherData.js";


function CloudCoverage(options) {
  const setCloudCoverage = (newCoverage) => (options.coverage = newCoverage);
  const getCloudCoverage = () => options.coverage;
  
  return { 
    setCloudCoverage, 
    getCloudCoverage,
    ...WeatherData(options)
  };
}

export default CloudCoverage;
