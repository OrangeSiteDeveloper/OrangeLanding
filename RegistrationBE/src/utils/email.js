const nodeemailer = require("nodemailer");

const transporter = nodeemailer.createTransport({
  host: "smtp.qq.com",
  secureConnection: true,
  port: 465,
  secure: true,
  auth: {
    user: "295854713@qq.com",
    pass: "nvmwhdwtxvqdbjjc",
  }
});

const mailOptions = {
  from: "295854713@qq.com",
  to: "2448982514@qq.com",
  subject: "hello world",
  text: `
        console.log("hello 彪哥")
    `,
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("邮件发送：" + info.response);
  }
});
