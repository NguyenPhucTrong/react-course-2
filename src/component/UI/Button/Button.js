import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className="counterBtn" onClick={props.clickHandler}>
      {props.children}
    </button>
  );
}

export default React.memo(Button);
