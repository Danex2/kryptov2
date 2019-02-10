import React from "react";
import CoinDetailsComponent from "../components/CoinDetailsComponent";

class CoinDetailsContainer extends React.Component {
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
          <CoinDetailsComponent coin={coin} />
        </div>
      </div>
    );
  }
}

export default CoinDetailsContainer;
