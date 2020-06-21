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
// 管理员查看管理员信息
getAdmin = (req, res) => {
  const query = req.body.params;
  if (query.length == 0) {
    var sql = 'select * from roles';
  } else {
    var sql = 'select * from roles where username=' + query + '';
  }
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
// 管理员新增管理员
addAdmin = (req, res) => {
  const { username, password, email, phone } = req.body;
  const sql =
    "insert into roles (username,password,email, phone) values('" +
    username +
    "','" +
    password +
    "','" +
    email +
    "','" +
    phone +
    "')";
  const sqlArr = [username, password, email, phone];
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
// 管理员修改信息
editAdmin = (req, res) => {
  const { id, password, email, phone } = req.body;
  const sql = 'update roles set password = ' + password + '';
  const sqlArr = [id, password, email, phone];
  const callBack = (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length <= 0) {
        res.send({
          meta: {
            status: 402,
            msg: '修改失败',
          },
        });
      } else {
        res.send({
          meta: {
            status: 201,
            msg: '修改成功',
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
  console.log(req.body);
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
// 管理员删除管理员信息
deleteAdmin = (req, res) => {
  const { id } = req.body;
  console.log(id);
  const sql = "delete from roles where id='" + id + "'";
  const sqlArr = [id];
  const callBack = (err, data) => {
    if (err) {
      res.send({
        meta: {
          status: 404,
          msg: '数据删除失败',
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
  getAdmin,
  addAdmin,
  editAdmin,
  getAllUsers,
  deleteAdmin,
  addUser,
  deleteUser,
};
