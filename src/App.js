// import logo from "./logo.svg";
import React from "react";
import "./App.css";
// import Component1 from "./component/component1";
// import RefsDemo from "./component/RefsDemo";
import { useState, useEffect } from "react";

function App() {
  console.log("test");
  let [resourseType, setResourseType] = useState("Home");
  useEffect(() => {
    console.log(resourseType);
  }, [resourseType]);
  return (
    <div className="App">
      <button
        onClick={() => {
          setResourseType("Home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          setResourseType("About");
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          setResourseType("Contact");
        }}
      >
        Contact
      </button>
      <h3>{resourseType}</h3>
    </div>
  );
}

export default App;
