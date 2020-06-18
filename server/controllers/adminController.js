const dbConfig = require('../config/db');
// 管理员登录的接口
adminLogin = (req, res) => {
  const { username, password } = req.body;
  const sql =
    "select * from roles where username='" +
    username +
    "'and  password='" +
    password +
    "'";
  const sqlArr = [username, password];
  const callBack = (err, data) => {
    if (err) {
      res.send({
        status: 500,
      });
    } else {
      if (data.length <= 0) {
        res.send({
          meta: {
            status: 402,
          },
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
// 管理员查看所有用户信息
getAllUsers = (req, res) => {
  const { pagenum, pagesize } = req.body;
  const total = pagenum * pagesize;
  const sql = 'select * from users limit ' + total + ',' + pagesize;
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
        res.send({
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
// 管理员新增用户
addUser = (req, res) => {
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
            msg: '添加失败',
          },
        });
      } else {
        res.send({
          meta: {
            status: 201,
            msg: '添加成功',
          },
        });
      }
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};
// 管理员删除用户
deleteUser = (req, res) => {
  const { id } = req.body;
  const sql = "delete from users where id='" + id + "'";
  const sqlArr = [id];
  const callBack = (err, data) => {
    if (err) {
      res.send({
        meta: {
          status: 404,
        },
      });
    } else {
      res.send({
        meta: {
          status: 204,
          msg: '数据删除成功',
        },
      });
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};

module.exports = {
  adminLogin,
  getAllUsers,
  addUser,
  deleteUser,
};
