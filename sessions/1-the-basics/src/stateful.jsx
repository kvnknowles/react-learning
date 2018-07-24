import React, { Component } from 'react';

export default class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: new Date().toISOString() };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date().toISOString() });
    }, 1000);
  }

  // TODO: Understand why this should be done?
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <span>{this.state.currentTime}</span>
      </div>
    );
  }
}
