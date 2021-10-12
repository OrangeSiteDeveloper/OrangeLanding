const service = require("../service/email.service");
const emailUtil = require("../utils/email.js");

class EmailController {
  async sendEmail(ctx, next) {
    // 读写数据库
    const result = await service.sendEmail();
    // 根据status发送邮件
    for (var i = 0; i < result.length; ++i) {
      if (result[i].status == 1) {
        emailUtil.SendEmail(
          result[i].email,
          `亲爱的同学，您好！

        ​		很荣幸通知您：您将于2021年10月4日晚18：00~22：30参加我们的第一次面试，具体地点为${result[i].classroom}，您的面试ID为：${result[i].id}。
        
        ​		祝您面试顺利！
        
        ​		橙果工作室
        
        ​		2021年10月4日`
        );
      } else if (result[i].status == 21) {
        emailUtil.SendEmail(
          result[i].email,
          `亲爱的${result[i].user_name}同学，您好！

        我们很开心的通知您：初试通过啦~ 您对自我的全方位展示给我们留下了深刻印象，我们将持续关注您后续的精彩表现。希望未来的复试您可以做好充足的准备，我们期待着您更优秀的表现~
        
        下面是我们的二面群，请及时加入自己报名的小组和部门：

        网站组：1015800208
        程序设计组：531242154
        嵌入式组：972527022
        硬件组：813432059
        大数据组：622048360

        秘书部：1016856108
        宣传部：150718223
        学习部：977538180
        外联部：150404089
        
        祝顺利~

        橙果工作室`
        );
      } else if (result[i].status == 22) {
        emailUtil.SendEmail(
          result[i].email,
          `亲爱的${result[i].user_name}同学，您好！

        您的学识和资历给我们留下了深刻的印象，但遗憾的是，您的有些地方不太符合我们的要求，因此暂时没有机会与您合作。
        
        我们已经将您的资料记载了小本本er上，希望今后能再次与您相遇，再次感谢您对我们的信任与支持。
        
        顺祝学安！
        
        橙果工作室`
        );
      } else if (result[i].status == 31) {
        emailUtil.SendEmail(
          result[i].email,
          `亲爱的${result[i].user_name}同学，您好！

        我们很开心的通知您：复试通过！（包括小组和部门,如果只报名了小组那就是小组通过）您距离加入橙果只有一步之遥啦~请您等待确认通知（我们将会拉你们进群），通知之后您只需要去纳新主页 -> 查看录取进度 点击“确认加入”即可成为工作室的正式成员~如果同学对复试结果不满意的话，也要去点击拒绝加入哦 ~ 我们将为您送上诚挚的祝福~
        
        顺祝学安！
        
        橙果工作室`
        );
      } else if (result[i].status == 32) {
        emailUtil.SendEmail(
          result[i].email,
          `亲爱的${result[i].user_name}同学，您好！

        我们很开心的通知您：复试通过！但是只过了小组。。。您距离加入橙果只有一步之遥啦~请您等待确认通知（我们将会拉你们进群），通知之后您只需要去纳新主页 -> 查看录取进度 点击“确认加入”即可成为工作室的正式成员~如果同学对复试结果不满意的话，也要去点击拒绝加入哦 ~ 我们将为您送上诚挚的祝福~
        
        顺祝学安！
        
        橙果工作室`
        );
      } else if (result[i].status == 33) {
        emailUtil.SendEmail(
          result[i].email,
          `亲爱的${result[i].user_name}同学，您好！

        感谢您关注橙果工作室并参与我们2021年度第一次纳新！
        
        在历时半月的纳新历程中，您的学识和资历给我们留下了深刻的印象。但遗憾的是，您意向的小组/部门 的要求与您实际情况不太符合，暂时没有机会与您合作。
        
        我们已经将您的资料记载了小本本er上，希望今后能再次与您相遇，再次感谢您对我们的信任与支持。
        
        顺祝学安！
        
        橙果工作室`
        );
      } else if (result[i].status == 4) {
        emailUtil.SendEmail(
          result[i].email,
          `同学您好，网站状态已经更新，请去纳新状态查询页面确认是否加入橙果工作室`
        );
      }
    }
    // 返回给前端
    ctx.body = result;
  }
}

module.exports = new EmailController();
