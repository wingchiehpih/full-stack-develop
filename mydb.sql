/*
 Navicat MySQL Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 100410
 Source Host           : localhost:3306
 Source Schema         : mydb

 Target Server Type    : MySQL
 Target Server Version : 100410
 File Encoding         : 65001

 Date: 16/06/2020 15:19:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(11) NOT NULL COMMENT '电影ID',
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '电影名称',
  `language` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '电影语言',
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '电影类型',
  `score` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '电影评分',
  `summary` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '电影简介',
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片链接',
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '电影链接',
  `date` datetime(0) NOT NULL COMMENT '电影上映日期',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '春潮', '汉语普通话', '剧情 / 家庭', '7.2', '报社记者郭建波、母亲纪明岚与女儿郭婉婷同住在一个屋檐下，祖孙三代因亲情关系捆绑在一起的生活，看似平静实则暗潮涌动。记者郭建波在报导社会负面事件的同时，也在揭开自己身上的伤疤；母亲纪明岚在外为人热情，受人爱戴，但是回到家却判若两人；女儿郭婉婷小小年纪就学会了成人世界里的种种生存法则。一次次的叛逆与反抗都在隐忍中归于平静，一场悄无声息的战争在三代人之间暗自滋生，终将爆发', 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2604517782.webp', '', '2020-06-16 14:46:46');

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '管理员账号',
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '管理员密码',
  `email` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '管理员邮箱',
  `mobile` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '管理员手机号',
  PRIMARY KEY (`mobile`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES ('admin', '123456', '123456@qq.com', '15056251592');

-- ----------------------------
-- Table structure for swiper
-- ----------------------------
DROP TABLE IF EXISTS `swiper`;
CREATE TABLE `swiper`  (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `summary` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片链接',
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '电影链接',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of swiper
-- ----------------------------
INSERT INTO `swiper` VALUES (1, '春潮', '报社记者郭建波、母亲纪明岚与女儿郭婉婷同住在一个屋檐下，祖孙三代因亲情关系捆绑在一起的生活，看似平静实则暗潮涌动。记者郭建波在报导社会负面事件的同时，也在揭开自己身上的伤疤；母亲纪明岚在外为人热情，受人爱戴，但是回到家却判若两人；女儿郭婉婷小小年纪就学会了成人世界里的种种生存法则。一次次的叛逆与反抗都在隐忍中归于平静，一场悄无声息的战争在三代人之间暗自滋生，终将爆发', 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2604517782.webp', 'https://www.iqiyi.com/v_19rrcuwotc.html');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户密码',
  `sex` char(2) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户姓名',
  `mobile` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户手机号',
  `birth` date NOT NULL COMMENT '用户生日',
  `reg` datetime(6) NOT NULL COMMENT '用户注册日期',
  `follow` tinyint(1) NOT NULL COMMENT '是否关注公众号'
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('test', '123456', '男', '15069636251', '2000-06-10', '2020-06-16 00:00:00.000000', 0);

SET FOREIGN_KEY_CHECKS = 1;
