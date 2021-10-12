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
      id,
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
      classroom
    } = student;
    const statement = `insert into ums_new_member values(?,?,?,?,?,?,?,?,?,?,?,?,?,now())`;

    const result = await connection.execute(statement, [
      id,
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
      classroom
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
    const statement1 = `update ums_new_member set status=? where student_id=?;`;
    const statement2 = `SELECT * FROM ums_new_member WHERE student_id=?;`;

    const result1 = await connection.execute(statement1, [status,student_id]);
    const result2 = await connection.execute(statement2,[student_id]);

    return result2[0];
  }
  
  async showCount() {
    const statement = `select count(*) from ums_new_member`;

    const result = await connection.execute(statement);

    return result[0];
  }

  async addId() {
    
  }
  
}

module.exports = new StudentService();
