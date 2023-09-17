import React from "react";
import lightbulb from "@/assets/chart/lightbulb.png";
import compare from "@/assets/chart/compare.png";
import download from "@/assets/chart/download.png";
import location from "@/assets/chart/location.png";
import zoom from "@/assets/chart/zoom.png";
import rightArrow from "@/assets/chart/right_arrow.png";
import Image from "next/image";

function Icon({ icon, size = 20 }) {
	const icons = {
		lightbulb,
		compare,
		download,
		location,
		zoom,
		rightArrow
	};

	return (
		<div className="flex relative">
			<Image src={icons[icon]} alt="lightbulb" width={size} height={size} />
		</div>
	);
}

export default Icon;
