import React, { useEffect, useState } from "react";
import tabsStyle from "./Tabs.module.css";
import useSetActiveTabs from "@/utils/hooks/tabs/useSetActiveTabs";
function Tabs({ tabs, setActiveTab }) {
	const { setTabActiveIndex, isActiveTab } = useSetActiveTabs();

	const activeTab = (index) => {
		setTabActiveIndex(index);
		setActiveTab(tabs[index]);
	};

	useEffect(() => {
		setActiveTab(tabs[0]);
	}, []);

	return (
		<ul className={tabsStyle.tabsWrapper}>
			{tabs.map((tab, i) => {
				return (
					<li
						className={`
						${isActiveTab(i) ? tabsStyle.tabActive : tabsStyle.tabNotActive}`}
						key={tab.name}
						onClick={() => activeTab(i)}
					>
						{tab.label}
					</li>
				);
			})}
		</ul>
	);
}

export default Tabs;
