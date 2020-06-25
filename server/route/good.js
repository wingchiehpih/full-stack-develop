const express = require('express');
const good = express.Router();

const goodCon = require('../controllers/goodController');

// 查询电影库中列表(分页)
good.get('/', goodCon.getAllGoods_admin);

// 查询电影库中列表
good.get('/get_allGoods', goodCon.getAllGoods);

// 获取轮播图数据
good.get('/get_swiperGoods', goodCon.getSwiperGoods);

// 获取推荐栏数据
good.get('/get_hotGoods', goodCon.getHotGoods);
// 新增电影
good.post('/post_newGood', goodCon.postNewGood);
// 将路由对象作为模块成员导出
module.exports = good;
