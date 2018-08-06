import fetch from "isomorphic-fetch";
import { Component } from "preact";
import style from "./style";
import Wizard from "../../components/wizard";

export default class WizardPage extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      groups: [],
      recommendations: []
    };
  }

  componentDidMount() {
    fetch("assets/data.json")
      .then(res => res.json())
      .then(res => this.setState({ ...res }));
  }

  render() {
    const numSteps = Object.keys(this.state.questions).length;
    return (
      <div class={style.wizard}>
        <Wizard
          recommendations={this.state.recommendations}
          questions={this.state.questions}
          groups={this.state.groups}
          steps={numSteps}
        />
      </div>
    );
  }
}
