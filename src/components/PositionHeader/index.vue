<template>
  <!-- 筛选 -->
  <div class="company-positionHead">
    <!-- 公司地点 star -->
    <div class="company-address">
      <span class="company-fl">公司地点：</span>
      <div class="company-address-list company-fl">
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;" class="company-address-list-active">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
      </div>
      <a href="javascript:;" class="company-btn-more company-fr">
        更多
        <i></i>
      </a>
    </div>
    <!-- 公司地点 end -->

    <!-- 融资阶段： star -->
    <div class="company-address">
      <span class="company-fl">融资阶段：</span>
      <div class="company-address-list company-fl">
        <a href="javascript:;" class="company-address-list-active">不限</a>
        <a href="javascript:;">未融资</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
      </div>
    </div>
    <!--融资阶段： end -->

    <!-- 公司规模： star -->
    <div class="company-address">
      <span class="company-fl">公司规模：</span>
      <div class="company-address-list company-fl">
        <a href="javascript:;" class="company-address-list-active">不限</a>
        <a href="javascript:;">未融资</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
      </div>
    </div>
    <!--公司规模： end -->

    <!-- 行业领域： star -->
    <div class="company-address">
      <span class="company-fl">行业领域：</span>
      <div class="company-address-list company-fl">
        <a href="javascript:;" class="company-address-list-active">不限</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
        <a href="javascript:;">深圳</a>
      </div>
      <a href="javascript:;" class="company-btn-more company-fr">
        更多
        <i></i>
      </a>
    </div>
    <!--行业领域： end -->
  </div>
</template>

<script>
export default {
  name: "positionheader",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* 版心 */

.company-bx {
  width: 1200px;
  margin: auto;
}

/* 左浮动 */

.company-fl {
  float: left;
}

/* 右浮动 */

.company-fr {
  float: right;
}

/* 筛选 */

.company-positionHead {
  background-color: #fafafa;
  margin-top: 35px;
  border: 1px solid #ededed;
}

.company-address {
  height: 15px;
  padding: 12px;
  text-align: left;
  line-height: 15px;
  font-size: 13px;
}
.company-address span {
  color: #555;
  font-size: 13px;
  font-weight: 600;
}
.company-address-list {
  display: inline-block;
}

.company-address-list a {
  padding: 4px 8px;
  cursor: pointer;
  text-decoration: none;
  color: #555;
  font-size: 13px;
}
/* 鼠标经过筛选内的地址a链接添加额外样式 */
.company-address-list a:hover {
  color: white;
  background-color: #00b38a;
}

/* 点击额外添加样式 */

.company-address-list-active {
  background-color: #00b38a !important;
  color: white !important;
  text-decoration: none;
}

/* 更多 */

.company-btn-more {
  text-decoration: none;
  color: #555;
  width: 51px;
  padding: 4px 8px;
  position: relative;
}

.company-btn-more i {
  position: absolute;
  top: 9px;
  right: 15px;
  font-size: 0;
  height: 0;
  width: 0;
  border-width: 6px 6px 0;
  border-style: solid dashed;
  border-color: #00b38a transparent transparent;
  overflow: hidden;
}
</style>
