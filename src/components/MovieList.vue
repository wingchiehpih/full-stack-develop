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
        <el-table-column prop="id" label="id" width="50px" />
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
              @click="showEditDialog(scope.row.id)"
            ></el-button>
            <!-- 删除按钮 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="removeUserById(scope.row.id)"
            ></el-button>
            <!-- 查看按钮 -->
            <el-button type="info" icon="el-icon-document" size="mini"></el-button>
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
      total: 0
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
    showEditDialog() {},
    removeUserById() {},
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.queryInfo.pagenum = 1;
      this.getUserList();
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getUserList();
    }
  }
};
</script>

<style lang="less" scoped>
</style>