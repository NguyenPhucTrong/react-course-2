import { useState, useCallback } from "react";
import Span from "../UI/Span/Span";
import Button from "../UI/Button/Button";

function Demo() {
  let [count, updateCount] = useState(0);
  let [active, setActive] = useState(false);

  let increaseHandler = useCallback(
    function () {
      if (active) updateCount(count + 1);
      console.log(count);
    },
    [active]
  );
  let decreaseHandler = useCallback(
    function () {
      if (active) updateCount(count - 1);
      console.log(count);
    },
    [active]
  );

  function activeHandler() {
    setActive(true);
  }

  return (
    <div style={{ top: "20px" }}>
      {/* <button style={{ margin: "10px" }} onClick={decreaseHandler}>
        -
      </button> */}
      <Button clickHandler={decreaseHandler}>-</Button>
      <Span>{count}</Span>
      {/* <button style={{ margin: "10px" }} onClick={increaseHandler}>
        +
      </button> */}
      <Button clickHandler={increaseHandler}>+</Button>
      <Button clickHandler={activeHandler}>active</Button>
    </div>
  );
}

export default Demo;
