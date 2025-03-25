const modelUser = require("../model/user");
const bcrypt = require("bcrypt");

const handleRamdom = (limit) => {
	const digist = "0123456789";
	let OTP = "";
	for (let i = 0; i < limit; i++) {
		OTP += digist[Math.floor(Math.random() * 10)];
	}
	return OTP;
};
const sendOTP = async (req, res) => {
	try {
		const { email } = req.body;

		const validEmail =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		if (!validEmail.test(email)) {
			return res.status(400).json({
				status: 400,
				message: "email không hợp lệ ",
			});
		}

		const checkMail = await modelUser.findOne({ email });
		if (!checkMail) {
			return res.status(400).json({
				status: 400,
				message: "email không tồn tại ",
			});
		}
		const OTPExpires = Date.now() + 5 * 60 * 1000;
		const OTP = handleRamdom(6);

		const hashOTP = await bcrypt.hash(OTP, 10);

		checkMail.otp = hashOTP;
		checkMail.otpExpires = OTPExpires;
		await checkMail.save();

		return res.status(200).json({
			status: 200,
			message: "gửi OTP thành công",
			data: { OTP, OTPExpires },
		});
	} catch (error) {
		console.log(error);
		res.json({
			status: 500,
			message: error.message,
		});
	}
};
const verifyOTP = async (req, res) => {
	try {
		const { otp, email } = req.body;
		const user = await modelUser.findOne({ email });
		if (!user) {
			return res.status(400).json({
				status: 400,
				message: "email không tồn tại ",
			});
		}
		if (!user.otpExpires || Date.now() > user.otpExpires) {
			return res.status(400).json({
				status: 400,
				message: "OTP đã hết hạn",
			});
		}
		const isMatch = await bcrypt.compare(otp, user.otp);
		if (!isMatch) {
			return res.status(400).json({
				status: 400,
				message: "OTP không đúng",
			});
		}
		// user.otp = null;
		// user.otpExpires = null;
		// await user.save();

		return res.status(200).json({
			status: 200,
			message: "Xác thực OTP thành công",
		});
	} catch (error) {
		console.log(error);
		res.json({
			status: 500,
			message: error.message,
		});
	}
};
module.exports = { sendOTP, verifyOTP };
