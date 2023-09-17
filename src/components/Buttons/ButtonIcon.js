import Icon from "@/components/Icon/Icon";
import Button from "./Button";
import buttonStyle from "./Button.module.css";

function ButtonIcon(props) {
	const { onClick, icon, disabled = false } = props;

	return (
		<Button
			onClick={onClick}
			classes={buttonStyle.buttonIcon}
			disabled={disabled}
		>
			<Icon icon={icon} />
		</Button>
	);
}

export default ButtonIcon;
