import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    console.log("called constructor");
    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div> App is Crashed </div>
        </>
      );
    }
    return this.props.children; // if we didnt get error app will render
  }
  // error handeling
  static getDerivedStateFromError(error) {
    return { hasError: true }; // return error true and on the basis on this we can make error UI
  }
  componentDidCatch(error, info) {}
}
