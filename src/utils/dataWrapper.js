const timespanHandler = require("./timespanHandler");
const request = require('request');

module.exports = {
	fetchChartData: function (sType, iTimespan) {
		let aTimespanLabels = timespanHandler.formatTimespanLabels(iTimespan),
			oData = {},
			aMinValues = [],
			aAvgValues = [],
			aMaxValues = [],
			oOptions = {
				url: "http://127.0.0.1:4000/" + sType + ".json",
				method: 'GET',
				json: true
			};

		request(oOptions, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				oData = body;
			}
		});

		try {
			aMinValues = oData[iTimespan].min;
			aAvgValues = oData[iTimespan].avg;
			aMaxValues = oData[iTimespan].max;
		} catch (err) {
			console.error(err);
		}

		return {
			labels: aTimespanLabels,
			datasets: [{
				label: "Min. " + sType,
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: aMinValues
			}, {
				label: "Average " + sType,
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: aAvgValues
			}, {
				label: "Max. " + sType,
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: aMaxValues
			}]
		};
	}
};