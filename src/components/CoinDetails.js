import React from "react";
import { Link } from "react-router-dom";

class CoinDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: []
    };
  }
  componentDidMount() {
    fetch(
      `https://api.coinlore.com/api/ticker/?id=${this.props.match.params.id}`
    ).then(res => res.json().then(data => this.setState({ coin: data })));
  }
  render() {
    const { coin } = this.state;
    return (
      <div className="page-container">
        <div className="ui container grid">
          {coin.map(coin => {
            return (
              <div key={coin.id} className="sixteen wide column">
                <div className="ui center aligned segment ">
                  <div className="center aligned big-text">{coin.name}</div>
                  <div class="ui divider" />

                  <p className="big-text">
                    Current Price: ${coin.price_usd} USD
                  </p>
                  <p className="big-text">Short Name: {coin.symbol}</p>
                  <p className="big-text">
                    Change (24H): {coin.percent_change_24h}
                  </p>
                  <p className="big-text">
                    Change (1H): {coin.percent_change_1h}
                  </p>
                  <p className="big-text">
                    Change (7D): {coin.percent_change_7d}
                  </p>
                  <p className="big-text">Market Cap: {coin.market_cap_usd}</p>
                  <p className="big-text">Supply: {coin.csupply}</p>
                </div>
                <div className="extra content center aligned">
                  <Link className="ui button" to="/">
                    Back
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CoinDetails;
