import classNames from "classnames/bind";

import styles from "./ModalGlobal.module.scss";
import warning from "../../assets/warning.png";
const cls = classNames.bind(styles);

function Modal() {
	return (
		<div className={cls("modal-overlay")}>
			<div className={cls("modal-content")}>
				<div className={cls("header-modal")}>
					<div className={cls("icon-modal")}>
						<img src={warning} alt="warning" />
					</div>
					<div className={cls("title-modal")}></div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
