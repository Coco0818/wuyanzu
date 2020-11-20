<template>
  <div class="serach-container">
    <!-- 搜索框 -->
    <div class="search-header">
      <div class="search-bar">
        <div class="search-tab">
          <a href="javascript:;" class="active">职位(500+)</a>
          <a href="javascript:;" class="disable" disabled>公司(0)</a>
        </div>
        <SearchKeyword />
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
        <PositionHeader />
        <div class="job">
          <ul class="job-ul">
            <li
              class="job-ul-li"
              v-for="position in newSearchArr"
              :key="position._id"
              @click="goDetail"
            >
              <div class="job-ul-li-top">
                <div class="job-position">
                  <div class="job-position-top">
                    <a
                      href="javascript:;"
                      class="job-position-top-link"
                      @click="goDetail(position._id)"
                      >{{ position.positionName }}[{{ position.city }}]</a
                    >
                    <span class="job-position-top-time">15:53发布</span>
                    <div class="chat_me"></div>
                  </div>
                  <div class="job-position-bottom">
                    <span class="job-position-money">{{
                      position.Salary
                    }}</span>
                    {{ position.workingExperience }} {{ position.Eduction }}
                  </div>
                </div>
                <div class="job-company">
                  <div class="job-company-name">
                    <a href="javascript:;" class="job-company-link">{{
                      position.companyName
                    }}</a>
                    <i class="job-company-mark">
                      <span style="display: none"
                        >该企业已上传营业执照并通过资质验证审核
                      </span>
                    </i>
                  </div>
                  <div class="job-company-industry">
                    {{ position.industrySector }} /
                    {{ position.FinancingStage }} / {{ position.StaffSize }}
                  </div>
                </div>
                <div class="job-com_logo">
                  <a href="javascript:;">
                    <img
                      :src="position.imgUrl"
                      alt=""
                      class="jon-com-logo-img"
                    />
                  </a>
                </div>
              </div>
              <div class="job-ul-li-bottom">
                <div class="job-ul-li-bottom-left">
                  <span
                    v-for="(post, index) in position.postTag"
                    :key="index"
                    >{{ post }}</span
                  >
                </div>
                <div class="job-ul-li-bottom-right">
                  {{ position.jobTemptation }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div style="height: 120px">
          <Pagination
            :handleSizeChange="handleSizeChange"
            :handleCurrentChange="handleCurrentChange"
          />
        </div>
        <div class="recommend">
          <a
            href="javascript:;"
            class="expansion"
            @click="showRecoment(true)"
            v-text="btnText"
          >
          </a>
          <a
            href="javascript:;"
            class="expansion"
            @click="showRecoment(false)"
            v-show="recomentIsShow"
            v-text="btnText"
          >
          </a>
          <!-- 推荐公司父盒子 -->
          <div class="recoment-fatherOne">
            <div class="recommend-comp">推荐公司：</div>
            <ul class="recommend-comp_ul clearFix">
              <li class="recommend-comp_ul-li">
                <a href="javascript:;" class="recommend-comp_ul-li-a">美柚</a>
              </li>
              <li class="recommend-comp_ul-li">
                <a href="javascript:;" class="recommend-comp_ul-li-a"
                  >喜马拉雅fm</a
                >
              </li>
              <li class="recommend-comp_ul-li">
                <a href="javascript:;" class="recommend-comp_ul-li-a">微盟</a>
              </li>
              <li class="recommend-comp_ul-li">
                <a href="javascript:;" class="recommend-comp_ul-li-a">淘粉吧</a>
              </li>
              <li class="recommend-comp_ul-li">
                <a href="javascript:;" class="recommend-comp_ul-li-a">熊猫TV</a>
              </li>
              <li class="recommend-comp_ul-li">
                <a href="javascript:;" class="recommend-comp_ul-li-a"
                  >易到用车</a
                >
              </li>
              <li class="recommend-comp_ul-li">
                <a href="javascript:;" class="recommend-comp_ul-li-a">小红唇</a>
              </li>
              <li class="recommend-comp_ul-li">
                <a href="javascript:;" class="recommend-comp_ul-li-a"
                  >汽车超人</a
                >
              </li>
              <li class="recommend-comp_ul-li">
                <a href="javascript:;" class="recommend-comp_ul-li-a">蚂蜂窝</a>
              </li>
            </ul>
          </div>
          <!-- 推荐城市父盒子 -->
          <div class="recoment-fatherTwo" v-show="recomentIsShow">
            <div class="recommend-city">推荐城市：</div>
            <ul class="recommend-city_ul clearFix">
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a">腾讯</a>
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >阿里巴巴</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >北京找工作</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >北京招聘</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >上海找工作</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >上海招聘</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >杭州找工作</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >杭州招聘</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >广州找工作</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >广州招聘</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >深圳找工作</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >深圳招聘</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >深圳找工作</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >成都招聘</a
                >
              </li>
              <li class="recommend-city_ul-li">
                <a href="javascript:;" class="recommend-city_ul-li-a"
                  >成都找工作</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="search-content-right">
        <div class="history">
          <div class="history-title">最近浏览过</div>
          <ul
            class="history-position"
            v-for="(brower, index) in SearchFour"
            :key="index"
          >
            <li class="history-position-item">
              <div class="history-position-item-link">
                <a href="javascrit:;" class="history-position-name">{{
                  brower.positionName
                }}</a>
                <div class="salary">{{ brower.Salary }}</div>
                <div class="history-company-name">{{ brower.companyName }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchKeyword from "@/components/SearchKeyword";
import PositionHeader from "@/components/PositionHeader";
import { reqPositions } from "@/api";
export default {
  name: 'search',
  components: {
    SearchKeyword,
    PositionHeader,
  },
  data() {
    return {
      // 搜索分页四个
      SearchOne: [],
      SearchTwo: [],
      SearchThree: [],
      SearchFour: [],
      currentPage: 1,

      // 存分页
      AllSearchArr: [],
      // 新数据数组
      newSearchArr: [],

      // 默认不显示收起
      recomentIsShow: false,

      // 展开默认显示的文本
      btnText: "展开",

      // 展开上下箭头默认图片
      TopImg: "./images/arrow_down_7b6f2e2.png",
    };
  },
  methods: {
    goDetail(id) {
      this.$router.push("/detail/" + id);
    },
    // 分页
    handleSizeChange: function (size) {
      this.pagesize = size; //当前显示页数
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage; //第几页
      this.newSearchArr = this.AllSearchArr[currentPage - 1];
    },

    // 推荐公司显示和隐藏
    showRecoment(visible) {
      this.recomentIsShow = visible;
      if (this.recomentIsShow) {
        this.btnText = "展开";
      } else {
        this.btnText = "收起";
      }
    },
  },
  async mounted() {
    // 所有岗位信息
    const result = await reqPositions();
    this.companyArr = result.data;
    // 分页器四个
    this.SearchOne = this.companyArr.slice(0, 7);
    this.SearchTwo = this.companyArr.slice(8, 15);
    this.SearchThree = this.companyArr.slice(16, 24);
    this.SearchFour = this.companyArr.slice(22, 30);

    console.log(this.SearchFour);
    // 四个按钮总数组
    this.AllSearchArr = [
      this.SearchOne,
      this.SearchTwo,
      this.SearchThree,
      this.SearchFour,
    ];
    // 默认第一页是大数组里的第一个数组
    this.newSearchArr = this.AllSearchArr[0];
    // console.log(this.companyArr);
  },
}
</script>
<style>
.search-header {
  height: 180px;
  background-color: #f2f5f4;
  margin: 0 auto 35px;
}
.search-bar {
  width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  height: 46px;
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
  padding-bottom: 100px;
}
.search-content-left {
  width: 960px;
  margin-right: 40px;
  margin-top: -30px;
}
.search-content-left .job {
  width: 960px;
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
  background: url(//www.lgstatic.com/lg-www-fed/search-result/modules/positions/img/icon-chat_4a70ffc.png)
    no-repeat 0 0;
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
  background: url(//www.lgstatic.com/lg-www-fed/search-result/modules/positions/img/approve_aae725a.png)
    no-repeat 0 0;
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
.job-ul-li-bottom {
  display: flex;
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
  margin-right: 10px;
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
.job-company-name {
  height: 34px;
  line-height: 34px;
}
.job-company-name a {
  text-decoration: none;
}
.job-com_logo {
  width: 62px;
}
.recommend {
  position: relative;
  padding-top: 23px;
  margin-bottom: 10px;
}
.expansion {
  text-decoration: none;
  position: absolute;
  top: 73px;
  right: 0px;
  color: #999;
}
.recommend-comp {
  margin-top: 12px;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
}
.recommend-comp_ul {
  margin-top: 10px;
  /* height: 24px;
  font-size: 16px;
  line-height: 24px; */
}
.recommend-comp_ul-li {
  float: left;
  margin-right: 40px;
  height: 22px;
  line-height: 22px;
  color: #00b38a;
  text-decoration: underline;
  cursor: pointer;
}
.recommend-comp_ul-li a {
  color: #00b38a;
}
.recommend-city {
  margin-top: 12px;
}
.recommend-city_ul {
  margin-top: 10px;
}
.recommend-city_ul-li {
  float: left;
  margin-right: 40px;
  height: 22px;
  line-height: 22px;
  color: #00b38a;
  text-decoration: underline;
  cursor: pointer;
}
.recommend-city_ul-li a {
  color: #00b38a;
}
.search-content-right {
  width: 210px;
  float: right;
}
.history {
  width: 210px;
  margin-bottom: 15px;
  padding-bottom: 5px;
  background-color: #fafafa;
}
.history-title {
  font-size: 18px;
  margin: 0 0 2px 15px;
  padding-top: 12px;
}
.history-position {
  margin: 5px 5px 0;
  background-color: #fff;
}
.history-position-item {
  padding: 0 10px;
  border-bottom: 1px dashed #e8e8e8;
}
.history-position-name {
  text-decoration: none;
  font-size: 14px;
  padding-top: 13px;
  height: 23px;
  line-height: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
}
.salary {
  color: #fd5f39;
  height: 20px;
  line-height: 20px;
}
.history-company-name {
  font-size: 12px;
  color: #999;
  height: 24px;
  line-height: 24px;
  padding-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.clearFix:after {
  content: '\200B';
  display: block;
  height: 0;
  clear: both;
}
</style>