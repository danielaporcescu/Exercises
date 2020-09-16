function TemperaturePrediction(options) {
 
    // const convertToF = () => options.temperatureC * 1.8 + 32;
    // const convertToC = () => (options.temperatureF - 32) / 1.8;
  
    const getTemperatureF = () => options.value;
    const getTemperatureC = () => options.value;
    const convertToF = () => options.value * 1.8 + 32;
    const convertToC = () => (options.value - 32) / 1.8;
  
    
    return { convertToF, convertToC, getTemperatureF, getTemperatureC };
  }
  
  export default TemperaturePrediction;