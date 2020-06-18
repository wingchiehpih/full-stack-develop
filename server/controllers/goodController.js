const dbConfig = require('../config/db');

// 查询所有电影列表数据
getAllGoods = (req, res) => {
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

module.exports = {
  getAllGoods,
};
