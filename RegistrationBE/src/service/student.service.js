class StudentService {
  async showList(student) {
    console.log(student);

    const students = [
      {
        name: "zhangsan",
        group: "website",
      },
      {
        name: "lisi",
        group: "hardware",
      },
    ];

    return students;
  }
}

module.exports = new StudentService();
