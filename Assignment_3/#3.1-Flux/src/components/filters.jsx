import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import {
  Select,
  Grid,
  InputLabel,
  Box,
  Switch,
  Typography,
} from "@material-ui/core";
import DateRangePicker from "../components/date-range-picker";

const FiltersComponent = (props) => {
  let handleDataTypeSwitchChange = () => {
    if (props.dataType === "Forecast") props.onDataTypeChange("History");
    else props.onDataTypeChange("Forecast");
  };
  return (
    <Box padding={5} margin={5} bgcolor="white" borderRadius={15} boxShadow={5}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={1}>
          <h1>{props.dataType}</h1>
        </Grid>
        <Grid item>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>History</Grid>
              <Grid item>
                <Switch
                  checked={props.dataType === "Forecast"}
                  onClick={handleDataTypeSwitchChange}
                  name="checkedC"
                />
              </Grid>
              <Grid item>Forecast</Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justify="space-between" spacing={1}>
            <Grid item>
              <InputLabel>Place</InputLabel>
              <Select
                label="Place"
                native
                value={props.place}
                onChange={(event) => {
                  props.onChangePlace(event.target.value);
                }}
              >
                <option value="None">None</option>
                <option value="Aarhus">Aarhus</option>
                <option value="Copenhagen">Copenhagen</option>
                <option value="Horsens">Horsens</option>
              </Select>
            </Grid>
            <DateRangePicker
              startDate={props.startDate}
              endDate={props.endDate}
              setStartDate={props.onChangeStartDate}
              setEndDate={props.onChangeEndDate}
              // data
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FiltersComponent;
