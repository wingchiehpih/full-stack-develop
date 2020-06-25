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
// 排行榜数据
collect = (req, res) => {
  const sql = 'SELECT * FROM goods ORDER BY score DESC LIMIT 10';
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length <= 0) {
        res.send({
          meta: {
            status: 402,
            msg: '获取失败',
          },
        });
      } else {
        res.send({
          data,
          meta: {
            status: 200,
            msg: '获取成功',
          },
        });
      }
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};
// 收藏列表
collects = (req, res) => {
  const { username, collect } = req.body;
  const sql =
    "insert into user_collects (username,collect) values('" +
    username +
    "','" +
    collect +
    "')";
  const sqlArr = [username, collect];
  const callBack = (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length <= 0) {
        return res.send({
          meta: {
            status: 402,
            msg: '收藏失败',
          },
        });
      } else {
        res.send({
          meta: {
            status: 201,
            msg: '收藏成功',
          },
        });
      }
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};
// 取消收藏
unCollects = (req, res) => {
  const { username, collect } = req.body;
  const sql =
    "delete from user_collects where username='" +
    username +
    "' and collect='" +
    collect +
    "'";
  const sqlArr = [username, collect];
  const callBack = (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length <= 0) {
        return res.send({
          meta: {
            status: 402,
            msg: '删除失败',
          },
        });
      } else {
        res.send({
          meta: {
            status: 201,
            msg: '删除成功',
          },
        });
      }
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};
// 查看收藏列表
getCollects = (req, res) => {
  const { username, collect } = req.body;
  const sql = "select * from user_collects where username='" + username + "'";
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      res.send({
        sql,
        meta: {
          status: 404,
          msg: '数据查询失败',
        },
      });
    } else {
      if (data.length <= 0) {
        return res.send({
          meta: {
            status: 402,
          },
        });
      }
      res.send({
        data,
        meta: {
          status: 200,
          msg: '数据查询成功',
        },
      });
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};
// 收藏记录
module.exports = { login, reg, collect, collects, unCollects, getCollects };
