<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>电影管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加电影</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-alert title="添加电影信息" type="info" center show-icon :closable="false"></el-alert>
      <!-- 步骤条区域 -->
      <el-steps :space="200" :active="activeIndex-0" finish-status="success" align-center>
        <el-step title="基本信息"></el-step>
        <el-step title="电影参数"></el-step>
        <el-step title="电影简介"></el-step>
        <el-step title="电影地址"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <!-- tab栏 -->
      <el-form
        :model="addForm"
        :rules="addFormrules"
        ref="addFormRef"
        label-width="100px"
        label-position="top"
      >
        <el-tabs :tab-position="'left'" v-model="activeIndex">
          <el-tab-pane label="基本信息" name="0">
            <el-form-item label="电影名称" prop="name">
              <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="电影类型" prop="type">
              <el-checkbox-group v-model="addForm.type">
                <el-checkbox label="剧情" name="type"></el-checkbox>
                <el-checkbox label="喜剧" name="type"></el-checkbox>
                <el-checkbox label="动画" name="type"></el-checkbox>
                <el-checkbox label="冒险" name="type"></el-checkbox>
                <el-checkbox label="动作" name="type"></el-checkbox>
                <el-checkbox label="科幻" name="type"></el-checkbox>
                <el-checkbox label="历史" name="type"></el-checkbox>
                <el-checkbox label="战争" name="type"></el-checkbox>
                <el-checkbox label="爱情" name="type"></el-checkbox>
                <el-checkbox label="灾难" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="电影参数" name="1">
            <el-form-item label="电影导演" prop="direct">
              <el-input v-model="addForm.direct"></el-input>
            </el-form-item>
            <el-form-item label="电影评分" prop="score">
              <el-input v-model="addForm.score"></el-input>
            </el-form-item>
            <el-form-item label="电影语言" prop="language">
              <el-checkbox-group v-model="addForm.language">
                <el-checkbox label="汉语" name="language"></el-checkbox>
                <el-checkbox label="英语" name="language"></el-checkbox>
                <el-checkbox label="粤语" name="language"></el-checkbox>
                <el-checkbox label="日语" name="language"></el-checkbox>
                <el-checkbox label="韩语" name="language"></el-checkbox>
                <el-checkbox label="其他" name="language"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="电影简介" name="2">
            <el-form-item label="电影标题" prop="biaoti">
              <el-input v-model="addForm.biaoti"></el-input>
            </el-form-item>
            <el-form-item label="电影简介" prop="summary">
              <el-input v-model="addForm.summary" text="textarea"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="电影地址" name="3">
            <el-form-item label="影片地址" prop="link">
              <el-input v-model="addForm.link"></el-input>
            </el-form-item>
            <el-form-item label="影片竖图" prop="img">
              <el-input v-model="addForm.img"></el-input>
            </el-form-item>
            <el-form-item label="影片横图" prop="imgg">
              <el-input v-model="addForm.imgg"></el-input>
            </el-form-item>
            <!-- 添加电影按钮 -->
            <el-button type="primary" @click="add">添加电影</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "0",
      addForm: {
        name: "",
        language: [],
        direct: "",
        type: [],
        score: "",
        summary: "",
        img: "",
        link: "",
        biaoti: "",
        imgg: ""
      },
      addFormrules: {
        name: [{ required: true, message: "请输入电影名称", trigger: "blur" }],
        type: [{ required: true, trigger: "blur" }],
        direct: [
          { required: true, message: "请选择电影类型", trigger: "blur" }
        ],
        score: [{ required: true, message: "请输入电影评分", trigger: "blur" }],
        language: [
          { required: true, message: "请输入电影评分", trigger: "blur" }
        ],
        biaoti: [
          { required: true, message: "请输入电影标题", trigger: "blur" }
        ],
        summary: [
          { required: true, message: "请输入电影简介", trigger: "blur" }
        ],
        link: [{ required: true, message: "请输入电影链接", trigger: "blur" }],
        img: [{ required: true, message: "请输入电影竖图", trigger: "blur" }],
        imgg: [{ required: true, message: "请输入电影横图", trigger: "blur" }]
      }
    };
  },
  methods: {
    add() {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) return this.$message.warning("前选择参数");
        // 数组转换为字符串
        this.addForm.type = this.addForm.type.join("/");
        this.addForm.language = this.addForm.language.join("/");
        const { data: res } = await this.$http.post(
          "/good/post_newGood",
          this.addForm
        );
        if (res.meta.status !== 201) {
          return this.$message.error("添加电影失败");
        }
        this.$message.success("添加电影成功");
        // 同页面跳转
        this.$router.go(0);
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>