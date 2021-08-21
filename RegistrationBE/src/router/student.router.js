const Router = require("koa-router");

const { showList } = require("../controller/student.controller");

const studentRouter = new Router({ prefix: "/student" });

studentRouter.post("/list", showList);

module.exports = studentRouter;
