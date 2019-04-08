import React, {Component} from 'react';

const dataWrapper = require("../utils/dataWrapper");

class Button extends Component {
	handleClick() {
		let iTimespan = Number(this.props.name.split(" ")[0]);
		let aPromises = [
			dataWrapper.fetchChartData("temperature", iTimespan),
			dataWrapper.fetchChartData("humidity", iTimespan),
			dataWrapper.fetchChartData("pressure", iTimespan),
			dataWrapper.fetchChartData("airQuality", iTimespan)
		];

		Promise.all(aPromises).then((fulfilled) => {
			this.props.main.setState({
				timespan: iTimespan,
				chartData: fulfilled
			});
		});
	}

	render() {
		return (
			<button className="button" onClick={this.handleClick.bind(this)}>{this.props.name}</button>
		);
	}
}

export default Button;
