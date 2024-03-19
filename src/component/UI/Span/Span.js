import React from "react";

function Span(props) {
  return <span>{props.children[0]}</span>;
}

export default React.memo(Span);
