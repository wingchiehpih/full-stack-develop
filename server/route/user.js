const express = require('express');
const user = express.Router();
const userCon = require('../controllers/userController');

user.post('/', userCon.login);

user.post('/reg', userCon.reg);

user.get('/collect', userCon.collect);

user.post('/collects', userCon.collects);

user.delete('/unCollects', userCon.unCollects);

user.post('/getCollects', userCon.getCollects);

module.exports = user;
