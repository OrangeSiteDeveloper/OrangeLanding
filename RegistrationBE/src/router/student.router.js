const Router = require("koa-router");

const {
  showList,
  addStu,
  selectStu,
  confirmStu
} = require("../controller/student.controller");

const studentRouter = new Router({ prefix: "/student" });

studentRouter.get("/list", showList);
studentRouter.post("/add", addStu);
studentRouter.post("/select", selectStu);
studentRouter.post("/confirm", confirmStu);

module.exports = studentRouter;
