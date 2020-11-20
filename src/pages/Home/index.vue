<template>
  <div>
    <!-- 搜索框 -->
    <div class="search-wrapper">
      <div class="search-keyword">
        <input
          type="text"
          placeholder="搜索职位、公司或地点"
          class="search-input"
        />
        <button class="search-button">搜索</button>
      </div>
    </div>

    <!-- 中间轮播图区 -->
    <div class="container-body">
      <TypNav />
      <!-- 轮播图 -->
      <div class="banner" style="margin-top: 30px">
        <el-carousel
          class="banner-item"
          trigger="click"
          height="346px"
          autoplay
          loop
        >
          <el-carousel-item>
            <img src="./images/banner1.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="./images/banner2.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="./images/banner3.png" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <JobTap />
    </div>
    <HotContent />
    <BackTop />
  </div>
</template>
<script>
import HotContent from "@/components/HotContent";
import TypNav from "./TypNav";
import JobTap from "./JobTap";
export default {
  name: "Home",
  components: {
    HotContent,
    TypNav,
    JobTap,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang='less' scoped>
a:hover {
  color: #00a58a;
}

.search-wrapper {
  background: #f2f5f4;
  padding: 30px 0 28px;
  width: 100%;
  display: flex;
}
.search-keyword {
  display: flex;
  margin: 0 500px;
}
.search-input {
  display: inline-block;
  padding: 12px 15px;
  width: 791px;
  height: 20px;
  line-height: 20px;
  border-color: #fff;
  border: 1px solid #e8e8e8;
  border-right: 0;
}
.search-input:focus {
  outline: none;
  border: 1px solid #00b38a;
  border-right: none;
}
.search-button {
  background-color: #00b38a;
  color: #fff;
  width: 142px;
  height: 46px;
  padding: 15px 55px;
  border: 0;
  outline: none;
}
.search-button:hover {
  background-color: #00a58a;
}
.container-body {
  position: relative;
  margin: 40px auto 0;
  width: 1200px;
  //  三级分类
  .banner {
    position: relative;
    margin-left: 360px;
    margin-top: 20px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>