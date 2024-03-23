import { Component } from "react";
import Paragraph from "./Paragraph";
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

  componentDidUpdate(prevProps, prevState) {
    // try {
    throw new Error("An error has occured");
    // } catch (error) {
    //   alert(error.message);
    // }
  }

  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        {this.state.showParagraph && <Paragraph></Paragraph>}
        <button onClick={this.toggaleParagraph.bind(this)}>Show</button>
      </>
    );
  }
}
export default Demo;
