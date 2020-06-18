const dbConfig = require('../config/db');

// 用户登录
login = (req, res) => {
  const { username, password } = req.body;
  const sql =
    "select * from users where username='" +
    username +
    "'  and  password='" +
    password +
    "'";
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      res.send({
        meta: {
          status: 500,
        },
      });
    } else {
      if (data.length <= 0) {
        res.send({
          meta: { status: 402 },
        });
      } else {
        res.send({
          data,
          meta: {
            status: 200,
            msg: '登录成功',
          },
        });
      }
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};
// 用户注册接口
reg = (req, res) => {
  const { username, password, sex, phone, birth, reg, follow } = req.body;
  // 获取当前时间
  const sql =
    "insert into users (username,password,sex, phone, birth, reg, follow) values('" +
    username +
    "','" +
    password +
    "','" +
    sex +
    "','" +
    phone +
    "','" +
    birth +
    "','" +
    reg +
    "','" +
    follow +
    "')";
  const sqlArr = [username, password, sex, phone, birth, reg, follow];
  const callBack = (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length <= 0) {
        res.send({
          meta: {
            status: 402,
            msg: '注册失败',
          },
        });
      } else {
        res.send({
          meta: {
            status: 201,
            msg: '注册成功',
          },
        });
      }
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};

module.exports = { login, reg };
