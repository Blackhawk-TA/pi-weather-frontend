module.exports = {
	oneDay: function() {
		console.log("day");
	},

	oneWeek: function() {
		console.log("week");
	},

	oneMonth: function() {
		console.log("month");
	},

	oneYear: function() {
		console.log("year");
	},

	getTimespanLabels: function(iTimespan) {
		var aTimespanLabels = [];
		for (var i = 0; i < iTimespan; i++) {
			aTimespanLabels.push(i + 1);
		}
		return aTimespanLabels;
	}
};