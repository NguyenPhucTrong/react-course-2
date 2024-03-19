import { useState, useCallback, useMemo } from "react";
import Span from "../UI/Span/Span";
import Button from "../UI/Button/Button";

function Demo() {
  let [count, updateCount] = useState(0);
  let [active, setActive] = useState(false);

  let increaseHandler = useCallback(
    function () {
      if (active)
        updateCount((count) => {
          return count + 1;
        });
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
    updateCount(0);
  }

  let list = useMemo(() => {
    return [10, 20];
  }, []);

  return (
    <div style={{ top: "20px" }}>
      {/* <button style={{ margin: "10px" }} onClick={decreaseHandler}>
        -
      </button> */}
      <Button clickHandler={decreaseHandler}>-</Button>
      <Span>{list}</Span>
      {/* <button style={{ margin: "10px" }} onClick={increaseHandler}>
        +
      </button> */}
      <Button clickHandler={increaseHandler}>+</Button>
      <Button clickHandler={activeHandler}>active</Button>
    </div>
  );
}

export default Demo;
