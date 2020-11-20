import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { Box, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Filters from "../containers/filter-container";

function ListData(props) {
  const [dispalyedData, setDisplayedData] = useState(props.weatherData || []);
  const [columns, setColumns] = useState([]);

  const [refresh, setRefresh] = useState(false);

  const valueCol = { field: "value", headerName: "Value", width: 130 };
  const fromCol = { field: "from", headerName: "Minimum value", width: 140 };
  const toCol = { field: "to", headerName: "Maximium value", width: 140 };

  const arrayValueGetter = (params) => {
    let paramArray1 = params.getValue("precipitation_types");
    let paramArray2 = params.getValue("directions");
  };

  const commonColumns = [
    { field: "type", headerName: "Type", width: 130 },
    { field: "unit", headerName: "Unit", width: 130 },
    { field: "time", headerName: "Time", width: 200 },
    { field: "place", headerName: "Place", width: 130 },
    {
      field: "extraDetails",
      headerName: "Extra details",
      width: 130,
      // valueGetter: (params) =>
      //   props.dataType === "History"
      //     ? `${
      //         params.getValue("precipitation_type") ||
      //         params.getValue("direction") ||
      //         ""
      //       }`
      //     : arrayValueGetter(params),
      valueGetter: (params) =>
        `${
          params.getValue("precipitation_type") ||
          params.getValue("direction") ||
          ""
        }`,
    },
  ];

  const columnsChange = () => {
    let toReturn = commonColumns;
    if (props.dataType === "History") toReturn.push(valueCol);
    else toReturn.push(fromCol, toCol);
    return toReturn;
  };

  const filterDataOnDate = (data) => {
    let i = 0;
    let toReturn = data;

    if (data.length > 0) {
      if (props.startDate !== null) {
        toReturn = toReturn?.filter(
          (x) => new Date(x.time) >= new Date(props.startDate)
        );
      }
      if (props.endDate !== null) {
        toReturn = toReturn?.filter(
          (x) => new Date(x.time) <= new Date(props.endDate)
        );
      }
    }
    toReturn = toReturn.map((x) => {
      return { id: i++, ...x, time: new Date(x.time).toLocaleString() };
    });
    return toReturn;
  };

  useEffect(() => {
    props.place === "None"
      ? props.onFetchData(props.dataType)
      : props.onFetchDataForPlace(props.place, props.dataType);
    setColumns(columnsChange());
  }, [props.place, props.dataType, refresh]);

  useEffect(() => {
    setDisplayedData(filterDataOnDate(props.weatherData));
    setColumns(columnsChange());
  }, [props.weatherData, props.startDate, props.endDate, props.dataType]);

  return (
    <>
      <Filters />
      <Box
        padding={5}
        margin={5}
        bgcolor="white"
        borderRadius={15}
        boxShadow={5}
      >
        <div
          style={{
            height: 540,
            width: "100%",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Button onClick={() => setRefresh(!refresh)}>Refresh</Button>
          <DataGrid pageSize={8} columns={columns} rows={dispalyedData || []} />
        </div>
      </Box>
    </>
  );
}

export default ListData;
