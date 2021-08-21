const service = require("../service/student.service");

class StudentController {
  async showList(ctx, next) {
    // 获取用户请求传递的参数
    const student = ctx.request.body;
    //查询数据库
    const result = await service.showList(student);
    //返回数据
    console.log(result);
    ctx.body = result;
  }
}

module.exports = new StudentController();
