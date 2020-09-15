function Temperature(options) {
  // const getTemperatureF = () => options.temperatureF;
  // const getTemperatureC = () => options.temperatureC;
  // const convertToF = () => options.temperatureC * 1.8 + 32;
  // const convertToC = () => (options.temperatureF - 32) / 1.8;

  const convertToF = () => options.value * 1.8 + 32;
  const convertToC = () => (options.value - 32) / 1.8;

  return { convertToF, convertToC };
}

export default Temperature;

// const f=Temperature({temperatureF: 50, temperatureC: 10})

// console.log(f.getTemperatureC(), " ", f.getTemperatureF(), " ", f.convertToC(), " ",f.convertToF());
// f.getTemperatureF();
// f.convertToC(f.getTemperatureF());
// f.convertToF(f.getTemperatureC());
