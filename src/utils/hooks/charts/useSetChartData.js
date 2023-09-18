import { useState, useEffect, useCallback } from "react";
import { chartOptions } from "@/utils/charts/constants";

const useSetChartData = ({ getChartData, url }) => {
	const [data, setData] = useState(null);
	const [chartData, setChartData] = useState(null);
	const getData = useCallback(
		async ({ url }) => {
			const chartData = await getChartData({ url });
			setChartData(chartData);
		},
		[getChartData]
	);

	useEffect(() => {
		getData({ url });
	}, [url]);

	useEffect(() => {
		if (chartData) {
			const options = chartOptions;
			options.chart.id = chartData.id;
			options.xaxis.type = chartData.data_type;
			options.xaxis.categories =
				chartData.chart_data.nps_score_timeline.points.map(
					(point) => Object.keys(point)[0]
				);

			setData({
				options: chartOptions,
				series: [
					{
						name: chartData.chart_data.nps_score_timeline.name,
						type: "line",
						data: chartData.chart_data.nps_score_timeline.points.map((point) =>
							point[Object.keys(point)[0]] ? point[Object.keys(point)[0]] : 0
						)
					}
				]
			});
		} else {
			setData(null);
		}
	}, [chartData]);

	return { data, chartData };
};

export default useSetChartData;
