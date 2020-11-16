<template>
    <!-- 公司列表 star -->
      <div class="companyList-container">
        <ul>
          <!-- 腾讯模块 star -->
          <li>
            <div class="companyList-top">
              <p>
                <img src="../../public/Company-Image/ia_100000025.jpg" alt="">
              </p>
              <h3>腾讯</h3>
              <h4 class="companyList-top-one">社交/上市公司/2000人以上</h4>
              <h4 class="companyList-top-two">用户为本，科技向善</h4>
            </div>
            <div class="companyList-bottom">
              <a href="javascript:;">
                <p class="companyList-green">133</p>
                <p class="companyList-line">面试评价</p>
              </a>
              <a href="javascript:;">
                <p class="companyList-green">2586</p>
                <p class="companyList-line">在招职位</p>
              </a>
              <a href="javascript:;">
                <p class="companyList-green">57%</p>
                <p>简历处理率</p>
              </a>
            </div>
          </li>
          <!-- 腾讯模块 end -->

        </ul>
      </div>
      <!-- 公司列表 end -->
</template>
<script>
export default {
  name: 'CompanyList'
}
</script>
<style scoped>
/* 公司列表 star */

.companyList-container {
  padding-top: 4px;
}

.companyList-container ul {
  width: 1216px;
  zoom: 1;
}

.companyList-container ul li {
  box-sizing: border-box;
  float: left;
  width: 288px;
  height: 270px;
  margin-top: 16px;
  margin-right: 16px;
  border: 1px solid #EEE;
}

.companyList-container ul li:hover {
  box-shadow: 0 0 10px 0 rgba(56, 81, 76, .12);
}

/* 企业LOGO 上 */

.companyList-top {
  margin: 0 13px;
  padding: 20px 0 14px;
  text-align: center;
  border-bottom: 1px dashed #E0E0E0;
  position: relative;
}

.companyList-top p {
  line-height: 22px;
}

.companyList-top p img {
  width: 80px;
  height: 80px;
}

.companyList-top h3 {
  margin-top: 13px;
  font-size: 16px;
  color: #555;
  font-weight: normal;
}

.companyList-top-one {
  margin: 3px auto 0;
  color: #999;
}

.companyList-top-two {
  margin: 5px auto 0;
  color: #555;
}

.companyList-bottom a {
  width: 90px;
  position: relative;
  display: block;
  margin-top: 17px;
  text-align: center;
  float: left;
}

.companyList-green {
  color: #00b38a;
}

/* 线 */

.companyList-line {
  position: relative;
}

.companyList-line::after {
  position: absolute;
  top: -10px;
  right: 0;
  content: "";
  height: 30px;
  width: 1px;
  background: #EDEDED;
}

/* 公司列表 end */
</style>