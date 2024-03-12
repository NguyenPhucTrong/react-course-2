import { useRef } from "react";

function RefsDemo() {
  let nameInputRef = useRef("hello");
  console.log(nameInputRef);

  function showNameEvenHandler() {
    console.log(nameInputRef.current);
  }
  return (
    <>
      <span>Name:</span>
      <input type="text" ref={nameInputRef} />
      <button onClick={showNameEvenHandler}>Show Name</button>
    </>
  );
}

export default RefsDemo;
