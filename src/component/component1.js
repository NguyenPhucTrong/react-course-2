import React from "react";
import Component2 from "./component2";

function Component1() {
  return (
    <React.Fragment>
      <h2>This is my component1</h2>
      <Component2 />
    </React.Fragment>
  );
}

export default Component1;
