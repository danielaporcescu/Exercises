import React from "react";
import {
  Select,
  Grid,
  InputLabel,
  Box,
  Switch,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
const CreateHisotricalData = (props) => {
  return (
    <>
      <Box
        padding={5}
        margin={5}
        bgcolor="white"
        borderRadius={15}
        boxShadow={5}
      >
        <h1>Create historical data</h1>
      </Box>
      <Box
        padding={5}
        margin={5}
        bgcolor="white"
        borderRadius={15}
        boxShadow={5}
      >
        <Box flexDirection="row">
          <Select
            label="Type"
            native
            value={props.historyDataType}
            onChange={(event) => {
              props.onChangeType(event.target.value);
            }}
          >
            <option value="Temperature">Temperature</option>
            <option value="Precipitation">Precipitation</option>
            <option value="WindSpeed">Wind Speed</option>
            <option value="CloudCoverage">Cloud Coverage</option>
          </Select>
          {props.form.dataType === "Precipitation" && (
            <Select
              label="unit"
              native
              value={props.precipitation_type}
              onChange={(event) =>
                props.onChangePrecipitationType(event.target.value)
              }
            >
              <option value="null">Not selected</option>
              <option value="rain">Rain</option>
              <option value="sleet">Sleet</option>
              <option value="hail">Hail</option>
              <option value="snow">Snow</option>
            </Select>
          )}
          {props.form.dataType === "WindSpeed" && (
            <Select
              label="unit"
              native
              value={props.wind_direction}
              onChange={(event) =>
                props.onChangeWindDirecton(event.target.value)
              }
            >
              <option value="null">Not selected</option>
              <option value="North">North</option>
              <option value="Northeast">Northeast</option>
              <option value="East">East</option>
              <option value="Southeast">Southeast</option>
              <option value="South">South</option>
              <option value="Southwest">Southwest</option>
              <option value="West">West</option>
              <option value="Northwest">Northwest</option>
            </Select>
          )}
        </Box>

        <Box flexDirection="row">
          <Select
            label="Place"
            native
            value={props.form.place}
            onChange={(event) => {
              props.onChangePlace(event.target.value);
            }}
          >
            <option value="None">None</option>
            <option value="Aarhus">Aarhus</option>
            <option value="Copenhagen">Copenhagen</option>
            <option value="Horsens">Horsens</option>
          </Select>
        </Box>
        <Box flexDirection="row">
          <TextField
            type="number"
            value={props.value}
            onChange={(event) => props.onChangeValue(event.target.value)}
            // placeholder="Value"
            label="Value"
          />
        </Box>

        <Box flexDirection="row">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
              ampm={false}
              disableFuture
              value={props.form.time}
              onChange={props.onChangeTime}
              label="Time"
            />
          </MuiPickersUtilsProvider>
        </Box>

        <Button onClick={() => props.onCreate(props.form)}>Create</Button>
      </Box>
    </>
  );
};

export default CreateHisotricalData;
