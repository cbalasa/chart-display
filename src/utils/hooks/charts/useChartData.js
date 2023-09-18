import useGetChartData from "./useGetChartData";
import useSetChartData from "./useSetChartData";
import useUpdateChartData from "./useUpdateChartData";

const useChartData = ({ url }) => {
	const { getChartData } = useGetChartData();
	const { data, chartData } = useSetChartData({
		getChartData,
		url
	});

	const { chartDataToDisplay, enableZoom, exportToCSV } = useUpdateChartData({
		data,
		chartData
	});

	return { chartDataToDisplay, enableZoom, exportToCSV };
};

export default useChartData;
