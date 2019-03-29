const timespanHandler = require("./timespanHandler");

module.exports = {
	fetchChartData: function (sType, iTimespan) {
		let aTimespanLabels = timespanHandler.formatTimespanLabels(iTimespan),
			oData = {},
			aMinValues = [],
			aAvgValues = [],
			aMaxValues = [];

		switch (sType) {
			case "Temperature":
				oData = require("../weatherData/temperature");
				break;
			case "Humidity":
				oData = require("../weatherData/humidity");
				break;
			case "Pressure":
				oData = require("../weatherData/pressure");
				break;
			case "Air quality":
				oData = require("../weatherData/airQuality");
				break;
			default:
				break;
		}

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