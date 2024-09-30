const mongoose = require("mongoose");

// Define the Profile schema
const profileSchema = new mongoose.Schema({
	gender: {
		type: String,
		required: false,
	},
	dateOfBirth: {
		type: String,
		required: false,
	},
	about: {
		type: String,
		trim: true,
		required: false,
	},
	contactNumber: {
		type: Number,
		trim: true,
		required: false,
	},
});

// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);
