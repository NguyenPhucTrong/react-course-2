import { Component } from "react";
class Demo extends Component {
  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <p>{this.props.children}</p>
      </>
    );
  }
}
export default Demo;
