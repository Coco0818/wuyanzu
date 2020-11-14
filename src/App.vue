<template>
  <div class="serach-container">
    <!-- 搜索框 -->
    <div class="search-header">
      <div class="search-bar">
        <div class="search-tab">
          <a href="javascript:;" class="active">职位(500+)</a>
          <a href="javascript:;" class="disable" disabled>公司(0)</a>
        </div>
        <div class="search-keyword">
          <input
            placeholder="搜索职位、公司或地点"
            class="search-input"
            v-model="xxx"
          />
          <button class="search-button">搜索</button>
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
    <!-- 搜索列表 -->
    <div class="search-content">
      <div class="search-content-left">
        <div class="job">
          <ul class="job-ul">
            <li class="job-ul-li">
              <div class="job-ul-li-top">
                <div class="job-position">
                  <div class="job-position-top">
                    <a href="javascript:;" class="job-position-top-link"
                      >web低能工程师[阴间]</a
                    >
                    <span class="job-position-top-time">15:53发布</span>
                    <div class="chat_me"></div>
                  </div>
                  <div class="job-position-bottom">
                    <span class="job-position-money">11k~15k</span>
                    经验1-3年 本科
                  </div>
                </div>
                <div class="job-company">
                  <div class="job-company-name">
                    <a href="javascript:;" class="job-company-link">腾讯</a>
                    <i class="job-company-mark">
                      <span style="display: none"
                        >该企业已上传营业执照并通过资质验证审核
                      </span>
                    </i>
                  </div>
                  <div class="job-company-industry">
                    游戏 / 天使轮 / 15-50人
                  </div>
                </div>
                <div class="job-com_logo">
                  <a href="javascript:;">
                    <img
                      src="//www.lgstatic.com/thumbnail_120x120/i/image/M00/3D/04/Ciqc1F8pCkeAEB4mAAAKiczPn0E302.jpg"
                      alt=""
                      class="jon-com-logo-img"
                    />
                  </a>
                </div>
              </div>
              <div class="job-ul-li-bottom">
                <div class="job-ul-li-bottom-left">
                  <span>1111</span>
                  <span>1113232321</span>
                  <span>111221</span>
                  <span>1111</span>
                </div>
                <div class="job-ul-li-bottom-right">007 无限加班</div>
              </div>
            </li>
            <li class="job-ul-li">
              <div class="job-ul-li-top"></div>
              <div class="job-ul-li-bottom"></div>
            </li>
            <li class="job-ul-li">
              <div class="job-ul-li-top"></div>
              <div class="job-ul-li-bottom"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="search-content-right"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xxx: "",
    };
  },
};
</script>
<style scoped>
.search-header {
  height: 180px;
  background-color: #f2f5f4;
}
.search-bar {
  width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  height: 46px;
}
.search-keyword {
  display: flex;
}
.search-input {
  display: inline-block;
  padding: 12px 15px;
  width: 791px;
  height: 20px;
  line-height: 20px;
  border-color: #fff;
  border: 1px solid #E8E8E8;
  border-right: 0;
}
.search-input:focus {
  outline: none;
  border: 1px solid #00b38a;
  border-right: none;
}
.search-tab {
  margin-bottom: 13px;
}
.search-tab a {
  display: inline-block;
  margin-right: 7px;
  padding: 7px 10px;
  border-radius: 2px;
  text-decoration: none;
}
.search-tab .disable {
  color: #999;
}
.search-tab .active {
  background-color: #00b38a;
  color: #fff;
}
.search-button {
  background-color: #00b38a;
  color: #fff;
  width: 142px;
  height: 46px;
  padding: 15px 55px;
  border: 0;
}
.search-button:hover {
  background-color: #00a58a;
}
.search-title {
  display: flex;
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
.search-title-ul {
  display: flex;
  margin-right: 7px;
  margin-top: 10px;
  height: 22px;
  line-height: 22px;
}
.search-title-content {
  font-size: 14px;
  margin-right: 22px;
  color: #999;
}

/* 搜索列表 */
.search-content {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.search-content-left {
  width: 960px;
}
.search-content-left .job {
  widows: 960px;
  background-color: pink;

  height: 666px;
}
.job-ul-li {
  position: relative;
  color: #555;
  border: 1px solid #ededed;
  margin-top: 18px;
}
.job-ul-li-top {
  width: 928px;
  height: 68px;
  padding: 14px 15px 0;
  display: flex;
}
.job-ul-li-bottom {
  width: 928px;
  height: 40px;
  padding: 0 15px;
  background-color: #fafafa;
}

.job-position {
  width: 528px;
  margin-right: 20px;
}
.job-position-top {
  height: 34px;
  line-height: 34px;
}
.job-position-top-link {
  text-decoration: none;
  margin: 0;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #00b38a;
}
.job-position-top-time {
  margin: 0 3px;
  color: #999;
}
.chat_me {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  width: 25px;
  height: 25px;
  background: url(//www.lgstatic.com/lg-www-fed/search-result/modules/positions/img/icon-chat_4a70ffc.png) no-repeat 0 0;
  cursor: pointer;
  margin-left: 2px;
}
.job-company-link {
  display: inline-block;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #00b38a;
  font-size: 16px;
  vertical-align: middle;
}
.job-company-mark {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 18px;
  margin-left: 0.5em;
  background: url(//www.lgstatic.com/lg-www-fed/search-result/modules/positions/img/approve_aae725a.png) no-repeat 0 0;
  vertical-align: middle;
  cursor: pointer;
}
.job-company-industry {
  height: 24px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.jon-com-logo-img {
  display: block;
  width: 60px;
  height: 60px;
  border: 1px solid #f5f5f5;
}
.job-ul-li-bottom-left {
  width: 528px;
  height: 40px;
  margin-right: 20px;
  line-height: 40px;
  overflow: hidden;
}
.job-ul-li-bottom-left span {
  display: inline-block;
  max-width: 108px;
  height: 20px;
  padding: 0 5px;
  font-size: 12px;
  line-height: 20px;
  color: #555;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.job-ul-li-bottom-right {
  width: 380px;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.job-position-bottom {
  height: 24px;
  line-height: 24px;
}
.job-position-money {
  margin-right: 1em;
  font-size: 16px;
  color: #fd5f39;
}
.job-company {
  width: 303px;
  margin-right: 15px;
}
.job-com_logo {
  width: 62px;
}
</style>