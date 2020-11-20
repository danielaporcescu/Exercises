import {
  getDataForLastNDaysForType,
  lowestTemperatureValue,
  highestTemperatureValue,
  dominantWindDirection,
  averageCloudCoverage,
  averageWindSpeed,
  totalPrecipitation,
} from "./functions.js";

export const minTemp = (data) =>
  lowestTemperatureValue(getDataForLastNDaysForType(data, 5, "temperature"));

export const maxTemp = (data) =>
  highestTemperatureValue(getDataForLastNDaysForType(data, 5, "temperature"));

export const totalPre = (data) =>
  totalPrecipitation(
    getDataForLastNDaysForType(data, 5, "precipitation")
  ).toFixed(2);

export const averageSpeed = (data) =>
  averageWindSpeed(getDataForLastNDaysForType(data, 5, "wind speed")).toFixed(
    2
  );

export const direction = (data) =>
  dominantWindDirection(getDataForLastNDaysForType(data, 5, "wind speed"));

export const clouds = (data) =>
  averageCloudCoverage(
    getDataForLastNDaysForType(data, 5, "cloud coverage")
  ).toFixed(2);
