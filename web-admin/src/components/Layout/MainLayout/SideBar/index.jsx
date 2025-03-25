import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import styles from "./SideBar.module.scss";
import MenuList from "../../../View/MenuList";

const cls = classNames.bind(styles);

function SideBar() {
	return (
		<div className={cls("container-fluid")}>
			<div className={cls("logo-header")}>
				<p>
					<FontAwesomeIcon
						icon={faHouse}
						className={cls("icon-logo")}
					/>
					Administator
				</p>
			</div>
			<MenuList />
		</div>
	);
}

export default SideBar;
