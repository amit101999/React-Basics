import React, { Component } from "react";

export class Cart extends Component {
  render() {
    return (
      <>
        <div>From Cart</div>
        <p>Name is :</p>
        <div>Name :{this.props.name}</div>
        <p>Age is :</p>
        <div>age :{this.props.age}</div>
      </>
    );
  }
}

export default Cart;
