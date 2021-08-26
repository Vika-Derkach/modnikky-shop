import React, { Component } from "react";
import ErrorIndicator from "../error-indicator/error-indicator";

type MyState = {
  hasError: boolean; // like this
};
export default class ErrorBoundry extends Component {
  state: MyState = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
