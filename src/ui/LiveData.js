import React, {Component} from 'react';
import '../css/LiveData.css';

class LiveData extends Component {
	constructor(props) {
		super(props);
		this.iTemperature = 0;
		this.iHumidity = 0;
		this.iPressure = 0;
		this.iAirQuality = 0;
		this.state = {
			temperature: this.iTemperature,
			humidity: this.iHumidity,
			pressure: this.iPressure,
			airQuality: this.iAirQuality
		};

		this.update = this.update.bind(this);
		setInterval(this.update, 10000);
	}

	update() {
		let oLiveData = require("../weatherData/liveData");
		this.iTemperature = oLiveData.temperature;
		this.iHumidity = oLiveData.humidity;
		this.iPressure = oLiveData.pressure;
		this.iAirQuality = oLiveData.airQuality;

		this.setState({
			temperature: this.iTemperature,
			humidity: this.iHumidity,
			pressure: this.iPressure,
			airQuality: this.iAirQuality
		});
	}

	render() {
		return (
			<div>
				<div className={"liveData"}>
					<p>Temperature: {this.state.temperature}°C | Humidity: {this.state.humidity}% | Pressure: {this.state.pressure}mBar | Air quality: {this.state.airQuality}</p>
				</div>
				<div className={"time"}>
					<p>{new Date().toLocaleTimeString()}</p>
				</div>
			</div>
		);
	}
}

export default LiveData;
