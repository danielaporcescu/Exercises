function Precipitation(precipitation, quantityInInches, quantityInMm) {
  const getPrecipitationType = (precipitation) => {
    if (precipitation == "rain") {
      precipitationType = "rain";
    } else if (precipitation == "snow") {
      precipitationType = "snow";
    } else precipitationType = "other";

    return precipitationType;
  };

  const convertToInches = (quantityInMm) => {
    inches = quantityInMm / 25.4;
    return inches;
  };

  const convertToMm = (quantityInInches) => {
    mMeters = quantityInInches * 25.4;
    return mMeters;
  };
  return { getPrecipitationType, convertToInches, convertToMm }
}
