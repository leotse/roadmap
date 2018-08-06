import { Component } from "preact";
import Step from "./step";
import Result from "./result";

export default class Wizard extends Component {
  constructor() {
    super();
    this.state = { step: 0, answers: [] };
    this.onAnswered = this.onAnswered.bind(this);
  }

  componentWillUpdate(props, state) {
    const questions = props.questions;
    const questionKeys = Object.keys(questions);
    const numQuestions = questionKeys.length;
    if (numQuestions > 0) {
      const key = questionKeys[state.step];
      const question = questions[key];
      this.question = question;
    }
  }

  onAnswered(answer) {
    const answers = this.state.answers;
    this.setState({
      answers: [...answers, answer]
    });
    this.next();
  }

  next() {
    const step = this.state.step;
    if (step < this.props.steps) {
      this.setState({
        step: step + 1
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Wizard Component</h1>
        {this.question ? (
          <Step question={this.question} onSelect={this.onAnswered} />
        ) : null}
        {this.state.step >= this.props.steps ? (
          <Result answers={this.state.answers} />
        ) : null}
      </div>
    );
  }
}
