import { Component } from 'preact';

export default class Wizard extends Component {

	onNext() {
		const step = this.state.step;
		this.setState({
			step: step + 1
		});
	}

	constructor({ steps }) {
		super();

		this.steps = steps;
		this.state.step = 0;
		
		this.onNext = this.onNext.bind(this);
	}

	render() {
		return (
			<div>
				<h1>Wizard Component</h1>
				<p>Step {this.state.step}/{this.steps}</p>
				{ this.state.step < this.steps ?
					<button type="button" onClick={this.onNext}>Next</button> :
					'Congrtulations! You finished the wizard!'
				}
			</div>
		);
	}
}