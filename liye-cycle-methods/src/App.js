import React, { Component } from "react";
import Timer from "./timer/Timer";
import ErrorBoundary from "./ErrorBoundary";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "amit",
      data: [],

      // for timer component
      mount: true,
    };
  }

  // called every time when component is updated before render
  static getDerivedStateFromProps() {
    console.log("called after constructor");
    return null;
  }

  // componentDidMount is used for updating the state and called only once
  componentDidMount() {
    console.log("called after render() that is component is mounted");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }

  //toggle mount
  handleMount = () => {
    this.setState((prev) => ({ mount: !prev.mount }));
  };

  render() {
    console.log(" data : ", this.state.data);
    return (
      <>
        From App
        {/* we can give separate error boundaries for each component wos 
        the whole app will not crashed will that component will show the UI we have set in EB */}
        <ErrorBoundary>
          <button onClick={this.handleMount}>
            {" "}
            {this.state.mount ? "UnMount" : "Mount"}{" "}
          </button>
          {this.state.mount ? <Timer /> : null}
        </ErrorBoundary>
      </>
    );
  }
}
