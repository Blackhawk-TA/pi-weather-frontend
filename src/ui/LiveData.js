import React, {Component} from 'react';

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
		setInterval(this.update, 1000);
	}

	update() {
		//TODO fetch live data here

		this.setState({
			temperature: this.iTemperature,
			humidity: this.iHumidity,
			pressure: this.iPressure,
			airQuality: this.iAirQuality
		});
	}

	render() {
		return (
			<div className="liveData">
				<p>Temperature: {this.state.temperature}°C | Humidity: {this.state.humidity}% | Pressure: {this.state.pressure}mBar | Air quality: {this.state.airQuality}</p>
			</div>
		);
	}
}

export {LiveData};