function WindPrediction(options) {
  const directions = () => (options.value = []);
  const matches = () => {
    if (options.value == true) {
      console.log("Weather Data matches");
    } else console.log(" Weather Data does NOT match");
  };
  const convertToMPH = () => options.value * 2.2369;
  const convertToMS = () => options.value * 0.447;

  return {directions, matches, convertToMPH, convertToMS}
}

export default WindPrediction;
