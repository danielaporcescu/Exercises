import { connect } from "react-redux";
import CreateHisotricalData from "../components/create-historical-data";
import * as actions from "../stores/CreateHistoricalDataStore/index";
const mapStateToProps = (state) => {
  return {
    form: state.createHistoricalData.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (form) => dispatch(actions.createHistoricalData(form)),
    onChangeType: (type) => dispatch(actions.changeFormType(type)),
    onChangePlace: (place) => dispatch(actions.changeFormPlace(place)),
    onChangeValue: (value) => dispatch(actions.changeFormValue(value)),
    onChangeTime: (time) => dispatch(actions.changeFormTime(time)),
    onChangePrecipitationType: (precipitation_type) =>
      dispatch(actions.changeFormPrecipitationType(precipitation_type)),
    onChangeWindDirecton: (wind_direction) =>
      dispatch(actions.changeFormWindDirection(wind_direction)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateHisotricalData);
