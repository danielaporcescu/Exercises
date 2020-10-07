import { WeatherDataTypes, Colors } from "./enums.js";
import { styledLog } from "../../helpers/colored-logs.helper.js";

const WeatherHistory = (data) => {
  const forPlace = (place) => data.filter((x) => x.getPlace() == place);

  const forType = (type) => data.filter((x) => x.getType() == type);

  const forPeriod = (startDate, endDate) =>
    data.filter((x) => x.getTime() >= startDate && x.getTime() <= endDate);

  const convertToUsUnits = () => {
    styledLog(Colors.YELLOW, "\nConverting to US units");
    data.map((x) => {
      switch (x.getType()) {
        case WeatherDataTypes.TEMPERATURE:
          x.convertToF();
          break;
        case WeatherDataTypes.CLOUDCOVERAGE:
          break;
        case WeatherDataTypes.WIND:
          x.convertToMPH();
          break;
        case WeatherDataTypes.PRECIPITATION:
          x.convertToInches();
          break;
      }
    });
    styledLog(Colors.YELLOW, "Converted to US units");
  };

  const convertToInternationalUnits = () => {
    styledLog(Colors.YELLOW, "\nConverting to INTERNATIONAL units");
    data.map((x) => {
      switch (x.getType()) {
        case WeatherDataTypes.TEMPERATURE:
          x.convertToC();
          break;
        case WeatherDataTypes.CLOUDCOVERAGE:
          break;
        case WeatherDataTypes.WIND:
          x.convertToMS();
          break;
        case WeatherDataTypes.PRECIPITATION:
          x.convertToMM();
          break;
      }
    });
    styledLog(Colors.YELLOW, "Converted to INTERNATIONAL units");
  };

  const getData = () => data;

  const including = () => data;

  const reducer = (lowest, currentValue) => Math.min(lowest, currentValue);

  const lowestValue = () => {
    let cloudValues = data
      .filter((x) => x.getType() === WeatherDataTypes.CLOUDCOVERAGE)
      .map((y) => y.getValue());
    let temperatureValues = data
      .filter((x) => x.getType() === WeatherDataTypes.TEMPERATURE)
      .map((y) => y.getValue());
    let precipitationValues = data
      .filter((x) => x.getType() === WeatherDataTypes.PRECIPITATION)
      .map((y) => y.getValue());
    let windValues = data
      .filter((x) => x.getType() === WeatherDataTypes.WIND)
      .map((y) => y.getValue());

    let lowestCloudValue = cloudValues.length ===0 ? undefined : cloudValues.reduce(reducer);
    let lowestTemperatureValue =temperatureValues.length ===0 ? undefined : temperatureValues.reduce(reducer);
    let lowestWindValue = windValues.length === 0 ? undefined :  windValues.reduce(reducer);
    let lowestPrecipitationValue =precipitationValues.length ===0 ? undefined : precipitationValues.reduce(reducer);

    return {lowestCloudValue, lowestPrecipitationValue, lowestTemperatureValue, lowestWindValue}
  };

  const printData = (dataArrray) => {
    let historyTitle = "\nWeather history:";
    styledLog(Colors.CYAN, historyTitle);

    dataArrray.map((x) => {
      styledLog(
        Colors.GREEN,
        x.getPlace() +
          " | " +
          x.getType() +
          " | " +
          x.getValue() +
          " | " +
          x.getUnit() +
          " | " +
          x.getTime()
      );
    });
  };

  return {
    printData,
    getData,
    forPlace,
    forType,
    forPeriod,
    including,
    lowestValue,
    convertToInternationalUnits,
    convertToUsUnits,
  };
};

export default WeatherHistory;
