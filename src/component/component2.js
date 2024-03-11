import React, { useState } from "react";
// import PotalsComponent from "./PotalsComponent";
import Modal from "./Modal";
// import { useState } from "react";

function Component2() {
  let [showModal, updateShowModal] = useState(false);
  // let [hideModal, updateHideModal] = useState(false);

  function displayModel() {
    updateShowModal(true);
  }

  function hideModal() {
    updateShowModal(false);
  }

  return (
    <div style={{ width: 300, position: "relative" }}>
      <h3>This is my component2</h3>;{/* <PotalsComponent /> */}
      <button onClick={displayModel}>showModal</button>
      <Modal showModal={showModal} hideModal={hideModal} />
    </div>
  );
}

export default Component2;
