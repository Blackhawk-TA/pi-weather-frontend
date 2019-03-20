import React, {Component} from 'react';
import {Button} from './ui/Button';
import {Chart} from './ui/Chart';
import {LiveData} from './ui/LiveData';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="content">
				<LiveData/>
				<div className="buttons">
					<Button name={"365 days"}/>
					<Button name={"30 days"}/>
					<Button name={"7 days"}/>
					<Button name={"1 day"}/>
				</div>
				<Chart timespan={365} type={"Temperature"}/>
				<Chart timespan={365} type={"Humidity"}/>
				<Chart timespan={365} type={"Pressure"}/>
				<Chart timespan={365} type={"Air quality"}/>
			</div>
		);
	}
}

export default App;
