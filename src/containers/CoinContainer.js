import React, { Component } from "react";
import CoinComponent from "../components/CoinComponent";

class CoinContainer extends Component {
  state = {
    search: "",
    data: [],
    result: []
  };
  componentDidMount() {
    fetch("https://api.coinlore.com/api/tickers/").then(res =>
      res.json().then(coin => this.setState({ data: coin.data }))
    );
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const result = this.state.data.filter(
      coin => coin.name.toLowerCase() === this.state.search.toLowerCase()
    );
    this.setState({ result });
  };
  render() {
    const { result } = this.state;
    return (
      <div className="sixteen wide column">
        <form onSubmit={this.onSubmit} className="ui big form">
          <div className="inline fields">
            <div className="sixteen wide field">
              <input
                type="text"
                name="search"
                placeholder="Search for coin..."
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="field">
              <button className="ui big button" type="Submit">
                Search
              </button>
            </div>
          </div>
        </form>
        <CoinComponent result={result} />
      </div>
    );
  }
}

export default CoinContainer;
