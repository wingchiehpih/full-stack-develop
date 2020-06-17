const mysql = require('mysql');

module.exports = {
  // 数据库配置
  config: {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mydb1',
  },
  sqlConnect(sql, sqlArr, callBack) {
    const pool = mysql.createPool(this.config);
    pool.getConnection((err, conn) => {
      if (err) {
        console.log('数据库连接失败');
        return;
      }
      console.log('数据库连接成功');
      // 事件驱动回调
      conn.query(sql, sqlArr, callBack);
      // 释放连接
      conn.release();
    });
  },
};
