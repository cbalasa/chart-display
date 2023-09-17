import dateToLocaleString from "../helpers/dateToString";

export const chartTabs = {
	customerFeedback: [
		{
			label: "NPS Pre",
			name: "npsPre"
		},
		{
			label: "NPS Post",
			name: "npsPost"
		},
		{
			label: "NPS Delta",
			name: "npsDelta"
		}
	]
};

export const chartTabNames = {
	npsPre: "npsPre",
	npsPost: "npsPost",
	npsDelta: "npsDelta"
};

export const chartOptions = {
	chart: {
		id: null,
		toolbar: {
			show: false
		},
		zoom: {
			enabled: true,
			type: "x",
			autoScaleYaxis: false,
			zoomedArea: {
				fill: {
					color: "#90CAF9",
					opacity: 0.4
				},
				stroke: {
					color: "#0D47A1",
					opacity: 0.4,
					width: 1
				}
			}
		}
	},
	xaxis: {
		type: null,
		categories: [],
		convertedCatToNumeric: false,
		labels: {
			show: true,
			rotate: -45,
			rotateAlways: false,
			hideOverlappingLabels: true,
			showDuplicates: false,
			trim: false,
			minHeight: undefined,
			maxHeight: 120,
			style: {
				colors: "var(--chartLabels)",
				fontSize: "12px",
				fontWeight: 400
			},
			offsetX: 0,
			format: "dd/MM",
			formatter: function (value, timestamp, index) {
				return dateToLocaleString(value).split(" ");
			},
			offsetY: 0
		},
		tickPlacement: "on"
	},
	yaxis: {
		labels: {
			style: {
				colors: "var(--chartLabels)",
				fontSize: "12px",
				fontWeight: 400
			},
			offsetY: 2,
			offsetX: -5
		},

		axisTicks: {
			show: true,
			borderType: "solid",
			width: 13,
			offsetX: 9,
			offsetY: -1.6
		}
	},

	grid: {
		show: true,
		borderColor: "var(--mediumGrey)",
		strokeDashArray: 0,
		position: "back",
		xaxis: {
			lines: {
				show: true
			}
		},
		yaxis: {
			lines: {
				show: true
			}
		},

		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 15
		}
	},
	legend: {
		show: false
	}
};
