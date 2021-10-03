const Router = require("koa-router");

const {
  showList,
  showCount,
  addStu,
  selectStu,
  confirmStu,
  addId
} = require("../controller/student.controller");

const studentRouter = new Router({ prefix: "/student" });

studentRouter.get("/list", showList);
studentRouter.get("/count", showCount);
studentRouter.post("/add", addStu);
studentRouter.post("/select", selectStu);
studentRouter.post("/confirm", confirmStu);
studentRouter.post("/addId", addId);

module.exports = studentRouter;
