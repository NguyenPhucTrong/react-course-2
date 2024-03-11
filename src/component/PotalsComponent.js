import ReactDOM from "react-dom";
function PotalsComponent() {
  return ReactDOM.createPortal(
    <h1>This is Potals Component</h1>,
    document.getElementById("root-portal")
  );
}

export default PotalsComponent;
