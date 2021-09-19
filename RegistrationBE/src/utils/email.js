const nodeemailer = require("nodemailer");

class Email {
  SendEmail(toEmail, textInfo) {
    const transporter = nodeemailer.createTransport({
      host: "smtp.qq.com",
      secureConnection: true,
      port: 465,
      secure: true,
      auth: {
        user: "295854713@qq.com",
        pass: "nvmwhdwtxvqdbjjc",
      },
    });

    const mailOptions = {
      from: "295854713@qq.com",
      to: toEmail,
      subject: "橙果工作室通知",
      text: textInfo,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("邮件发送：" + info.response);
      }
    });
  }
}

module.exports = new Email();
