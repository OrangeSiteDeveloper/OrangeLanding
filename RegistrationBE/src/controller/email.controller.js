const service = require("../service/email.service");
const emailUtil = require("../utils/email.js");

class EmailController {
  async sendEmail(ctx, next) {
    // 读写数据库
    const result = await service.sendEmail();
    // 根据status发送邮件
    for (var i = 0; i < result.length; ++i) {
      if (result[i].status == 1) {
        emailUtil.SendEmail(result[i].email, `亲爱的同学，您好！

        感谢您对我们的信任和支持，未来两周您将会经过两次面试，为了让您胸有成竹地参加面试。下面将为您做简单介绍。
        
        无情的第一次面试。初试考察的是“第一印象”，大家通过自我介绍来向面试官展示自己个性和优势。可以说专业知识，也可以讲讲个性特点、兴趣爱好等等，内容不限。面试时长最好为3min/人。
        
        一次长跑——复试。复试为期一周左右，大家会收到由小组发出的学习任务，经过为期一周的自学之后会对大家学习成果进行一次考核以检验大家的学习能力。
        
        初试和复试的时间和地点会在 2021纳新群中通知，群号：928898047，请及时关注。
        
        最后，希望您积极准备，我们期待您的精彩表现！
        
        祝顺利~
        
        橙果工作室`);
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
