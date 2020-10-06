import CWeatherPrediction from "./weather-prediction.js";
import { WeatherDataTypes } from "./enums.js";


class CCloudCoveragePrediction extends  CWeatherPrediction {
    constructor(unit, time, place, from, to) {
        super(WeatherDataTypes.CLOUDCOVERAGE, unit, time, place, from, to);
    }
}

export default CCloudCoveragePrediction;