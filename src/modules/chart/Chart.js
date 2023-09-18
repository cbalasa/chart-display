import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ChartHeader from "./components/ChartHeader";
import useUpdateChartData from "@/utils/hooks/charts/useUpdateChartData";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
function DisplayChart() {
	const { setCompareWithChange, chartDataToDisplay } = useUpdateChartData({
		url: "https://run.mocky.io/v3/b48be7cc-2082-479d-8ff7-83c003537f83"
	});

	const exportToCSV = () => {
		window.Apex._chartInstances[0].chart.ctx.exports.exportToCSV({
			series: chartDataToDisplay.series,
			columnDelimiter: ","
		});
	};

	return (
		<div className="lg:w-[1150px] items-center self-center m-auto p-5 bg-white shadow-md rounded-md flex flex-col">
			<ChartHeader
				compareWithChange={setCompareWithChange}
				exportToCSV={exportToCSV}
			/>

			{chartDataToDisplay && Object.keys(chartDataToDisplay) && (
				<ApexCharts
					options={chartDataToDisplay.options}
					series={chartDataToDisplay.series}
					className="w-full"
				/>
			)}
		</div>
	);
}

export default DisplayChart;
