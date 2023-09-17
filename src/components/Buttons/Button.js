import buttonStyle from "./Button.module.css";

function Button(props) {
	const { onClick, children, classes, disabled = false } = props;

	return (
		<div className={buttonStyle.buttonWrapper}>
			<button
				{...(!onClick ? { type: "submit" } : { type: "button" })}
				{...(onClick && { onClick: onClick })}
				className={[buttonStyle.button, classes].join(" ")}
				disabled={disabled}
			>
				{children}
			</button>
		</div>
	);
}

export default Button;
