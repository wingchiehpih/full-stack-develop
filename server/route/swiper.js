const express = require('express');
const swiper = express.Router();

const swiperCon = require('../controllers/swiperController');

swiper.get('/', swiperCon.getAllSwiper);

module.exports = swiper;
