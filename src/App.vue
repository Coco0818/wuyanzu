<template>
  <div class="serach-container">
    <div class="search-header">
      <div class="searchTab">
        <a href="javascript:;">职位(500+)</a>
        <a href="javascript:;">公司(500+)</a>
      </div>
      <div class="search-keyword">
        <el-input
          placeholder="搜索职位、公司或地点"
          class="search-input"
        ></el-input>
        <el-button class="search-button">搜索</el-button>
        <!-- <input type="text" placeholder="搜索职位、公司或地点" /> -->
      </div>
      <div class="search-title">
        <span class="search-title-tip">相关搜索：</span>
        <ul class="search-title-ul">
          <li class="search-title-content">java后端</li>
          <li class="search-title-content">java web</li>
          <li class="search-title-content">java实习</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.search-header {
  height: 180px;
  background-color: #f2f5f4;
}

.search-keyword {
  display: flex;
}
.search-button {
  background-color: #00b38a;
  color: #fff;
}
.search-title-tip {
  display: inline-block;
  font-size: 14px;
  margin-right: 7px;
  margin-top: 10px;
  height: 22px;
  color: #777;
  line-height: 22px;
}
search-title-content {
  font-size: 14px;
}
</style>