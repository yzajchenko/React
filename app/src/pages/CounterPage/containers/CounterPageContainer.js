import { Component } from "react";

import CounterPageLayout from "../components/CounterPageLayout";

class CounterPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      parityType: "even"
    };
  }

  setTypeParity = () => {
    if (this.state.countValue % 2 === 0) {
      this.setState({
        parityType: "even"
      });
    } else {
      this.setState({
        parityType: "odd"
      });
    }
  };

  handleDecrement = () => {
    const { countValue } = this.state;
    if (countValue > 0) {
      this.setState({ ...this.state, countValue: countValue - 1 }, () => {
        this.setTypeParity();
      });
    }
  };

  handleIncrement = () => {
    const { countValue } = this.state;
    this.setState({ ...this.state, countValue: countValue + 1 }, () => {
      this.setTypeParity();
    });
  };

  handleReset = () => {
    this.setState({ ...this.state, countValue: 0 }, () => {
      this.setTypeParity();
    });
  };

  render() {
    return (
      <CounterPageLayout
        countValue={this.state.countValue}
        parityType={this.state.parityType}
        handleDecrement={this.handleDecrement}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
      />
    );
  }
}

export default CounterPageContainer;
