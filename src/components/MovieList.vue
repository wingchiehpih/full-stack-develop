<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>电影管理</el-breadcrumb-item>
      <el-breadcrumb-item>电影列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索与添加区域 -->
    <!-- gutter设置之间的间距 -->
    <el-card>
      <el-row>
        <el-col :span="7">
          <el-input placeholder="请输入电影名称" clearable @clear="getUserList" v-model="queryInfo.query">
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 表格栏区域 -->
      <el-table :data="userList" border stripe>
        <el-table-column type="index" />
        <el-table-column prop="name" label="电影名" />
        <el-table-column prop="language" label="电影语言" />
        <el-table-column prop="direct" label="导演" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="score" label="电影评分" />
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scope.row.name)"
            ></el-button>
            <!-- 删除按钮 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="removeUserById(scope.row.id)"
            ></el-button>
            <!-- 查看按钮 -->
            <el-tooltip class="item" effect="dark" content="查看简介" placement="top">
              <el-button
                type="info"
                icon="el-icon-document"
                size="mini"
                @click="showSummaryDialog()"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
      <!-- 修改区域 -->
      <el-dialog
        title="修改当前电影信息"
        :visible.sync="editDialogVisible"
        width="50%"
        @close="editDialogClosed"
      >
        <el-form :model="editForm" ref="editFormRef" label-width="70px">
          <el-form-item label="电影语言" prop="language">
            <el-checkbox-group v-model="editForm.language">
              <el-checkbox label="汉语" name="language"></el-checkbox>
              <el-checkbox label="英语" name="language"></el-checkbox>
              <el-checkbox label="粤语" name="language"></el-checkbox>
              <el-checkbox label="日语" name="language"></el-checkbox>
              <el-checkbox label="韩语" name="language"></el-checkbox>
              <el-checkbox label="其他" name="language"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="导演" prop="direct">
            <el-input v-model="editForm.direct"></el-input>
          </el-form-item>
          <el-form-item label="类型" prop="type">
            <el-checkbox-group v-model="editForm.type">
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
          <el-form-item label="评分" prop="score">
            <el-input v-model="editForm.score"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editMovieInfo">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 简介 -->
      <el-dialog title="电影简介" :visible.sync="dialogVisible" width="50%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        query: "",
        // 当前页数
        pagenum: 1,
        pagesize: 5
      },
      userList: [],
      total: 0,
      movieName: "",
      dialogVisible: false,
      editDialogVisible: false,
      editForm: {
        name: "",
        language: [],
        direct: "",
        type: [],
        score: ""
      }
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      const { data: res } = await this.$http.post(
        "admin/get_allGoods",
        this.queryInfo
      );
      if (res.meta.status !== 200) return this.$message.error("获取数据失败");
      this.userList = res.data;
      console.log(this.userList);
      const { data: total } = await this.$http.get("admin/get_allGoodsCount");
      this.total = total.data[0].count;
      console.log(this.userList);
    },
    showEditDialog(name) {
      this.editDialogVisible = true;
      this.editForm.name = name;
    },
    async editMovieInfo() {
      this.editForm.type = this.editForm.type.join("/");
      this.editForm.language = this.editForm.language.join("/");
      const { data: res } = await this.$http.post(
        "good/edit_movie",
        this.editForm
      );
      if (res.meta.status !== 201) {
        return this.$message.error("修改电影信息失败");
      }
      // 更新成功操作
      // 1、关闭对话框
      this.editDialogVisible = false;
      // 2、刷新数据列表
      this.getUserList();
      // 3、提示修改成功
      this.$message.success("修改电影信息成功");
    },
    // 修改管理员框关闭事件
    editDialogClosed() {
      this.$refs.editFormRef.resetFields();
    },
    removeUserById() {},
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.queryInfo.pagenum = 1;
      this.getUserList();
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getUserList();
    },
    selectName(name) {
      this.movieName = name;
      console.log(this.movieName);
    },
    async showSummaryDialog() {
      // console.log(name);
      // console.log(this.movieName);
      const { data: res } = await this.$http.post(
        "/good/get_movieSummary",
        this.movieName
      );
      console.log(res);
    }
  }
};
</script>

<style lang="less" scoped>
</style>