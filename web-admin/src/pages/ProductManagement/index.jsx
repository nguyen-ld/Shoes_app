import classNames from "classnames/bind";
import style from "./Product.Module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPenToSquare,
	faTrash,
	faListUl,
} from "@fortawesome/free-solid-svg-icons";

import * as categoriesServices from "../../services/categoriesServices";
import * as productServices from "../../services/productServices";
import ModalEdit from "./ModalEdit";
import Modal from "../../components/ModalGlobal";
const cls = classNames.bind(style);

function ProductManagement() {
	const [itemCategories, setItemCategories] = useState([]);
	const [value, setValues] = useState(null);
	const [product, setProduct] = useState([]);

	const handleValue = (event) => {
		setValues(event.target.value);
	};

	useEffect(() => {
		const fetchApi = async () => {
			const result = await categoriesServices.ProductCategoriesList();
			setItemCategories(result);
			console.log(result);
		};
		fetchApi();
	}, []);

	useEffect(() => {
		if (!value) return;
		const fetchApiProduct = async () => {
			const result = await productServices.ProductList(value);
			setProduct(result);
			console.log(">>>Check Product List : ", result);
		};
		fetchApiProduct();
	}, [value]);

	const [open, setOpen] = useState(false);
	return (
		<div className={cls("container")}>
			<div className={cls("headers")}>
				<p>
					<FontAwesomeIcon
						icon={faListUl}
						style={{ paddingRight: 5 }}
					/>
					Danh sách sản phẩm
				</p>
				<div className={cls("dropdown-container")}>
					<select
						className={cls("custom-select")}
						defaultValue=""
						onChange={handleValue}
					>
						<option value="" disabled={true}>
							Chọn danh mục{" "}
						</option>
						{itemCategories.map((options, index) => {
							return (
								<option key={index} value={options._id}>
									{options.name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className={cls("content")}>
				<table border={1}>
					<thead className={cls("title-table")}>
						<tr>
							<th>ID sản phẩm</th>
							<th>Danh mục</th>
							<th>Ảnh sản phẩm</th>
							<th>Tên sản phẩm</th>
							<th>Giá sản phẩm</th>
							<th>Mô tả sản phẩm</th>
							<th>Thao tác</th>
						</tr>
					</thead>
					<tbody className={cls("container-items")}>
						{product.map((item, index) => {
							return (
								<tr key={index} className={cls("item-info")}>
									<td>{item._id}</td>
									<td>{item.id_categories.name}</td>
									<td>
										<img
											src={item.images}
											style={{ width: 80, height: 60 }}
										/>
									</td>
									<td>{item.name}</td>
									<td>{item.priceInitial}</td>
									<td>{item.describe}</td>
									<td>
										<div
											className={cls("container-action")}
										>
											<div
												className={cls("icon-update")}
												onClick={() => {
													setOpen(true);
												}}
											>
												<FontAwesomeIcon
													icon={faPenToSquare}
												/>
											</div>
											<div className={cls("icon-remove")}>
												<FontAwesomeIcon
													icon={faTrash}
												/>
											</div>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<ModalEdit isOpen={open} onClose={() => setOpen(!open)} />
			<Modal />
		</div>
	);
}

export default ProductManagement;
