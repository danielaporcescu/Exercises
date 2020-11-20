import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { InputLabel, Grid } from "@material-ui/core";

const DateRangePicker = (props) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid item>
        <InputLabel>Start date</InputLabel>
        <DatePicker
          autoOk
          clearable
          value={props.startDate}
          onChange={props.setStartDate}
          maxDate={props.endDate}
        />
      </Grid>
      <Grid item>
        <InputLabel>End date</InputLabel>
        <DatePicker
          autoOk
          clearable
          value={props.endDate}
          onChange={props.setEndDate}
          minDate={props.startDate}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DateRangePicker;
