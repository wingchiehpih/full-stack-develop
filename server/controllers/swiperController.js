const dbConfig = require('../config/db');

// 获取轮播图数据
getAllSwiper = (req, res) => {
  const sql = 'select * from swiper';
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      res.send({
        meta: { status: 500 },
      });
    } else {
      res.send({
        data,
        meta: {
          status: 200,
          msg: '获取数据成功',
        },
      });
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};

module.exports = {
  getAllSwiper,
};
