const connection = require("../app/database");

class StudentService {
  async showList() {
    const statement = `SELECT * FROM ums_new_member;`;

    const result = await connection.execute(statement);

    console.log(result[0]);
  }

  async addStu(student) {
    console.log(student);
    const {
      student_id,
      user_name,
      gender,
      major,
      phone,
      qq,
      email,
      group,
      department,
      intro,
      status,
    } = student;
    const statement = `insert into ums_new_member values(?,?,?,?,?,?,?,?,?,?,?,now())`;

    const result = await connection.execute(statement, [
      student_id,
      user_name,
      gender,
      major,
      phone,
      qq,
      email,
      group,
      department,
      intro,
      status,
    ]);
    // 将student存储大奥数据库中
    return result[0];
  }

  async selectStu(student_id) {
    const statement = `SELECT * FROM ums_new_member WHERE student_id=?;`;

    const result = await connection.execute(statement, [student_id]);

    return result[0];
  }

  async confirmStu(student_id,status) {
    const statement = `update ums_new_member set status=? where student_id=?;`;

    const result = await connection.execute(statement, [status,student_id]);

    return result[0];
  }
  
  async showCount() {
    const statement = `select count(*) from ums_new_member`;

    const result = await connection.execute(statement);

    return result[0];
  }
  
}

module.exports = new StudentService();
