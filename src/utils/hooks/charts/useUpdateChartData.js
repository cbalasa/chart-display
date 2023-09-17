import { useCallback, useEffect, useState } from "react";
import useGetChartData from "./useGetChartData";
import useSetChartData from "./useSetChartData";

const useUpdateChartData = ({ url }) => {
	const { getChartData } = useGetChartData();
	const { data, chartData } = useSetChartData({
		getChartData,
		url
	});
	const [compareWithChange, setCompareWithChange] = useState(null);

	const [chartDataToDisplay, setChartDataToDisplay] = useState(data);

	useEffect(() => {
		setChartDataToDisplay(data);
	}, [data]);

	const updateChart = useCallback(
		({ compareWithChange }) => {
			const dataClone = { ...chartDataToDisplay };

			if (compareWithChange?.target.name === "responseRate") {
				if (compareWithChange?.target.checked) {
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
		updateChart({ compareWithChange });
	}, [compareWithChange]);

	return { setCompareWithChange, chartDataToDisplay };
};

export default useUpdateChartData;
