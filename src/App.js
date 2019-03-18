import React, {Component} from 'react';
import './App.css';

const LineChart = require("react-chartjs").Line;

const chartBuilder = require("./components/chartBuilder.js");
const timespanHandler = require("./components/timespanHandler.js");

const testData = require("./test-data/data.json");
const lWidth = window.innerWidth;

class App extends Component {
	/**
	 * Renders the line chart
	 * @param iTimespan in days
	 * @param sType The type of data displayed, e.g. temperature, humidity, etc.
	 * @returns {*}
	 */
	renderChart(iTimespan, sType) { //TODO move to own class
		var aTimespanLabels = [];

		switch (iTimespan) {
			case 1: //one day
				for (var i = 0; i < 25; i++) {
					aTimespanLabels.push(i + ":00")
				}
				break;
			case 7: //one week
				aTimespanLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
				break;
			case 30: //one month
				aTimespanLabels = timespanHandler.getTimespanLabels(iTimespan);
				break;
			case 365: //one year
				aTimespanLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				break;
			default:
				aTimespanLabels = timespanHandler.getTimespanLabels(iTimespan);
				break;
		}
		var oData = chartBuilder.getChartData(aTimespanLabels, testData.dataSets);
		return (
			<div className="chart">
				<p>{sType} over the last {iTimespan} day(s)</p>
				<LineChart data={oData} options={{}} width={lWidth - 25} height="250"/>
			</div>
		);
	}

	render() {
		return (
			<div className="content">
				<div className="liveData">
					<p>Temperature: 20°C | Humidity: 45% | Pressure: 1014mBar | Air quality: Good</p>
				</div>
				<div className="buttons">
					<button className="button" onClick={timespanHandler.oneYear}>1y</button>
					<button className="button" onClick={timespanHandler.oneMonth}>30d</button>
					<button className="button" onClick={timespanHandler.oneWeek}>7d</button>
					<button className="button" onClick={timespanHandler.oneDay}>24h</button>
				</div>
				{this.renderChart(7, "Temperature")}
			</div>
		);
	}
}

export default App;
