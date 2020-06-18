const express = require('express');
const admin = express.Router();

const adminCon = require('../controllers/adminController');

// 管理员登录
admin.post('/', adminCon.adminLogin);
// 管理员查看所有用户信息
admin.get('/role_users', adminCon.getAllUsers);
// 管理员新增用户
admin.post('/add_user', adminCon.addUser);
// 管理员删除用户
admin.delete('/delete', adminCon.deleteUser);

// 将路由对象作为模块成员导出
module.exports = admin;
