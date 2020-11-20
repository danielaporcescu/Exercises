import React from "react";
import ListData from "./containers/list-data-container";
import sunImage from "./sun.png";
import "./App.css";
import { AppBar, Container, Box, Grid } from "@material-ui/core";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Filters from "./containers/filter-container";
import CreateHisotricalData from "./containers/create-historical-data-container";

function App() {
  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          justifyContent: "center",
          backgroundColor: "#87ceeb",
        }}
      >
        <Container>
          <Grid container spacing={0} alignContent="center">
            <Grid item xs={1}>
              <img
                src={sunImage}
                style={{ height: 50 + "px", width: 20 + "50" }}
              />
            </Grid>
            <Grid item xs={10}>
              <h2>Weather data</h2>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <Container>
        <Box paddingY={12}>
          <Router>
            <Switch>
              <Route exact path="/data">
                <ListData />
              </Route>
              <Route exact path="/create">
                <CreateHisotricalData />
              </Route>
              <Route exact path="/">
                <Redirect to="/data" />
              </Route>
              <Route>
                <h1>Not found</h1>
                <a href="/">Go home</a>
              </Route>
            </Switch>
          </Router>
        </Box>
      </Container>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <script src="index.js"></script>
    </div>
  );
}

export default App;
