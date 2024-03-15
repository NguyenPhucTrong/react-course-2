import { useState } from "react";
import Span from "../UI/Span/Span";

function Demo() {
  let [count, updateCount] = useState(0);

  function increaseHandler() {
    updateCount(count + 1);
    console.log(count);
  }

  function decreaseHandler() {
    updateCount(count - 1);
    console.log(count);
  }

  return (
    <div style={{ top: "20px" }}>
      <button style={{ margin: "10px" }} onClick={decreaseHandler}>
        -
      </button>
      <Span>{count}</Span>
      <button style={{ margin: "10px" }} onClick={increaseHandler}>
        +
      </button>
    </div>
  );
}

export default Demo;
