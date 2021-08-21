const Koa = require("koa");
const bodyparser = require("koa-bodyparser");

const useRoutes = require("../router");

const app = new Koa();

app.useRoutes = useRoutes;

app.use(bodyparser());
app.useRoutes();

module.exports = app;
