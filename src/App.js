import React, { Component } from "react";
import "./css/app.scss";
import Home from "./components/Home";
import CoinDetailsContainer from "./containers/CoinDetailsContainer";
import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/coin/:id" component={CoinDetailsContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
