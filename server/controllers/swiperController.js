const dbConfig = require('../config/db');

// 测试接口
getSwiper = (req, res) => {
  const sql = 'select * from swiper';
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

// 获取轮播图数据
getAllSwiper = (req, res) => {
  const sql = 'select * from swiper';
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      console.log('连接错误');
    } else {
      res.send({
        status: '200',
        msg: '数据查询成功',
        list: data,
      });
    }
  };
  dbConfig.sqlConnect(sql, sqlArr, callBack);
};

module.exports = {
  getSwiper,
  getAllSwiper,
};
