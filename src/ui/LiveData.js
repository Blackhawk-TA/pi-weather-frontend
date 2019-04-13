import React, {Component} from 'react';
import '../css/LiveData.css';

const request = require('request');// require module

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
			airQuality: this.iAirQuality,
			time: new Date().toLocaleTimeString()
		};

		this.update = this.update.bind(this);
		setInterval(this.update, 1000);
	}

	update() {
		let oOptions = {
			url: "http://192.168.178.21:8000",
			method: 'GET',
			json: true
		};
		request(oOptions, function (error, response, body) {
			if (!error && response.statusCode === 200 && body) {
				let oLiveData = body;
				this.iTemperature = oLiveData.temperature;
				this.iHumidity = oLiveData.humidity;
				this.iPressure = oLiveData.pressure;
				this.iAirQuality = oLiveData.airQuality;
			} else if (error) {
				console.error(error);
			}

			this.setState({
				temperature: this.iTemperature,
				humidity: this.iHumidity,
				pressure: this.iPressure,
				airQuality: this.iAirQuality,
				time: new Date().toLocaleTimeString()
			});
		}.bind(this));
	}

	render() {
		return (
			<div>
				<div className={"liveData"}>
					<p>Temperature: {this.state.temperature}°C | Humidity: {this.state.humidity}% |
						Pressure: {this.state.pressure}mBar | Air quality: {this.state.airQuality}</p>
				</div>
				<div className={"time"}>
					<p>{this.state.time}</p>
				</div>
			</div>
		);
	}
}

export default LiveData;
