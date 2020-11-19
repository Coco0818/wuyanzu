<template>
  <div>
    <!-- 分页 占位后期饿了么UI组件补上 -->
    <div class="companyList-pages company-fl">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="pageTotal"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
// 引入api解构出接口
// 引入api接口函数
import { reqCompanys } from "../../api";
export default {
  name: "Pagination",
  props:['handleSizeChange','handleCurrentChange'],
  data() {
    return {
      btnFlag: true,
      allStation: [], // 所有公司信息
      allFilters: [], // 所有过滤栏
      pageSize: 8, // 每页条数
      pageTotal: 32, // 总条数
      currentPage: 1, // 默认第一页

      // 公司页面分页四个
      PageOneArr: [],
      PageTwoArr: [],
      PageThreeArr: [],
      PageFourArr: [],
      // 存分页
      AllPageArr: [],

      // 搜索分页四个
      SearchOne: [],
      SearchTwo: [],
      SearchThree: [],
      SearchFour: [],

       // 存分页
      AllSearchArr: [],

    };
  }
};
</script>
<style scoped>
/* 分页 */
.companyList-pages {
  margin: 40px 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
}
</style>