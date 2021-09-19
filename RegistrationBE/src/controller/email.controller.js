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
      } else if (result[i].status == 21) {
        emailUtil.SendEmail(result[i].email, `同学您好，恭喜您通过初试`);
      } else if (result[i].status == 22) {
        emailUtil.SendEmail(result[i].email, `同学您好，很遗憾您没有通过初试`);
      } else if (result[i].status == 31) {
        emailUtil.SendEmail(result[i].email, `同学您好，恭喜您通过复试`);
      } else if (result[i].status == 32) {
        emailUtil.SendEmail(result[i].email, `同学您好，您没有完全通过复试`);
      } else if (result[i].status == 33) {
        emailUtil.SendEmail(result[i].email, `同学您好，很遗憾您没有通过复试`);
      } else if (result[i].status == 4) {
        emailUtil.SendEmail(
          result[i].email,
          `同学您好，网站状态已经更新，请去纳新状态查询页面确认是否加入橙果工作室`
        );
      }
      else if (result[i].status == 41) {
        emailUtil.SendEmail(
          result[i].email,
          `同学您好，收到了我们的offer`
        );
      }
      else if (result[i].status == 42) {
        emailUtil.SendEmail(
          result[i].email,
          `同学您好，虽然您没有选择加入我们，但是还是感谢您`
        );
      }
    }
    // 返回给前端
    ctx.body = result;
  }
}

module.exports = new EmailController();
