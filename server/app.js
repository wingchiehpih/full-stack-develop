const express = require('express');
// 后端解决跨域问题
const cors = require('cors');
// 用于接收post参数
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
// 配置body-parser模板
app.use(bodyParser.urlencoded({ extended: true }));

const adminRouter = require('./route/admin');
const userRouter = require('./route/user');
const goodRouter = require('./route/good');

app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/good', goodRouter);

// 前面都不匹配，则路由错误。返回 404 页面，app.use不管发起get或post都进行匹配
app.use(function(req, res) {
  res.status(404).send('当前访问的页面不存在');
});

app.listen(8088, function() {
  console.log('服务器正跑在8088端口，等待vue前端的数据访问！');
});
