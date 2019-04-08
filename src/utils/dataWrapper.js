const timespanHandler = require("./timespanHandler");
const request = require('request');

module.exports = {
	fetchChartData: function (sType, iTimespan) {
		return new Promise((resolve) => {
			let oOptions = {
				url: "http://192.168.178.21:4000/" + sType + ".json",
				method: 'GET',
				json: true
			};

			request(oOptions, function (error, response, body) {
				if (!error && response.statusCode === 200) {

					let aTimespanLabels = timespanHandler.formatTimespanLabels(iTimespan),
						oData = body,
						aMinValues = [],
						aAvgValues = [],
						aMaxValues = [];

					if (oData && oData[iTimespan]) {
						aMinValues = oData[iTimespan].min ? oData[iTimespan].min : [];
						aAvgValues = oData[iTimespan].avg ? oData[iTimespan].avg : [];
						aMaxValues = oData[iTimespan].max ? oData[iTimespan].max : [];
					}
					resolve({
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
					});
				}
			});
		});
	}
};