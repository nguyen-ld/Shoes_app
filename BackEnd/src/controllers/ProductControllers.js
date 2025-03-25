const modelProduct = require("../model/products");
const addProduct = async (req, res) => {
	try {
		const { file } = req;
		const IPAdress = process.env.IP_ADDRESS;
		const urlImages = `http://${IPAdress}:3000/uploads/${file.filename}`;
		const model = new modelProduct(req.body);
		model.images = urlImages;
		const result = await model.save();
		if (result) {
			res.json({
				status: 200,
				message: "Thêm thành công ",
				data: result,
			});
		} else {
			res.json({
				status: 404,
				message: "Thêm thất bại ",
				data: "",
			});
		}
	} catch (error) {
		console.log(error);
		res.json({
			status: 500,
			message: error.message,
		});
	}
};
const getListProductByCategories = async (req, res) => {
	try {
		const { id_categories } = req.params;
		const result = await modelProduct
			.find({ id_categories })
			.populate("id_categories");
		if (result.length === 0) {
			return res.json({
				status: 404,
				message: "Không có sản phẩm nào trong danh mục này ",
				data: [],
			});
		} else {
			res.json({
				status: 200,
				message: "Lấy danh sách thành công",
				data: result,
			});
		}
	} catch (error) {
		console.log(error);
		res.json({
			status: 500,
			message: error.message,
		});
	}
};
const getInfoProductById = async (req, res) => {
	try {
		const { id_product } = req.params;
		const result = await modelProduct.findOne({ _id: id_product });

		if (!result) {
			return res.json({
				status: 404,
				message: "ID không tồn tại",
				data: "",
			});
		}

		res.json({
			status: 200,
			message: "Lấy thông tin thành công",
			data: result,
		});
	} catch (error) {
		console.error(error);
		res.json({
			status: 500,
			message: error.message,
		});
	}
};

module.exports = {
	addProduct,
	getListProductByCategories,
	getInfoProductById,
};
