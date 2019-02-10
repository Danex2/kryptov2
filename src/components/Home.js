import React, { Component } from "react";
import Links from "./Links";
import CoinContainer from "../containers/CoinContainer";

class Home extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="ui container grid">
          <Links />
          <CoinContainer />
        </div>
      </div>
    );
  }
}

export default Home;
