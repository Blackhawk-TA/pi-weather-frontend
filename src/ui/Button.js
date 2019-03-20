import React, {Component} from 'react';
import {Chart} from '../ui/Chart';

class Button extends Component {
	handleClick(oEvent) {
		let iTimespan = oEvent.currentTarget.textContent.split(" ")[0];
		//TODO update charts
	}

	render() {
		return (
			<button className="button" onClick={(e) => this.handleClick(e)}>{this.props.name}</button>
		);
	}
}

export {Button};