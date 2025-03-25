import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./ModalEdit.module.scss";
import Input from "../../../components/Input";
const cls = classNames.bind(styles);

function ModalEdit({ isOpen, onClose }) {
	if (!isOpen) {
		return null;
	}
	return (
		<div className={cls("modal-overlay")}>
			<div className={cls("modal-content")}>
				<div className={cls("header-modal")}>
					<p>Sửa sản phẩm</p>
					<FontAwesomeIcon icon={faXmark} onClick={onClose} />
				</div>
				<div className={cls("input-content")}>
					<div className={cls("input-group")}>
						<div className={cls("input-left")}>
							<Input isInput={true} label="Tên sản phẩm" />
						</div>
						<div className={cls("input-right")}>
							<Input isInput={true} label="Giá sản phẩm" />
						</div>
					</div>
					<Input isInput={true} label="Mô tả" />
					<div className={cls("input")}>
						<Input isInput={true} type="file" label="Hình ảnh" />
						<div>
							<img src="#" alt="" />
						</div>
					</div>
					<div className={cls("btn-edit")}>
						<button>
							<FontAwesomeIcon
								icon={faFileArrowDown}
								style={{ paddingRight: 5 }}
							/>
							Lưu
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalEdit;
