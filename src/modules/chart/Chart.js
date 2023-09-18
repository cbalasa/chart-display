import React from "react";
import dynamic from "next/dynamic";
import ChartHeader from "./components/ChartHeader";
import useChartData from "@/utils/hooks/charts/useChartData";
import useSetChartUrl from "@/utils/hooks/charts/useSetChartUrl";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
function DisplayChart() {
	const { url } = useSetChartUrl();
	const { chartDataToDisplay, enableZoom, exportToCSV } = useChartData({
		url
	});

	const chartHasData = () => {
		return chartDataToDisplay && Object.keys(chartDataToDisplay).length;
	};

	return (
		<div className="lg:w-[1150px] items-center self-center m-auto p-5 bg-white shadow-md rounded-md flex flex-col">
			<ChartHeader exportToCSV={exportToCSV} enableZoom={enableZoom} />

			{chartHasData() && (
				<ApexCharts
					options={chartDataToDisplay.options}
					series={chartDataToDisplay.series}
					className="w-full"
					key="apexChart-1"
				/>
			)}
		</div>
	);
}

export default DisplayChart;
