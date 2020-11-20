import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import * as actions from "../stores/WeatherDataListStore/index";
import ListData from "../components/list-data";

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherDataList.weatherData,
    loading: state.weatherDataList.loading,
    place: state.filter.place,
    startDate: state.filter.startDate,
    endDate: state.filter.endDate,
    dataType: state.filter.dataType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: (dataType) => dispatch(actions.fetchData(dataType)),
    onFetchDataForPlace: (place, dataType) =>
      dispatch(actions.fetchDatForPlace(place, dataType)),
    onPlaceChange: (place) => dispatch(actions.changePlace(place)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListData);
