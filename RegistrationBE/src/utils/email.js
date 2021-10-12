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
        pass: "njkbmhsapbzybiah",
      },
    });

    const mailOptions = {
      from: "295854713@qq.com",
      to: toEmail,
      subject: "橙果工作室2021年纳新报名成功通知",
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
