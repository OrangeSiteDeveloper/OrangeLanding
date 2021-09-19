const service = require("../service/email.service");
const emailUtil = require("../utils/email.js");

class EmailController {
  async sendEmail(ctx, next) {
    // 读写数据库
    const result = await service.sendEmail();
    // 根据status发送邮件
    for (var i = 0; i < result.length; ++i) {
      if (result[i].status == 1) {
        emailUtil.SendEmail(result[i].email, `同学您好，您已经报名成功！`);
      } else if (result[i].status == 2) {
        emailUtil.SendEmail(result[i].email, `同学您好，恭喜您通过初试`);
      } else if (result[i].status == 3) {
        emailUtil.SendEmail(result[i].email, `同学您好，恭喜您通过复试`);
      } else if (result[i].status == 4) {
        emailUtil.SendEmail(
          result[i].email,
          `同学您好，请确认是否加入橙果工作室`
        );
      }
    }
    // 返回给前端
    ctx.body = result;
  }
}

module.exports = new EmailController();
