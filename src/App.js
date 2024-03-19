// import logo from "./logo.svg";
// import React from "react";
import "./App.css";
import Demo from "./component/Demo";
// import Demo from "./component/Demo";
// import Component1 from "./component/component1";
// import RefsDemo from "./component/RefsDemo";
// import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      {/* <Demo /> */}
      <Demo name={"Hello Word"}> Hi everyone </Demo>
      {/* <Demo> Hi everyone </Demo> */}
    </div>
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
