import React from "react";
import { Link } from "react-router-dom";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function CoinDetailsComponent({ coin }) {
  return (
    <React.Fragment>
      {coin.map(coin => {
        return (
          <div key={coin.id} className="sixteen wide column">
            <div className="ui center aligned segment ">
              <div className="center aligned big-text">{coin.name}</div>
              <div class="ui divider" />

              <p className="big-text">Current Price: ${coin.price_usd} USD</p>
              <p className="big-text">Short Name: {coin.symbol}</p>
              <p
                className={
                  coin.percent_change_24h > 0
                    ? "positive big-text"
                    : "negative big-text"
                }
              >
                Change (24H): %{coin.percent_change_24h}
              </p>
              <p
                className={
                  coin.percent_change_1h > 0
                    ? "positive big-text"
                    : "negative big-text"
                }
              >
                Change (1H): %{coin.percent_change_1h}
              </p>
              <p
                className={
                  coin.percent_change_7d > 0
                    ? "positive big-text"
                    : "negative big-text"
                }
              >
                Change (7D): %{coin.percent_change_7d}
              </p>
              <p className="big-text">
                Market Cap: ${numberWithCommas(coin.market_cap_usd)}
              </p>
              <p className="big-text">
                Supply: {numberWithCommas(coin.csupply)}
              </p>
            </div>
            <div className="extra content center aligned">
              <Link className="ui button" to="/">
                Back
              </Link>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default CoinDetailsComponent;
