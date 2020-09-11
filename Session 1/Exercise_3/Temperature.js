function Temperature(tempCelsius, tempFar) {
  const getTempCelsius = () => tempCelsius;
  const getTempFar = () => tempFar;

  const convertToF = (tempCelsius) => {
    tempF = tempCelsius * 1.8 + 32;
    return tempF;
  };
  const convertToC = (tempFar) => {
    tempC = (tempFar - 32) / 1.8;
    return tempC;
  };

  return { getTempCelsius, getTempFar, convertToC, convertToF };
}

export default Temperature;
