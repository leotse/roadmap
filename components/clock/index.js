import { Component } from 'preact';

export default class Clock extends Component {

	constructor() {
		super();
		this.state.time = new Date();
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				time: new Date()
			});
		}, 1000);
	}

	render() {
		const timeString = this.state.time.toLocaleTimeString();
		return (
			<span>Now: {timeString}</span>
		);
	}
}