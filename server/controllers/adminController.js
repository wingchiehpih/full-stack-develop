const dbConfig = require('../config/db');

// 测试接口
getAdmin = (req, res) => {
  const sql = 'select * from roles';
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      console.log('连接错误');
    } else {
      res.send({
        list: data,
      });
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};

// 管理员查看所有用户信息
getAllUsers = (req, res) => {
  const sql = 'select * from users';
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      console.log('连接错误');
    } else {
      res.send({
        status: '200',
        msg: '数据查询成功',
      });
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};

// 管理员登录的接口
getAdminLogin = (req, res) => {
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
      console.log('连接错误');
    } else {
      if (data.length <= 0) {
        res.send({
          status: '402',
          msg: '登录失败',
        });
      } else {
        res.send({
          status: '200',
          msg: '登录成功',
        });
      }
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};

// 管理员删除用户
deleteUser = (req, res) => {
  const { phone } = req.query;
  const sql = "delete from users where phone='" + phone + "'";
  const sqlArr = [phone];
  const callBack = (err, data) => {
    if (err) {
      res.send({
        status: '404',
      });
    } else {
      res.send({
        status: '200',
        msg: '数据删除成功',
      });
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};

module.exports = {
  getAdmin,
  getAllUsers,
  getAdminLogin,
  deleteUser,
};
