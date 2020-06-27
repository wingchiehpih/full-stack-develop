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
// 获取电影简介信息
good.post('/get_movieSummary', goodCon.getMovieSummary);
// 修改电影数据
good.post('/edit_movie', goodCon.editMovie);
// 新增电影
good.post('/add_movie', goodCon.addNewMovie);
// 将路由对象作为模块成员导出
module.exports = good;
