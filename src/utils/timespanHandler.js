module.exports = {
	_getTimespanDayLabels: function(iTimespan, iCurDate) {
		let aTimespanLabels = [];
		let iCurDay = iCurDate.getDate();
		let iDaysInLastMonth = this._getDaysInMonth(iCurDate.getMonth(), iCurDate.getFullYear());

		for (let i = 0; i < iTimespan; i++) {
			let iDay = iCurDay - iTimespan + i + 1;
			if (iDay < 1) {
				iDay = iDay + iDaysInLastMonth;
			}
			aTimespanLabels.push(iDay);
		}

		return aTimespanLabels;
	},

	_getTimespanPredefinedLabels: function(iTimespan, oCurDate) {
		let aTimespanLabels = [];
		let aDefaultTimespanLabels = [];
		let iCurDate = 0;

		switch (iTimespan) {
			case 7:
				aDefaultTimespanLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
				iCurDate = oCurDate.getDay();
				break;
			case 365:
				aDefaultTimespanLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				iCurDate = oCurDate.getMonth() + 1;
				break;
			default:
				break;
		}

		let iTotalLabels = aDefaultTimespanLabels.length;
		for (let i = 0; i < iTotalLabels; i++) {
			let iDay = iCurDate - iTotalLabels + i;
			if (iDay < 0) {
				iDay = iDay + iTotalLabels;
			}
			aTimespanLabels.push(aDefaultTimespanLabels[iDay]);
		}

		return aTimespanLabels;
	},

	formatTimespanLabels: function(iTimespan) {
		let aTimespanLabels = [];
		let oCurDate = new Date();

		switch (iTimespan) {
			case 1: //one day
				let iTotalHours = 24;
				for (let i = 0; i < iTotalHours; i++) {
					let iHour = oCurDate.getHours() - iTotalHours + i;
					if (iHour < 0) {
						iHour = iHour + iTotalHours;
					}
					aTimespanLabels.push(iHour + ":00")
				}
				break;
			case 7: //one week
				aTimespanLabels = this._getTimespanPredefinedLabels(iTimespan, oCurDate);
				break;
			case 30: //one month
				aTimespanLabels = this._getTimespanDayLabels(iTimespan, oCurDate);
				break;
			case 365: //one year
				aTimespanLabels = this._getTimespanPredefinedLabels(iTimespan, oCurDate);
				break;
			default:
				aTimespanLabels = this._getTimespanDayLabels(iTimespan, oCurDate);
				break;
		}

		return aTimespanLabels;
	},

	_getDaysInMonth: function(iMonth, iYear) {
		return new Date(iYear, iMonth, 0).getDate();
	}
};
