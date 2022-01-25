const nodemailer = require("nodemailer");


exports.main=async (options)=>{
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: process.env.service,
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
      }
    });
    
    await transporter.sendMail({
      from: process.env.USER, // sender address
      to: options.email, // list of receivers
        subject: options.subject, // Subject line
      text: options.message, // html body
    });
}
