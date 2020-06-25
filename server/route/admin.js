const express = require('express');
const admin = express.Router();

const adminCon = require('../controllers/adminController');

// 管理员登录
admin.post('/', adminCon.adminLogin);
// 管理员查看管理员信息
admin.post('/get_admin', adminCon.getAdmin);
// 管理员新增管理员
admin.post('/add_admin', adminCon.addAdmin);
// 管理员修改管理员信息
admin.post('/edit_admin', adminCon.editAdmin);
// 管理员删除管理员信息
admin.post('/delete_admin', adminCon.deleteAdmin);
// 管理员查看所有用户信息
admin.post('/role_users', adminCon.getAllUsers);
// 管理员查询用户总数
admin.get('/get_allUsersCount', adminCon.getAllUsersCount);
// 获取用户收藏列表
admin.post('/get_allUsersCollects', adminCon.getAllUsersCollects);
// 获取收藏列表总数
admin.get('/get_allUsersCollectsCount', adminCon.getAllUsersCollectsCount);
// 管理员新增用户
admin.post('/add_user', adminCon.addUser);
// 管理员修改用户信息
admin.post('/edit_user', adminCon.editUser);
// 管理员删除用户
admin.post('/delete', adminCon.deleteUser);
// 获取电影列表
admin.post('/get_allGoods', adminCon.getAllGoods);
// 获取电影总数
admin.get('/get_allGoodsCount', adminCon.getAllGoodsCount);

// 将路由对象作为模块成员导出
module.exports = admin;
