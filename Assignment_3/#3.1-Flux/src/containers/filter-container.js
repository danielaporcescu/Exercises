import { connect } from "react-redux";
import FiltersComponent from "../components/filters";
import * as filterActions from "../stores/FilterStore/action-creators";

const mapStateToProps = (state) => {
  return {
    place: state.filter.place,
    startDate: state.filter.startDate,
    endDate: state.filter.endDate,
    dataType: state.filter.dataType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePlace: (place) => dispatch(filterActions.changePlace(place)),
    onChangeStartDate: (startDate) =>
      dispatch(filterActions.changeStartDate(startDate)),
    onChangeEndDate: (endDate) =>
      dispatch(filterActions.changeEndDate(endDate)),
    onDataTypeChange: (dataType) =>
      dispatch(filterActions.changeDataType(dataType)),
  };
};

const Filters = connect(mapStateToProps, mapDispatchToProps)(FiltersComponent);

export default Filters;
