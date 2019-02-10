import React from "react";
import { Link } from "react-router-dom";

function CoinComponent({ result }) {
  return (
    <div>
      {result.map(coin => {
        return (
          <div key={coin.id} className="sixteen wide column">
            <div className="ui centered card center">
              <div className="content">
                <div className="header center aligned">{coin.name}</div>
              </div>
              <div className="content">
                <h4 className="ui sub header center aligned">Current Price</h4>
                <p className="center aligned big-text">${coin.price_usd}</p>
              </div>
              <div className="extra content center aligned">
                <Link className="ui button" to={`/coin/${coin.id}`}>
                  More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CoinComponent;
