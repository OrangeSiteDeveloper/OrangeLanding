const Router = require("koa-router");

const { sendEmail } = require("../controller/email.controller");

const emailRouter = new Router({ prefix: "/email" });

emailRouter.get("/send", sendEmail);

module.exports = emailRouter;
