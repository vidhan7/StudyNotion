const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                service:"gmail",
                
                auth:{
                    // user: process.env.MAIL_USER,
                    user: "a0073354abhi@gmail.com",
                    // pass: process.env.MAIL_PASS,
                    pass: "inlfmrmreufuzywa",
                }
            })

            let info = await transporter.sendMail({
                from: 'StudyNotion || CodeHelp - by Babbar',    //vidhanchaturvedi7@gmail.com
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;