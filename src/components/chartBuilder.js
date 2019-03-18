module.exports = {
	getChartData: function (sLabels, aData) {
		var aDataSets = [];
		aData.forEach((oData) => {
			aDataSets.push({
				label: oData.label,
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: oData.chartData
			})
		});
		return {
			labels: sLabels,
			datasets: aDataSets
		};
	}
};
