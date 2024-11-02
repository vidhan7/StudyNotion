const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

exports.resetPasswordToken = async (req, res) => {
	try {
		//get email from req body 
		const email = req.body.email;
		//check user for this email, email validation
		console.log("EMAIL", email);
		const user = await User.findOne({ email: email });
		if (!user) {
			return res.json({
				success: false,
				message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
			});
		}
		//generate token
		const token = crypto.randomBytes(20).toString("hex");
		// const token = crypto.randomUUID();

		const updatedDetails = await User.findOneAndUpdate(
			{ email: email },								//search on bases of email
			{												//update this
				token: token,
				resetPasswordExpires: Date.now() + 5 * 60 * 1000,
			},
			{ new: true }									//return updated document
		);
		console.log("DETAILS", updatedDetails);
		//create url
		const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";
		const url = `${FRONTEND_URL}/update-password/${token}`;

		//send mail containing reset link
		await mailSender(
			email,
			"Password Reset",
			`Your Link for email verification is ${url}. Please click this url to reset your password.`
		);
		//return response
		res.json({
			success: true,
			message:
				"Email Sent Successfully, Please Check Your Email to Continue Further",
		});
	}
	catch (error) {
		console.log(error);
		return res.status(500).json({
			error: error.message,
			success: false,
			message: `Some Error in Sending the Reset Message`,
		});
	}
};

exports.resetPassword = async (req, res) => {
	try {
		//fetch data
		const { password, confirmPassword, token } = req.body;
		//validation
		if (confirmPassword !== password) {
			return res.json({
				success: false,
				message: "Password and Confirm Password Does not Match",
			});
		}
		//get userdeatils from db using token
		const userDetails = await User.findOne({ token: token });
		//if no entry , invalid token`
		if (!userDetails) {
			return res.json({
				success: false,
				message: "Token is Invalid",
			});
		}
		if ((userDetails.resetPasswordExpires < Date.now())) {
			return res.status(403).json({
				success: false,
				message: `Token is Expired, Please Regenerate Your Token`,
			});
		}
		//hash password
		const encryptedPassword = await bcrypt.hash(password, 10);
		//update password
		await User.findOneAndUpdate(
			{ token: token },
			{ password: encryptedPassword },
			{ new: true }
		);
		//return response
		return res.status(200).json({
			success: true,
			message: `Password Reset Successful`,
		});
	}
	catch (error) {
		return res.json({
			error: error.message,
			success: false,
			message: `Some Error in Updating the Password`,
		});
	}
};