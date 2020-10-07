import { styledLog } from "./colored-logs.helper.js";
import { Colors } from "../src/enums.js";

export const printData = (dataArrray) => {
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
