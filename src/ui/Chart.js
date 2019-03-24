import React, {Component} from 'react';

const LineChart = require("react-chartjs").Line;
const lWidth = window.innerWidth;

class Chart extends Component {
	render() {
		let chartData = {};

		switch (this.props.type) {
			case "Temperature":
				chartData = this.props.main.state.chartData[0];
				break;
			case "Humidity":
				chartData = this.props.main.state.chartData[1];
				break;
			case "Pressure":
				chartData = this.props.main.state.chartData[2];
				break;
			case "Air quality":
				chartData = this.props.main.state.chartData[3];
				break;
			default:
				break;
		}

		return (
			<div className="chart">
				<p>{this.props.type} over the last {this.props.main.state.timespan} day(s)</p>
				<LineChart className="lineChart" data={chartData} redraw width={lWidth - 25} height={250}/>
			</div>
		);
	}
}

export default Chart;
