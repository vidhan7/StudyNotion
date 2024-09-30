const Razorpay = require("razorpay");


exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    // key_id: "rzp_test_E4Lf3w2xTtKzAY",
    key_secret: process.env.RAZORPAY_SECRET,
    // key_secret: "hpx11u0ORrWFyLCS6Dmli7z7",
});