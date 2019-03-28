const timespanHandler = require("./timespanHandler");

module.exports = {
	fetchChartData: function (sType, iTimespan) {
		let aTimespanLabels = timespanHandler.formatTimespanLabels(iTimespan);

		if (iTimespan === 7) {
			return {
				labels: aTimespanLabels,
				datasets: [{
					label: "Some other label" + iTimespan,
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
				}]
			};
		} else {
			return {
				labels: aTimespanLabels,
				datasets: [{
					label: "Some other label" + iTimespan,
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [9, 8, 7, 6, 5, 4, 3, 2, 1]
				}]
			};
		}
	}
};