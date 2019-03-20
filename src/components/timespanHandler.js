module.exports = {
	getTimespanLabels: function(iTimespan) {
		var aTimespanLabels = [];
		for (var i = 0; i < iTimespan; i++) {
			aTimespanLabels.push(i + 1);
		}
		return aTimespanLabels;
	}
};