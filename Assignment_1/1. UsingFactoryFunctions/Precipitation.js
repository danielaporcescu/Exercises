function Precipitation(options) {
  const precipitationType = () => options.type;
  const convertToInches = () => options.inches / 25.4;
  const convertToMm = () => options.miliMeters * 25.4;

  return { precipitationType, convertToInches, convertToMm };
}

export default Precipitation;

