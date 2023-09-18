import useGetChartData from "./useGetChartData";
import useSetChartData from "./useSetChartData";
import useUpdateChartData from "./useUpdateChartData";

const useChartData = ({ url }) => {
	const { getChartData } = useGetChartData();
	const { data, chartData } = useSetChartData({
		getChartData,
		url
	});

	const { chartDataToDisplay } = useUpdateChartData({
		data,
		chartData
	});

	return { chartDataToDisplay };
};

export default useChartData;
