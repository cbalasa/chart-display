import React, { useState } from "react";
import checkboxStyle from "./Checkbox.module.css";

export default function Checkbox(props) {
	const {
		name,
		onChange = () => {},
		labelText,
		defaultChecked,
		checkmarkColor
	} = props;

	const [checked, setChecked] = useState(defaultChecked);
	return (
		<div className="flex flex-col w-full ">
			<div className="flex items-center">
				<label className={checkboxStyle.container}>
					<input
						type="checkbox"
						name={name}
						onChange={(e) => {
							onChange(e), setChecked(!checked);
						}}
						checked={defaultChecked}
					/>
					<span
						className={[checkmarkColor, checkboxStyle.checkmark].join(" ")}
						style={{
							background: `${
								checked
									? checkmarkColor
										? [checkmarkColor]
										: "black"
									: "white"
							}`
						}}
					></span>
					<span>{labelText}</span>
				</label>
			</div>
		</div>
	);
}
