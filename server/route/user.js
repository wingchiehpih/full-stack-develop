const express = require('express');
const user = express.Router();
const userCon = require('../controllers/userController');

user.post('/', userCon.login);

user.post('/reg', userCon.reg);

module.exports = user;
