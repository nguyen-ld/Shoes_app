import classNames from "classnames/bind";
import styles from "./AddProduct.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFileArrowDown,
	faRectangleXmark,
	faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import * as categoriesServices from "../../services/categoriesServices";
import Input from "../../components/Input";
import { useState, useEffect } from "react";
const cls = classNames.bind(styles);

function AddProduct() {
	const [avatar, setAvatar] = useState();
	const [categories, setCategories] = useState([]);
	const handlePreviewAvatar = (e) => {
		const file = e.target.files[0];
		file.preview = URL.createObjectURL(file);
		setAvatar(file);
	};

	useEffect(() => {
		const fetchApi = async () => {
			const result = await categoriesServices.ProductCategoriesList();
			setCategories(result);
			console.log(result);
		};
		fetchApi();
	}, []);

	return (
		<div className={cls("container")}>
			<div className={cls("headers-add-product")}>
				<p>
					<FontAwesomeIcon
						icon={faSquarePlus}
						style={{ paddingRight: 10 }}
					/>
					Thêm sản phẩm
				</p>
			</div>
			<div className={cls("group-button")}>
				<div className={cls("button-save")}>
					<button>
						<FontAwesomeIcon
							icon={faFileArrowDown}
							style={{ paddingRight: 5 }}
						/>
						Lưu
					</button>
				</div>
				<div className={cls("button-cancel")}>
					<button>
						<FontAwesomeIcon
							icon={faRectangleXmark}
							style={{ marginRight: 5 }}
						/>
						Hủy
					</button>
				</div>
			</div>
			<div className={cls("content-input")}>
				<div className={cls("content-left")}>
					<Input
						label="Tên sản phẩm"
						type="text"
						placeholder="Nhập tên sản phẩm"
						isInput={true}
					/>
					<Input
						label="Giá sản phẩm"
						type="number"
						placeholder="Nhập giá sản phẩm "
						isInput={true}
					/>
					<Input
						isInput={false}
						label="Mô tả"
						placeholder="Nhập mô tả sản phẩm "
					/>
				</div>
				<div className={cls("content-right")}>
					<div>
						<Input
							label="Hình ảnh"
							type="file"
							isInput={true}
							onChange={handlePreviewAvatar}
						/>
						{avatar && (
							<img
								src={avatar.preview}
								style={{ width: 180, height: 130 }}
								alt=""
							/>
						)}
					</div>
					<label>Danh mục </label>
					<br />
					<select className={cls("select-categories")}>
						<option defaultValue={true} disabled>
							Chọn danh mục
						</option>
						{categories?.length > 0 ? (
							categories.map((item, index) => (
								<option key={index} value={item.id}>
									{item.name}
								</option>
							))
						) : (
							<option>Không có danh mục</option>
						)}
					</select>
				</div>
			</div>
		</div>
	);
}

export default AddProduct;
