import React from "react";
import DefaultProps from "./DefaultProps";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import "./App.css";
import DogList from "./DogList";
import Nav from "./Nav";
import DogDetails from "./DogDetails";
function App() {
  App.defaultProps = DefaultProps.dogs;
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={App.defaultProps} />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={App.defaultProps} />
          </Route>
          <Route exact path="/dogs/:name">
            <DogDetails dogs={App.defaultProps} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
