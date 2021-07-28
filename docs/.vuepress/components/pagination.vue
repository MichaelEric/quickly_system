<template>
  <div class="pagination-wrap">
    <div class="page-tips">
      显示第 {{ currentCount }} 至 {{ endPage }} 项结果 ，共 {{ total }} 项
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      layout=" prev, pager, next, jumper"
      :total="total"
      :current-page="currentPage"
    ></el-pagination>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    count: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 1
    },
    currentPage: {
      type: Number,
      default: 1
    },
    listNum: {
      type: Array,
      default: []
    }
  },
  watch: {
    listNum(val) {
      // if (this.currentPage > 1) {
        if (val.length === 0) {
          if (this.currentPage > 1) {
            let num = this.currentPage;
            num -= 1;
            this.$emit('handle-current', num);
          }
        }
      // }
    }
  },
  computed: {
    // 起始页
    currentCount() {
      return this.currentPage === 1
        ? '1'
        : this.pageSize * (this.currentPage - 1) + 1;
    },
    // 当前显示结束数目
    endPage() {
      return this.currentPage === 1
        ? this.pageSize
        : this.currentPage * this.pageSize;
    }
  },
  methods: {
    //每页展示条数
    handleSizeChange(val) {
      this.$emit('handleSizeChangeSub', val);
    },
    //当前页
    handleCurrentChange(val) {
      this.$emit('handle-current', val);
    }
  }
};
</script>
<style type="text/css" scoped>
.pagination-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
.page-tips {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 20px;
  color: #9da4b2;
}
</style>
