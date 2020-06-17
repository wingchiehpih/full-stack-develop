const express = require('express');
const swiper = express.Router();

const swiperCon = require('../controllers/swiperController');

swiper.get('/', swiperCon.getSwiper);
swiper.get('/getAllSwiper', swiperCon.getAllSwiper);

module.exports = swiper;
