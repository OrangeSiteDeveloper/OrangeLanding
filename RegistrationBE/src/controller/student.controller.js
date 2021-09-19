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
    emailUtil.SendEmail(email);
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
    const { student_id,status } = ctx.request.body;
    console.log(ctx.request.body)
    //查询数据库
    const result = await service.confirmStu(student_id,status);
    //返回数据
    ctx.body = result;
  }
}

module.exports = new StudentController();
