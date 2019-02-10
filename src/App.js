import React, { Component } from "react";
import "./css/app.scss";
import Home from "./components/Home";
import CoinDetails from "./components/CoinDetails";
import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/coin/:id" component={CoinDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
