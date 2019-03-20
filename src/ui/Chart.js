import React, {Component} from 'react';
import '../App.css';

const LineChart = require("react-chartjs").Line;
const timespanHandler = require("../components/timespanHandler");
const lWidth = window.innerWidth;

const testData = require("../test-data/data");

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timespan: 365
		};
		this.aTimespanLables = [];
		this.updateTimespan = this.updateTimespan.bind(this);
	}

	updateTimespan(iTimespan) {
		this.setState({
			timespan: iTimespan
		});
		this.aTimespanLables = timespanHandler.getTimespanLabels(iTimespan);
	}

	render() {
		switch (this.state.timespan) {
			case 1: //one day
				for (let i = 0; i < 25; i++) {
					this.aTimespanLabels.push(i + ":00")
				}
				break;
			case 7: //one week
				this.aTimespanLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
				break;
			case 30: //one month
				this.aTimespanLabels = timespanHandler.getTimespanLabels(this.state.timespan);
				break;
			case 365: //one year
				this.aTimespanLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				break;
			default:
				this.aTimespanLabels = timespanHandler.getTimespanLabels(this.state.timespan);
				break;
		}
		//let oData = chartBuilder.getChartData(this.aTimespanLabels, testData.dataSets);

		var aDataSets = [];
		testData.dataSets.forEach((oData) => {
			aDataSets.push({
				label: oData.label,
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: oData.chartData
			})
		});
		var oData = {
			labels: this.aTimespanLabels,
			datasets: aDataSets
		};
		return (
			<div className="chart">
				<p>{this.props.type} over the last {this.state.timespan} day(s)</p>
				<LineChart data={oData} width={lWidth - 25} height="250"/>
			</div>
		);
	}
}

export {Chart};