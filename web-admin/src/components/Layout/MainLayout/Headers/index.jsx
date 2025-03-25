import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cls = classNames.bind(styles);

function Headers() {
	const headerRef = useRef(null);

	return (
		<div ref={headerRef} className={cls("container")}>
			<div className={cls("logout")}>
				<p onClick={() => console.log("click logout")}>
					Đăng xuất
					<FontAwesomeIcon
						className={cls("icon-logo-logout")}
						icon={faArrowRightFromBracket}
					/>
				</p>
			</div>
		</div>
	);
}

export default Headers;
