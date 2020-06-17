const express = require('express');
const admin = express.Router();

const adminCon = require('../controllers/adminController');

admin.get('/', adminCon.getAdmin);
// 管理员查看所有用户信息
admin.get('/role_users', adminCon.getAllUsers);
// 管理员登录
admin.post('/login', adminCon.getAdminLogin);
// 管理员删除用户
admin.post('/delete', adminCon.deleteUser);
sex, phone, birth, reg, followb;
// 将路由对象作为模块成员导出
module.exports = admin;
