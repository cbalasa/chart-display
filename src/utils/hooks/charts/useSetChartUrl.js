import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { chartActiveTabSelected } from "@/store/chart";
const useSetChartUrl = () => {
	const [url, setUrl] = useState(null);

	const activeTab = useSelector(chartActiveTabSelected);

	useEffect(() => {
		if (activeTab?.name === "npsPre") {
			setUrl("https://run.mocky.io/v3/b48be7cc-2082-479d-8ff7-83c003537f83");
		} else {
			setUrl(null);
		}
	}, [activeTab]);

	return { url };
};

export default useSetChartUrl;
