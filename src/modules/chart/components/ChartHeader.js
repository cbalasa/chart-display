import React, { useEffect, useState } from "react";

import ButtonIcon from "@/components/Buttons/ButtonIcon";
import { icons } from "@/utils/constants";
import ButtonIconText from "@/components/Buttons/ButtonIconText";
import Tabs from "@/components/Tabs/Tabs";
import { chartTabs } from "@/utils/charts/constants";
import CompareWith from "./CompareWith";
import { useDispatch } from "react-redux";
import { setchartActions } from "@/store/chart";
function ChartHeader({ exportToCSV, enableZoom }) {
	const [activeTab, setActiveTab] = useState({});
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setchartActions.chartActiveTabReducer(activeTab));
	}, [activeTab, dispatch]);

	return (
		<div className="flex flex-col w-full px-2 mb-4">
			<div className="flex md:justify-between md:flex-row flex-col justify-center gap-2 items-center">
				<h3 className="font-medium text-2xl">Customer Feedback</h3>
				<div className="flex gap-2">
					<ButtonIcon icon={icons.lightbulb} />
					<ButtonIcon icon={icons.zoom} onClick={enableZoom} />
					<ButtonIcon icon={icons.compare} />
					<ButtonIcon icon={icons.download} onClick={exportToCSV} />
					<ButtonIcon icon={icons.location} />
					<ButtonIconText icon={icons.rightArrow} text="View more" />
				</div>
			</div>
			<Tabs tabs={chartTabs.customerFeedback} setActiveTab={setActiveTab} />
			<CompareWith activeTab={activeTab} />
		</div>
	);
}

export default ChartHeader;
