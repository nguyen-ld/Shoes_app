import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";

import Headers from "./Headers";
import SideBar from "./SideBar";
import styles from "./MainLayout.module.scss";

const cls = classNames.bind(styles);

function MainLayout() {
	return (
		<div>
			<div className={cls("container")}>
				<div className={cls("side-bar")}>
					<SideBar />
				</div>
				<div className={cls("container-body")}>
					<Headers />
					<div>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
