<template>
  <div class="login_container">
    <el-main>
      <div class="left">
        <img src="../assets/logo.png" alt />
        <h1>时间宝贝</h1>
      </div>
      <div class="right">
        <!-- 登录表单区 -->
        <el-form ref="loginFormRef" class="login_form" :model="loginForm" :rules="loginFormRules">
          <h1>后台管理系统</h1>
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input prefix-icon="iconfont icon-user" v-model="loginForm.username" type="input"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              prefix-icon="iconfont icon-3702mima"
              v-model="loginForm.password"
              type="password"
            ></el-input>
          </el-form-item>
          <!-- 按钮区域 -->
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetloginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: "admin",
        password: "123456"
      },
      // 这是表单的验证规则对象\\
      loginFormRules: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 表单重置方法
    resetloginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    // 表单登录的预验证
    async login() {
      const { data: res } = await this.$http.post("admin", this.loginForm);
      if (res.meta.status !== 200)
        // message全局弹框效果
        return this.$message.error("登录失败");
      this.$message.success("登录成功");
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="less">
.login_container {
  position: relative;
  background: url(../assets/bg.jpg);
  background-size: cover;
  height: 100%;
  .el-main {
    position: absolute;
    display: flex;
    width: 800px;
    height: 380px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .left {
      display: flex;
      width: 320px;
      background-color: rgba(72, 99, 134, 0.6);
      color: #fff;
      font-size: 20px;
      letter-spacing: 1em;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 30%;
        height: auto;
      }
    }
    .right {
      display: flex;
      flex: 1;
      background-color: rgba(60, 53, 83, 0.8);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 30px !important;
        color: #fff;
        letter-spacing: 1em;
      }
      input {
        background-color: transparent;
        // transform: scale(1.2);
      }
    }
  }
}
.btns {
  display: flex;
  justify-content: space-between;
  .el-button {
    width: 120px !important;
    letter-spacing: 0.2em;
  }
}
</style>
