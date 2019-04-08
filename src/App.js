import React, {Component} from 'react';
import Button from './ui/Button';
import Chart from './ui/Chart';
import LiveData from './ui/LiveData';
import './css/App.css';

const dataWrapper = require("./utils/dataWrapper");
const defaultTimespan = 7; //One week

class App extends Component {
	constructor(props) {
		super(props);
		// let aPromises = [
		// 	dataWrapper.fetchChartData("temperature", defaultTimespan),
		// 	dataWrapper.fetchChartData("humidity", defaultTimespan),
		// 	dataWrapper.fetchChartData("pressure", defaultTimespan),
		// 	dataWrapper.fetchChartData("airQuality", defaultTimespan)
		// ];
		// Promise.all(aPromises).then((fulfilled) => {
		// 	this.state = {
		// 		timespan: defaultTimespan,
		// 		chartData: fulfilled
		// 	}
		// });
		this.state = { //TODO remove later on
			timespan: defaultTimespan,
			chartData: [{},{},{},{}]
		}
	}

	render() {
		return (
			<div className="content">
				<LiveData/>
				<div className="buttons">
					<Button name={"365 days"} main={this}/>
					<Button name={"30 days"} main={this}/>
					<Button name={"7 days"} main={this}/>
					<Button name={"1 day"}  main={this}/>
				</div>
				<Chart type={"Temperature"} main={this}/>
				<Chart type={"Humidity"} main={this}/>
				<Chart type={"Pressure"} main={this}/>
				<Chart type={"Air quality"} main={this}/>
			</div>
		);
	}
}

export default App;
