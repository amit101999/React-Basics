import React, { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    console.log("called constructor");
    this.state = {
      count: 0,
      hasError: false,
    };
    this.timer = null;
  }

  static getDerivedStateFromProps() {
    console.log("called after constructor");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("called after getDerivedStateFromProps");
    return true;
  }

  render() {
    return (
      <div>
        count Begins :
        {new Date(this.state.count * 1000).toISOString().slice(11, 19)}
      </div>
    );
  }
  // componentDidMount is used for updating the state and called only once
  componentDidMount() {
    console.log("called after render() that is component is mounted");
    this.timer = setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }, 1000);
  }

  // called every time when component is updated
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("called before updating ");
    return null;
  }
  // called every time when component is updated
  componentDidUpdate(prevProp, prevState, snapShot) {
    console.log("called every time component update");
    if (this.state.count == 10) {
      clearInterval(this.timer);
    }
  }
  componentWillUnmount() {
    console.log("last call before unmounting");
    clearInterval(this.timer); // we can clear all the timer , network call subscription here
  }
}
