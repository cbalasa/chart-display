import Icon from "../Icon/Icon";
import buttonStyle from "./Button.module.css";
import Button from "./Button";
function ButtonIconText(props) {
	const { onClick, icon, text, disabled = false } = props;

	return (
		<Button
			onClick={onClick}
			classes={buttonStyle.buttonIconText}
			disabled={disabled}
		>
			<Icon icon={icon} />
			<div>{text}</div>
		</Button>
	);
}

export default ButtonIconText;
