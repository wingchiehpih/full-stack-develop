const dbConfig = require('../config/db');

// 查询所有电影列表数据(分页)
getAllGoods_admin = (req, res) => {
  const { pagenum, pagesize } = req.body;
  const total = pagenum * pagesize;
  const sql = 'select * from goods limit ' + total + ',' + pagesize;
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
          meta: { status: 402 },
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
// 获取所有电影列表数据
getAllGoods = (req, res) => {
  const sql = 'select * from goods';
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
          meta: { status: 402 },
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
// 获取前4条做轮播图数据
getSwiperGoods = (req, res) => {
  const sql = 'select * from goods limit 0,4';
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
          meta: { status: 402 },
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
// 获取4-10天数据作为本周热门
getHotGoods = (req, res) => {
  const sql = 'select * from goods limit 4,6';
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
          meta: { status: 402 },
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
// 查看当前电影的简介
getMovieSummary = (req, res) => {
  const { name } = req.body;
  const sql = "select * from goods where name='" + name + "'";
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
// 修改电影信息
editMovie = (req, res) => {
  const { name, language, direct, type, score } = req.body;
  const sql = `update goods set language = '${language}',direct='${direct}',type='${type}',score='${score}' where name = '${name}'`;
  // console.log(sql);
  console.log(sql);
  const sqlArr = [name, language, direct, type, score];
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
// 新增电影信息
addNewMovie = (req, res) => {
  const {
    name,
    language,
    direct,
    type,
    score,
    summary,
    img,
    link,
    biaoti,
    imgg,
  } = req.body;
  const sql =
    "insert into goods (name,language,direct, type,score,summary,img,link,biaoti,imgg) values('" +
    name +
    "','" +
    language +
    "','" +
    direct +
    "','" +
    type +
    "','" +
    score +
    "','" +
    summary +
    "','" +
    img +
    "','" +
    link +
    "','" +
    biaoti +
    "','" +
    imgg +
    "')";
  const sqlArr = [
    name,
    language,
    direct,
    type,
    score,
    summary,
    img,
    link,
    imgg,
  ];
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

module.exports = {
  getAllGoods_admin,
  getAllGoods,
  getSwiperGoods,
  getHotGoods,
  getMovieSummary,
  editMovie,
  addNewMovie,
};
