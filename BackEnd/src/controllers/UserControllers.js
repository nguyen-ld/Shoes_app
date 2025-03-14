const modelUser = require("../model/user");
const modelRefreshToken = require("../model/token");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const addUser = async (req, res) => {
	try {
		const { username, password } = req.body;
		const model = new modelUser(req.body);
		if (!(password.length >= 8 && password.length <= 16)) {
			res.json({
				status: 400,
				message: "Mật khẩu phải có độ dài tối đa từ 8 đến 16 kí tự ",
			});
		}
		model.password = await bcrypt.hash(password, 10);
		const result = await model.save();
		if (result) {
			res.json({
				status: 200,
				message: "Thêm user thành công",
				data: result,
			});
		} else {
			res.json({
				status: 404,
				message: "Thêm user thất bại ",
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
const addAddress = async (req, res) => {
	try {
		const { _id } = req.params;
		const { address } = req.body;
		const checkUser = await modelUser.findById(_id);
		if (!checkUser) {
			return res.status(400).json({
				status: 400,
				message: "User không tồn tại",
			});
		}

		const isDuplicate = checkUser.address.some(
			(addr) =>
				addr.street === address.street &&
				addr.city === address.city &&
				addr.district === address.district &&
				addr.ward === address.ward &&
				addr.fullname === address.fullname &&
				addr.numberphone === address.numberphone
		);

		if (isDuplicate) {
			return res.status(400).json({
				status: 400,
				message: "Địa chỉ này đã tồn tại!",
			});
		}
		console.log(_id);
		const result = await modelUser.findByIdAndUpdate(
			_id,
			{ $push: { address: address } },
			{ new: true }
		);

		if (result) {
			res.status(200).json({
				status: 200,
				message: "Thêm address thành công",
				data: result,
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "Thêm address thất bại",
				data: "",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: 500,
			message: error.message,
		});
	}
};
const deleteAddress = async (req, res) => {
	try {
		const { id_user, id_address } = req.params;

		const user = await modelUser.findById(id_user);
		if (!user) {
			return res.status(400).json({
				status: 400,
				message: "User không tồn tại!",
			});
		}

		const addressExists = user.address.some(
			(addr) => addr._id.toString() === id_address
		);
		if (!addressExists) {
			return res.status(400).json({
				status: 400,
				message: "Địa chỉ không tồn tại!",
			});
		}

		const result = await modelUser.findByIdAndUpdate(
			id_user,
			{ $pull: { address: { _id: id_address } } },
			{ new: true }
		);

		if (result) {
			res.status(200).json({
				status: 200,
				message: "Xóa address thành công",
				data: result,
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "Xóa address thất bại",
				data: "",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: 500,
			message: error.message,
		});
	}
};
const updateAddress = async (req, res) => {
	try {
		const { id_address, id_user } = req.params;
		const updates = req.body;
		let updateQuery = {};

		const checkUser = await modelUser.findOne({ _id: id_user });
		if (!checkUser) {
			return res.json({
				status: 400,
				message: "user không tồn tại ",
				type: "user",
			});
		}
		const addressExisting = checkUser.address.some(
			(add) => add._id.toString() === id_address
		);
		if (!addressExisting) {
			return res.status(400).json({
				status: 400,
				message: "Địa chỉ không tồn tại!",
				type: "address",
			});
		}
		const addressExistingPhone = checkUser.address.some(
			(add) => add.numberphone === updates.numberphone
		);
		if (addressExistingPhone) {
			return res.status(400).json({
				status: 400,
				message: "Số điện thoại đã được sử dụng!",
				type: "phone",
			});
		}
		for (let key in updates) {
			updateQuery[`address.$.${key}`] = updates[key];
		}
		const result = await modelUser.findOneAndUpdate(
			{ _id: id_user, "address._id": id_address },
			{ $set: updateQuery },
			{ new: true }
		);

		if (result) {
			res.status(200).json({
				status: 200,
				message: "Cập nhật address thành công",
				data: result,
			});
		} else {
			res.status(404).json({
				status: 404,
				message: "Cập nhật address thất bại",
				data: "",
			});
		}
	} catch (error) {
		console.log(500);
		res.json({
			status: 500,
			message: error.message,
		});
	}
};
const getListAddressByUser = async (req, res) => {
	try {
		const { id_user } = req.params;
		const result = await modelUser.findOne({ _id: id_user });
		if (result) {
			res.json({
				status: 200,
				message: "Lấy danh sách thành công ",
				data: result.address,
			});
		} else {
			res.json({
				status: 404,
				message: "Lấy danh sách thất bại ",
				data: [],
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
const getInfoUser = async (req, res) => {
	try {
		const { id_user } = req.params;
		const result = await modelUser.findOne({ _id: id_user });
		if (result) {
			res.json({
				status: 200,
				message: "Lấy thông tin thành công ",
				data: result,
			});
		} else {
			res.json({
				status: 400,
				message: "Lấy thông tin thất bại ",
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
const updateInfo = async (req, res) => {
	try {
		const { id_user } = req.params;
		const { fullname, numberphone, email, sex, date } = req.body;
		const checkUser = await modelUser.findOne({ _id: id_user });
		if (!checkUser) {
			res.json({
				status: 400,
				message: "user không tồn tại ",
			});
		}
		let updateData = {};
		if (fullname !== undefined && fullname !== null)
			updateData.fullname = fullname;
		if (email !== undefined && email !== null) updateData.email = email;
		if (numberphone !== undefined && numberphone !== null)
			updateData.numberphone = numberphone;
		if (sex !== undefined && sex !== null) updateData.sex = sex;
		if (date !== undefined && date !== null) updateData.date = date;
		const result = await modelUser.findByIdAndUpdate(
			{ _id: id_user },
			{ $set: updateData },
			{ new: true }
		);
		if (result) {
			res.json({
				status: 200,
				message: "update thành công",
				data: result,
			});
		} else {
			res.json({
				status: 404,
				message: "update thất bại ",
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
const infoAddressByUser = async (req, res) => {
	try {
		const { id_address } = req.params;

		console.log("ID nhận được:", id_address);
		// truy vấn ptu trong mảng thỏa mản dk
		const result = await modelUser.findOne(
			{ "address._id": id_address },
			{ address: { $elemMatch: { _id: id_address } } }
		);

		if (result && result.address.length > 0) {
			res.json({
				status: 200,
				message: "Lấy thông tin thành công",
				data: result.address[0],
			});
		} else {
			res.json({
				status: 404,
				message: "Không tìm thấy địa chỉ",
				data: null,
			});
		}
	} catch (error) {
		console.error("🔥 Lỗi khi lấy địa chỉ:", error);
		res.status(500).json({
			status: 500,
			message: "Lỗi server",
		});
	}
};

const Login = async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await modelUser.findOne({ username });

		if (!user) {
			return res.status(404).json({
				message: "Tên đăng nhập không hợp lệ",
				type: user,
			});
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({
				message: "Mật khẩu không hợp lệ",
				type: "pass",
			});
		}

		const keyAccessToken = process.env.SECRET_KEY;
		const keyRefeshToken = process.env.JWT_REFRESH_SECRET_KEY;

		await modelRefreshToken.deleteMany({ id_user: user._id });

		if (user && isMatch) {
			const token = jwt.sign(
				{
					id: user._id,
					username: username,
				},
				keyAccessToken,
				{
					expiresIn: "30s",
				}
			);
			const refreshToken = jwt.sign(
				{
					id: user._id,
					username: username,
				},
				keyRefeshToken,
				{
					expiresIn: "60d",
				}
			);
			await modelRefreshToken.create({
				id_user: user._id,
				refreshToken: refreshToken,
			});

			res.cookie("refreshToken", refreshToken, {
				httpOnly: true,
				secure: false,
				path: "/",
				sameSite: "strict",
			});
			const { password, ...others } = user._doc;
			res.json({
				status: 200,
				message: "Login thành công",
				data: {
					...others,
					accessToken: token,
				},
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: error.message,
		});
	}
};
const requestRefreshToken = async (req, res) => {
	try {
		const refreshTokens = req.cookies.refreshToken;

		if (!refreshTokens) {
			return res.status(401).json({ message: "Bạn chưa đăng nhập" });
		}

		const checkRefreshToken = await modelRefreshToken.findOne({
			refreshToken: refreshTokens,
		});
		if (!checkRefreshToken) {
			return res
				.status(403)
				.json({ message: "RefreshToken hết hạn hoặc không hợp lệ" });
		}

		jwt.verify(
			refreshTokens,
			process.env.JWT_REFRESH_SECRET_KEY,
			async (err, user) => {
				if (err) {
					return res
						.status(403)
						.json({ message: "Token không hợp lệ" });
				}

				const newAccessToken = jwt.sign(
					{ id: user.id, username: user.username },
					process.env.SECRET_KEY,
					{ expiresIn: "1d" }
				);

				const newRefreshToken = jwt.sign(
					{ id: user.id, username: user.username },
					process.env.JWT_REFRESH_SECRET_KEY,
					{ expiresIn: "60d" }
				);

				await modelRefreshToken.findOneAndUpdate(
					{ refreshToken: refreshTokens },
					{ refreshToken: newRefreshToken },
					{ new: true }
				);

				res.cookie("refreshToken", newRefreshToken, {
					httpOnly: true,
					secure: false,
					path: "/",
					sameSite: "strict",
				});

				res.status(200).json({ accessToken: newAccessToken });
			}
		);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Lỗi server" });
	}
};

const register = async (req, res) => {
	try {
		const { username, password, confirmPassword } = req.body;
		const checkExistUser = await modelUser.find();

		const existing = checkExistUser.find((user) => {
			return user.username === username;
		});
		if (existing) {
			return res.json({
				status: 400,
				message: "username đã tồn tại ",
			});
		}
		if (!(password.length >= 8 && password.length <= 16)) {
			return res.json({
				status: 400,
				message: "Độ dài mật khẩu phải từ 8 đến 16 kí tự ",
			});
		}

		if (password !== confirmPassword) {
			return res.status(400).json({
				status: 400,
				message: "Mật khẩu xác nhận không khớp ",
			});
		}
		const model = new modelUser(req.body);
		model.password = await bcrypt.hash(password, 10);
		const result = model.save();
		if (result) {
			res.json({
				status: 200,
				message: "Tạo tài khoản thành công ",
				data: { username, password },
			});
		} else {
			res.json({
				status: 404,
				message: "Tạo tài khoản thất bại ",
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
const changePassword = async (req, res) => {
	try {
		const { id_user } = req.params;
		const { passwordOld, passwordNew, conFirmPasswordNew } = req.body;

		const user = await modelUser.findById(id_user);
		if (!user) {
			return res.status(404).json({
				status: 404,
				message: "Người dùng không tồn tại",
			});
		}

		const isMatch = await bcrypt.compare(passwordOld, user.password);
		if (!isMatch) {
			return res.status(400).json({
				status: 400,
				message: "Mật khẩu cũ không đúng",
				type: "passOld",
			});
		}

		const isRepeat = await bcrypt.compare(passwordNew, user.password);
		if (isRepeat) {
			return res.status(400).json({
				status: 400,
				message: "Mật khẩu mới không được trùng với mật khẩu cũ",
				type: "repeat",
			});
		}

		if (passwordNew.length < 8 || passwordNew.length > 16) {
			return res.status(400).json({
				status: 400,
				message: "Độ dài mật khẩu phải từ 8 đến 16 ký tự",
				type: "length",
			});
		}

		const strongPassword =
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
		if (!strongPassword.test(passwordNew)) {
			return res.status(400).json({
				status: 400,
				message:
					"Mật khẩu phải chứa ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt",
				type: "weak_password",
			});
		}

		if (passwordNew !== conFirmPasswordNew) {
			return res.status(400).json({
				status: 400,
				message: "Mật khẩu xác nhận không khớp",
				type: "confirm",
			});
		}

		const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
		const hashedPassword = await bcrypt.hash(passwordNew, saltRounds);

		const updatedUser = await modelUser.findByIdAndUpdate(
			id_user,
			{ password: hashedPassword },
			{ new: true }
		);

		if (updatedUser) {
			return res.status(200).json({
				status: 200,
				message: "Đổi mật khẩu thành công",
				data: updatedUser,
			});
		} else {
			return res.status(500).json({
				status: 500,
				message: "Đổi mật khẩu thất bại",
			});
		}
	} catch (error) {
		console.error("Lỗi khi đổi mật khẩu:", error);
		return res.status(500).json({
			status: 500,
			message: "Lỗi máy chủ, vui lòng thử lại sau",
		});
	}
};

module.exports = {
	addUser,
	addAddress,
	deleteAddress,
	updateAddress,
	getListAddressByUser,
	getInfoUser,
	updateInfo,
	infoAddressByUser,
	Login,
	register,
	changePassword,
	requestRefreshToken,
};
