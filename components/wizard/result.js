import { Component, render } from "preact";

export default class Result extends Component {
  render() {
    const answers = this.props.answers;
    return (
      <div>
        <p>Congrtulations! You finished the wizard! You answered..</p>
        {answers.length > 0 ? (
          <ul>{answers.map(answer => <li>{answer.headline}</li>)}</ul>
        ) : null}
      </div>
    );
  }
}
