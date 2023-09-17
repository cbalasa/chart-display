import { useState, useEffect } from "react";

const useSetActiveTabs = () => {
	const [tabActiveIndex, setTabActiveIndex] = useState(0);
	const isActiveTab = (index) => {
		return index === tabActiveIndex;
	};

	return { setTabActiveIndex, isActiveTab };
};

export default useSetActiveTabs;
