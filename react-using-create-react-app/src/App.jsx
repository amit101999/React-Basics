import React from "react";
import MovieCart from "./MovieCart";
import Cart from "./Cart";
import UsingStyledComponents from "./UsingStyledComponents";
import UsingModuleStyles from "./UsingModuleStyles";

const App = () => {
  return (
    <div>
      <MovieCart />
      <Cart name="Amit" />
      <Cart name="Atul" />
      <UsingStyledComponents />
      <UsingModuleStyles />
    </div>
  );
};

// way to pass default prop in class component
Cart.defaultProps = {
  name: "abc",
  age: "23",
};

export default App;
