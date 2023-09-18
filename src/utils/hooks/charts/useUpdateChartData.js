import { useCallback, useEffect, useState } from "react";
import { chartCompareWithSelected } from "@/store/chart";
import { useSelector } from "react-redux";
const useUpdateChartData = ({ data, chartData }) => {
	const [chartDataToDisplay, setChartDataToDisplay] = useState(data);

	const chartCompareWith = useSelector(chartCompareWithSelected);

	useEffect(() => {
		setChartDataToDisplay(data);
	}, [data]);

	const updateChart = useCallback(
		({ chartCompareWith }) => {
			const dataClone = { ...chartDataToDisplay };

			if (chartCompareWith && chartCompareWith.name === "responseRate") {
				if (chartCompareWith.checked) {
					dataClone.series = [
						...dataClone.series,
						{
							name: chartData.chart_data.nps_response_timeline.name,
							type: "area",
							data: chartData.chart_data.nps_response_timeline.points.map(
								(point) =>
									point[Object.keys(point)[0]]
										? point[Object.keys(point)[0]]
										: 0
							)
						}
					];
				} else {
					dataClone.series = dataClone.series.filter(
						({ name }) =>
							name !== chartData.chart_data.nps_response_timeline.name
					);
				}
			}

			return setChartDataToDisplay(dataClone);
		},
		[chartDataToDisplay, chartData]
	);

	useEffect(() => {
		updateChart({ chartCompareWith });
	}, [chartCompareWith]);

	return { chartDataToDisplay };
};

export default useUpdateChartData;
