// import logo from "./logo.svg";
// import React from "react";
import "./App.css";
import DemoContext from "./DemoContext";
import Demo from "./component/Demo";
import ErrorBoundary from "./component/ErrorBoundaries";
// import Demo from "./component/Demo";
// import Component1 from "./component/component1";
// import RefsDemo from "./component/RefsDemo";
// import { useState, useEffect } from "react";

function App() {
  return (
    <DemoContext.Provider
      value={{ value: "This value is coming from demo context" }}
    >
      <div className="App">
        <ErrorBoundary>
          {/* <Demo /> */}
          <Demo name={"Hello Word"}> Hi everyone </Demo>
          {/* <Demo> Hi everyone </Demo> */}
        </ErrorBoundary>
      </div>
    </DemoContext.Provider>
  );
}

export default App;
// console.log("test");
// let [resourseType, setResourseType] = useState("Home");
// useEffect(() => {
//   console.log(resourseType);
// }, [resourseType]);
// (
//   <div className="App">
//     <button
//       onClick={() => {
//         setResourseType("Home");
//       }}
//     >
//       Home
//     </button>
//     <button
//       onClick={() => {
//         setResourseType("About");
//       }}
//     >
//       About
//     </button>
//     <button
//       onClick={() => {
//         setResourseType("Contact");
//       }}
//     >
//       Contact
//     </button>
//     <h3>{resourseType}</h3>
//   </div>
// );
