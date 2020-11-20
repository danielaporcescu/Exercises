import * as actionTypes from "./action-types";
export const changePlace = (place) => {
  return {
    type: actionTypes.CHANGE_PLACE,
    place: place,
  };
};
export const changeStartDate = (startDate) => {
  return {
    type: actionTypes.CHANGE_START_DATE,
    startDate: startDate,
  };
};
export const changeEndDate = (endDate) => {
  return {
    type: actionTypes.CHANGE_END_DATE,
    endDate: endDate,
  };
};
export const changeDataType = (dataType) => {
  return {
    type: actionTypes.CHANGE_DATA_TYPE,
    dataType: dataType,
  };
};
