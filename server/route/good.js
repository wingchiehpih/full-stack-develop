const express = require('express');
const good = express.Router();

const goodCon = require('../controllers/goodController');

// 查询电影库中列表
good.get('/', goodCon.getAllGoods);

// 将路由对象作为模块成员导出
module.exports = good;
