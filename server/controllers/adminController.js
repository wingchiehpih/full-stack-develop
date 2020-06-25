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
        return res.send({
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
  console.log(query.length);
  let sql = '';
  if (query.length == 0) {
    sql = 'select * from roles';
  } else {
    sql = `select * from roles where username like '${query}%'`;
  }
  console.log(sql);
  const sqlArr = [query];
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
        return res.send({
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
        return res.send({
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
  const { query, pagenum, pagesize } = req.body;
  const all = (pagenum - 1) * pagesize;
  let sql = '';
  console.log(query.length);
  if (query.length == 0) {
    sql = 'select * from users limit ' + all + ',' + pagesize;
  } else {
    sql = `select * from users where username like '${query}%'`;
  }
  const sqlArr = [query, pagenum, pagesize];
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
// 管理员查看用户收藏信息
getAllUsersCollects = (req, res) => {
  const { query, pagenum, pagesize } = req.body;
  const all = (pagenum - 1) * pagesize;
  let sql = '';
  console.log(query.length);
  if (query.length == 0) {
    sql = 'select * from user_collects limit ' + all + ',' + pagesize;
  } else {
    sql = `select * from user_collects where username like '${query}%'`;
  }
  const sqlArr = [query, pagenum, pagesize];
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
// 管理员获取
getAllUsersCollectsCount = (req, res) => {
  const sql = 'select count(*) as count from user_collects';
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
// 管理员获取用户总数
getAllUsersCount = (req, res) => {
  const sql = 'select count(*) as count from users';
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
      return res.send({
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
  const { username, password, sex, phone } = req.body;
  const sql =
    "insert into users (username,password,sex, phone) values('" +
    username +
    "','" +
    password +
    "','" +
    sex +
    "','" +
    phone +
    "')";
  const sqlArr = [username, password, sex, phone];
  const callBack = (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length <= 0) {
        return res.send({
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
// 管理员修改用户信息
editUser = (req, res) => {
  const { username, password, sex, phone } = req.body;
  const sql = `update users set password = ${password} ,  phone=${phone} where username = '${username}'`;
  // console.log(sql);
  const sqlArr = [username, password, sex, phone];
  const callBack = (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length <= 0) {
        return res.send({
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
// 管理员删除用户
deleteUser = (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  const sql = "delete from users where id='" + id + "'";
  console.log(sql);
  const sqlArr = [id];
  const callBack = (err, data) => {
    if (err) {
      res.send({
        meta: {
          status: 404,
        },
      });
    } else {
      return res.send({
        meta: {
          status: 204,
          msg: '数据删除成功',
        },
      });
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};
// 获取电影列表
getAllGoods = (req, res) => {
  const { query, pagenum, pagesize } = req.body;
  const all = (pagenum - 1) * pagesize;
  let sql = '';
  if (query.length == 0) {
    sql = 'select * from goods limit ' + all + ',' + pagesize;
  } else {
    sql = `select * from goods where username like '${query}%'`;
  }
  sql = 'select * from goods limit ' + all + ',' + pagesize;

  const sqlArr = [query, pagenum, pagesize];
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
// 获取电影列表总数
getAllGoodsCount = (req, res) => {
  const sql = 'select count(*) as count from goods';
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
module.exports = {
  adminLogin,
  getAdmin,
  addAdmin,
  editAdmin,
  getAllUsers,
  getAllUsersCount,
  deleteAdmin,
  addUser,
  deleteUser,
  getAllGoods,
  getAllGoodsCount,
  getAllUsersCollects,
  getAllUsersCollectsCount,
  editUser,
};
