const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");
const nodemailer = require("nodemailer");


const OTPSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
		unique: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},
});

// Define a function to send emails
async function sendVerificationEmail(email, otp) {				
	try {
		// Create a transporter to send emails
		let transporter = nodemailer.createTransport({
		  service: 'gmail',
		  auth: {
			user:  "a0073354abhi@gmail.com",
			pass: "inlfmrmreufuzywa",
		  },
		});
	
		// Define the email options
		let mailOptions = {
		  from: 'a0073354abhi@gmail.com',
		  to: email,
		  subject: 'Your OTP Code',
		  text: `Your OTP code is ${otp}`,
		};
	
		// Send email
		let response = await transporter.sendMail(mailOptions);
		// Log success
		console.log('Email sent: ' + response.response); // Check response here
	
		return response;
	  }
	   catch (error) {
		// Handle error more gracefully
		console.error('Error occurred while sending email:', error);
		return null;  // Return null or throw the error depending on how you want to handle it
	  }
}

// Define a post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function (next) {
	console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) 
		await sendVerificationEmail(this.email, this.otp);
	 
	next();
});


const OTP = mongoose.model("OTP", OTPSchema);
module.exports = OTP;