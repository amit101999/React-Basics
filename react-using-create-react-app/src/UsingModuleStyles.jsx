import React from "react";
// another way to use css
import cssStyles from "./index.module.css";

const UsingModuleStyles = () => {
  return (
    <div>
      <div className={cssStyles.cont}>From new cart using styled component</div>
      {/* passing the color prop to Myp */}
      <p className={cssStyles.text}>Name is : Amit </p>
      <p>Age is :23</p>
    </div>
  );
};

export default UsingModuleStyles;
