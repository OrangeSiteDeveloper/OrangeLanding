const service = require("../service/student.service");
const emailUtil = require("../utils/email.js");

class StudentController {
  async showList(ctx, next) {
    // 获取用户请求传递的参数
    // const student = ctx.request.body;
    //查询数据库
    const result = await service.showList();
    //返回数据
    ctx.body = result;
  }

  async addStu(ctx, next) {
    // 获取用户请求传递的参数
    const student = ctx.request.body;
    const { email } = student;
    //查询数据库
    const result = await service.addStu(student);
    //返回数据
    emailUtil.SendEmail(
      email,
      `亲爱的同学，您好！

    感谢您对我们的信任和支持，未来两周您将会经过两次面试，为了让您胸有成竹地参加面试。下面将为您做简单介绍。
    
    无情的第一次面试。初试考察的是“第一印象”，您将通过自我介绍来向面试官展示自己个性和优势。可以说专业知识，也可以讲讲个性特点、兴趣爱好等等，内容不限。面试时长最好为3min/人。
    
    一次长跑——复试。复试为期一周左右，届时，您会收到由小组发出的学习任务，经过为期一周的自学之后会对您的学习成果进行一次考核以检验学习能力。至于部门，将会考察您的综合素质。
    
    初试和复试的时间和地点会在 2021纳新群中通知，群号：928898047，请及时关注。
    
    最后，希望您积极准备，我们期待您的精彩表现！
    
    祝顺利~
    
    橙果工作室`
    );
    // console.log(result);
    ctx.body = result;
  }
  async selectStu(ctx, next) {
    // 获取用户请求传递的参数
    const { student_id } = ctx.request.body;
    //查询数据库
    const result = await service.selectStu(student_id);
    //返回数据
    console.log(result);
    ctx.body = result;
  }
  async confirmStu(ctx, next) {
    // 获取用户请求传递的参数
    const { student_id, status } = ctx.request.body;
    console.log(ctx.request.body);
    //查询数据库
    const result = await service.confirmStu(student_id, status);
    console.log(result[0])
    if (status == 41) {
      emailUtil.SendEmail(
        result[0].email,
        `亲爱的${result[0].user_name}同学，您好！
  
        感谢您对我们坚定的选择，橙果工作室也将选择您。希望未来四年，能和您一起走过许多阳光明媚的日子~
        
        顺祝学安！
        
        橙果工作室`
      );
    } else if (status == 42) {
      emailUtil.SendEmail(
        result[0].email,
        `亲爱的${result[0].user_name}同学，您好！

        感谢您关注橙果工作室并参与我们2021年度第一次纳新！您的学识和涵养给我们留下了深刻的印象，但这是一次双向的选择。对于您的放弃我们深表遗憾，但仍要再次感谢您曾经的选择，期待我们的下一次相遇。
        
        顺祝学安！
        
        橙果工作室`
      );
    }

    //返回数据
    ctx.body = result;
  }

  async showCount(ctx, next) {
    //查询数据库
    const result = await service.showCount();
    //返回数据
    ctx.body = result;
  }

  async addId(ctx, next) {
    const result = await service.addId();

    ctx.body = result;
  }
}

module.exports = new StudentController();
