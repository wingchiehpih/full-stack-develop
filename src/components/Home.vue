<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt />
        <span>时间宝贝后台管理系统</span>
      </div>
      <div>
        <img src="../assets/Avatar.png" alt />
        <span>Admin</span>
      </div>
    </el-header>
    <!-- 主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <!-- 动态修改左侧导航栏宽度 -->
      <el-aside :width="isCollapse?'64px':'200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏区域 -->
        <!-- router开启路由模式 -->
        <el-menu
          background-color="#313743"
          text-color="#fff"
          active-text-color="#359BFF"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <!-- 一级菜单 -->
          <!-- 动态index绑定实现侧边栏分别展开效果 :实现数字转换为字符串 -->
          <el-submenu :index="item.id" v-for="item in menuList" :key="item.id">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="subItem.path" v-for="subItem in item.children" :key="subItem.iid">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // 左侧菜单数据
      menuList: [
        {
          authName: "管理员",
          id: "125",
          children: [
            {
              iid: "1",
              path: "/adminList",
              authName: "管理员列表"
            }
          ]
        },
        {
          authName: "用户管理",
          id: "103",
          children: [
            {
              iid: "2",
              path: "/userList",
              authName: "用户列表"
            },
            {
              iid: "3",
              path: "/userCollect",
              authName: "用户收藏"
            }
          ]
        },
        {
          authName: "电影管理",
          id: "101",
          children: [
            {
              iid: "4",
              path: "movieList",
              authName: "电影列表"
            },
            {
              iid: "6",
              path: "swiperControl",
              authName: "电影发布"
            }
          ]
        }
      ],
      iconsObj: {
        "125": "iconfont icon-user",
        "103": "iconfont icon-tijikongjian",
        "101": "iconfont icon-shangpin"
      },
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ""
    };
  },
  methods: {
    // 点击按钮实现菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #363d40;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: auto;
    }
    span {
      margin-left: 10px;
    }
  }
}
.el-aside {
  background-color: #313743;
  // 去除左侧菜单栏右边框线
  .el-menu {
    margin-top: 5px;
    border-right: none;
  }
}
.el-main {
  background-color: #e9edf1;
}
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #475163;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
