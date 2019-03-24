module.exports = {
	_getTimespanLabels: function(iTimespan) {
		let aTimespanLabels = [];

		for (let i = 0; i < iTimespan; i++) {
			aTimespanLabels.push(i + 1);
		}

		return aTimespanLabels;
	},

	formatTimespanLabels: function(iTimespan) {
		let aTimespanLabels = [];

		switch (iTimespan) {
			case 1: //one day
				for (let i = 0; i < 25; i++) {
					aTimespanLabels.push(i + ":00")
				}
				break;
			case 7: //one week
				aTimespanLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
				break;
			case 30: //one month
				aTimespanLabels = this._getTimespanLabels(iTimespan);
				break;
			case 365: //one year
				aTimespanLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				break;
			default:
				aTimespanLabels = this._getTimespanLabels(iTimespan);
				break;
		}

		return aTimespanLabels;
	}
};
