import { Component } from "react";
class Demo extends Component {
  constructor() {
    super();
    this.state = { showParagraph: true, count: 0 };
  }

  toggaleParagraph() {
    // this.state.showParagraph = false;
    console.log(this);
    this.setState((currentStale) => {
      return { showParagraph: !currentStale.showParagraph };
    });
  }

  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        {this.state.showParagraph && <p>{this.props.children}</p>}
        <button onClick={this.toggaleParagraph.bind(this)}>Show</button>
      </>
    );
  }
}
export default Demo;
