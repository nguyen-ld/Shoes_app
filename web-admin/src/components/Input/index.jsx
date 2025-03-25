import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cls = classNames.bind(styles);
function Input({ label, type, placeholder, isInput, onChange }) {
	return (
		<div className={cls("container")}>
			<label>{label}</label>
			<br />
			{isInput ? (
				<input
					type={type}
					placeholder={placeholder}
					onChange={onChange}
				/>
			) : (
				<textarea rows={5} placeholder={placeholder}></textarea>
			)}
		</div>
	);
}

export default Input;
