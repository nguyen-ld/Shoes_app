import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSocks,
	faAngleDown,
	faAngleRight,
	faBarsProgress,
	faCartShopping,
	faImages,
	faChartPie,
	faBarcode,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./MenuList.module.scss";

const cls = classNames.bind(styles);

const data = [
	{
		title: "Quản lý sản phẩm",
		icon: faSocks,
		items: [
			{ name: "Danh sách sản phẩm", path: "/products" },
			{ name: "Thêm sản phẩm", path: "/add-products" },
		],
	},
	{
		title: "Quản lý danh mục",
		icon: faBarsProgress,
		items: [
			{ name: "Danh sách danh mục", path: "/categories" },
			{ name: "Thêm danh mục", path: "/categories/add" },
		],
	},
	{
		title: "Quản lý đơn hàng",
		icon: faCartShopping,
		items: [{ name: "Danh sách đơn đặt hàng", path: "/orders" }],
	},
	{
		title: "Quản lý size",
		icon: faBarcode,
		items: [
			{ name: "Danh sách size", path: "/sizes" },
			{ name: "Thêm size", path: "/sizes/add" },
		],
	},
	{
		title: "Quản lý bộ sưu tập",
		icon: faImages,
		items: [
			{ name: "Bộ sưu tập", path: "/collections" },
			{ name: "Thêm hình ảnh", path: "/collections/add" },
		],
	},
	{
		title: "Thống kê",
		icon: faChartPie,
		items: [
			{ name: "Thống kê doanh thu", path: "/reports/revenue" },
			{ name: "Thống kê lợi nhuận", path: "/reports/profit" },
		],
	},
];

function MenuList() {
	const [openMenus, setOpenMenus] = useState({});

	const handleToggleOpen = (index) => {
		setOpenMenus((prev) => ({
			[index]: !prev[index],
		}));
	};
	return (
		<div className={cls("container-fluid")}>
			{data.map((item, index) => (
				<div className={cls("container")} key={index}>
					<ul>
						<div
							className={cls("container-items-list")}
							onClick={() => handleToggleOpen(index)}
						>
							<li>
								<FontAwesomeIcon
									icon={item.icon}
									style={{ paddingRight: 10 }}
								/>
								{item.title}
							</li>
							<div>
								<FontAwesomeIcon
									icon={
										openMenus[index]
											? faAngleDown
											: faAngleRight
									}
									style={{ paddingRight: 10, width: 16 }}
								/>
							</div>
						</div>

						<div
							className={cls("list-item", {
								open: openMenus[index],
							})}
						>
							<ul>
								{item.items.map((list, idx) => (
									<li key={idx}>
										<NavLink
											to={list.path}
											className={({ isActive }) =>
												isActive ? cls("active") : ""
											}
										>
											{list.name}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					</ul>
				</div>
			))}
		</div>
	);
}

export default MenuList;
