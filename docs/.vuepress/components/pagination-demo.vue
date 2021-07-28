<template>
  <div class="">
    <el-table :data="tableData" height="540" style="width: 100%">
      <el-table-column prop="id" label="编号" width="150"> </el-table-column>
      <el-table-column prop="date" label="日期" width="150"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="150"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span @click="deleteFn(scope.row.id)" class="handle-style">删除</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :total="total"
      :count="count"
      :list-num="tableData"
      :page-size="pageSize"
      :current-page="currentPage"
      style="text-align: center"
      @handle-current="handleCurrentChangeFn"
    />
  </div>
</template>

<script>
import pagination from "./pagination.vue";
export default {
  components: {
    pagination,
  },
  data() {
    return {
      total: 30, // 默认数据总数
      pageSize: 10, // 每页的数据条数
      count: 3, //总页数
      currentPage: 1, // 默认开始页面
      tableData: [], // 列表
      listInfo: [
        // 每次进入页面重置缓存数据
        {
          id: 1,
          date: "2019-01-01",
          name: "王小虎",
          address: "天津市北辰区小区1",
        },
        {
          id: 2,
          date: "2019-01-01",
          name: "王小虎",
          address: "天津市北辰区小区1",
        },
        {
          id: 3,
          date: "2019-01-01",
          name: "王小虎",
          address: "天津市北辰区小区1",
        },
        {
          id: 4,
          date: "2019-01-01",
          name: "王小虎",
          address: "天津市北辰区小区1",
        },
        {
          id: 5,
          date: "2019-01-01",
          name: "王小虎",
          address: "天津市北辰区小区1",
        },
        {
          id: 6,
          date: "2019-01-01",
          name: "王小虎",
          address: "天津市北辰区小区1",
        },
        {
          id: 7,
          date: "2019-01-01",
          name: "王小虎",
          address: "天津市北辰区小区1",
        },
        {
          id: 8,
          date: "2019-01-01",
          name: "王小虎",
          address: "天津市北辰区小区1",
        },
        {
          id: 9,
          date: "2019-01-01",
          name: "王小虎",
          address: "天津市北辰区小区1",
        },
        {
          id: 10,
          date: "2019-01-01",
          name: "王小虎",
          address: "天津市北辰区小区1",
        },
        {
          id: 11,
          date: "2020-01-01",
          name: "小李",
          address: "天津市北辰区小区2",
        },
        {
          id: 12,
          date: "2020-01-01",
          name: "小李",
          address: "天津市北辰区小区2",
        },
        {
          id: 13,
          date: "2020-01-01",
          name: "小李",
          address: "天津市北辰区小区2",
        },
        {
          id: 14,
          date: "2020-01-01",
          name: "小李",
          address: "天津市北辰区小区2",
        },
        {
          id: 15,
          date: "2020-01-01",
          name: "小李",
          address: "天津市北辰区小区2",
        },
        {
          id: 16,
          date: "2020-01-01",
          name: "小李",
          address: "天津市北辰区小区2",
        },
        {
          id: 17,
          date: "2020-01-01",
          name: "小李",
          address: "天津市北辰区小区2",
        },
        {
          id: 18,
          date: "2020-01-01",
          name: "小李",
          address: "天津市北辰区小区2",
        },
        {
          id: 19,
          date: "2020-01-01",
          name: "小李",
          address: "天津市北辰区小区2",
        },
        {
          id: 20,
          date: "2020-01-01",
          name: "小李",
          address: "天津市北辰区小区2",
        },
        {
          id: 21,
          date: "2019-01-01",
          name: "老王",
          address: "天津市北辰区小区3",
        },
        {
          id: 22,
          date: "2019-01-01",
          name: "老王",
          address: "天津市北辰区小区3",
        },
        {
          id: 23,
          date: "2019-01-01",
          name: "老王",
          address: "天津市北辰区小区3",
        },
        {
          id: 24,
          date: "2019-01-01",
          name: "老王",
          address: "天津市北辰区小区3",
        },
        {
          id: 25,
          date: "2019-01-01",
          name: "老王",
          address: "天津市北辰区小区3",
        },
        {
          id: 26,
          date: "2019-01-01",
          name: "老王",
          address: "天津市北辰区小区3",
        },
        {
          id: 27,
          date: "2019-01-01",
          name: "老王",
          address: "天津市北辰区小区3",
        },
        {
          id: 28,
          date: "2019-01-01",
          name: "老王",
          address: "天津市北辰区小区3",
        },
        {
          id: 29,
          date: "2019-01-01",
          name: "老王",
          address: "天津市北辰区小区3",
        },
        {
          id: 30,
          date: "2019-01-01",
          name: "老王",
          address: "天津市北辰区小区3",
        },
      ],
    };
  },
  mounted() {
    let _this = this;
    localStorage.setItem("listInfo", JSON.stringify(_this.listInfo));
    setTimeout(() => {
      this.getTableData();
    }, 300);
  },
  methods: {
    // 获取缓存数据，模拟请求
    getTableData() {
      //请求数据，对total、count、tableData 进行重新赋值
      let listInfo = JSON.parse(localStorage.getItem("listInfo"));
      this.total = listInfo.length;
      this.count = this.total / this.pageSize;
      let num = (this.currentPage - 1) * 10;
      this.tableData = listInfo.splice(num, 10);
    },
    // 分页
    handleCurrentChangeFn(v) {
      this.currentPage = v;
      this.getTableData();
    },
    // 删除
    deleteFn(id) {
      // 增加删除二次确认
      this.$confirm("您确定删除此条数据吗? 删除后，列表将不再展示此数据", "", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        customClass: "message-box-delete",
        iconClass: "iconfont icon-xianshi_jinggaotianchong icon-delete-warn",
        showClose: false,
        closeOnClickModal: false,
      })
        .then(() => {
          // 模拟请求删除数据
          let listInfo = JSON.parse(localStorage.getItem("listInfo"));
          listInfo.forEach((item, index) => {
            if (id == item.id) {
              listInfo.splice(index, 1);
            }
          });
          localStorage.setItem("listInfo", JSON.stringify(listInfo));
          // 重新获取当前页
          this.getTableData();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消删除",
          });
        });
    },
  },
};
</script>
<style scoped>
::v-deep .el-table__header,
::v-deep .el-table__body {
  margin: 0 !important;
}
.handle-style {
  color: #635dc8;
  cursor: pointer;
}
</style>
