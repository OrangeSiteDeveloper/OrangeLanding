const mysql = require('mysql2');

const config = require("./config");

const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: MYSQL_PASSWORD,
});

connections.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log("链接失败");
    } else {
      console.log("数据库链接成功");
    }
  });
});

module.exports = connections.promise();
