import { Component } from "preact";

export default class WizardStep extends Component {
  constructor({}) {
    super();
  }

  render() {
    const question = this.props.question;
    return (
      <div>
        <h2>Wizard step</h2>
        <p>{question.headline}</p>
        <ul>
          {question.answers.map(answer => (
            <li>
              <button type="button" onClick={e => this.props.onSelect(answer)}>
                {answer.headline}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
