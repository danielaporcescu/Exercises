function Wind(options) {
  const windDirection = () => options.direction;
  const convertToMPH = () => options.mph * 2.2369;
  const convertToMS = () => options.ms * 0.447;

  return { windDirection, convertToMPH, convertToMS };
}

export default Wind;
