const connection = require("../app/database");

class EmailService {
  async sendEmail() {

    const statement = `SELECT id,user_name,email,status,classroom FROM ums_new_member;`;
    // 丛数据库获取到数据
    const result = await connection.execute(statement);
    // 在后端打印一下
    console.log(result[0])
    return result[0]
  }
}

module.exports = new EmailService();
