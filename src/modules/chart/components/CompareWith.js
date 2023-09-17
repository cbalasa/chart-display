import Checkbox from "@/components/Checkbox/Checkbox";
import Icon from "@/components/Icon/Icon";
import { icons } from "@/utils/constants";
import React from "react";

function CompareWith({ activeTab, compareWithChange }) {
	return (
		<div className="flex gap-3 w-full justify-between text-sm px-3 lg:flex-row flex-col">
			<div className="flex items-center justify-start gap-2 lg:w-1/12">
				<div className="w-5 h-5 bg-blue-500 rounded-md"></div>
				<span>{activeTab.label}</span>
			</div>
			<div className="flex w-11/12 gap-4 md:flex-row flex-col items-center">
				<div className="flex items-center justify-start gap-2 ">
					<Icon icon={icons.compare} size={24} />
					<span>Compare with:</span>
				</div>
				<div className="flex gap-2 md:flex-row flex-wrap">
					<div className="flex items-center justify-start gap-2 border border-mediumGrey rounded-md p-2 h-10">
						<Checkbox
							labelText="Year over year"
							name="yearOverYear"
							onChange={compareWithChange}
						/>
					</div>
					<div className="flex items-center justify-start gap-2 border border-mediumGrey rounded-md p-2 h-10">
						<Checkbox
							labelText="Month over month"
							checkmarkColor="var(--fucsia)"
							name="monthOverMonth"
							onChange={compareWithChange}
						/>
					</div>
					<div className="flex items-center justify-start gap-2 border border-mediumGrey rounded-md p-2 h-10">
						<Checkbox
							labelText="Response rate"
							checkmarkColor="var(--green)"
							name="responseRate"
							onChange={compareWithChange}
						/>
					</div>
					<div className="flex items-center justify-start gap-2 border bg-lightGrey border-mediumGrey rounded-md p-2 h-10">
						<Checkbox
							labelText="NPS Post"
							name="npsPost"
							onChange={compareWithChange}
						/>
					</div>
					<div className="flex items-center justify-start gap-2 border bg-lightGrey border-mediumGrey rounded-md p-2 h-10">
						<Checkbox
							labelText="NPS Delta"
							name="npsDelta"
							onChange={compareWithChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CompareWith;
