<template>
  <div>
      <!-- 头部 star -->
  <div class="position-head" data-companyid="62">
    <div class="position-content clearfix ">
      <div class="position-content-l">
        <div class="job-name" title="前端工程师">
          <h4 class="company">{{detailInfo[index].companyName}}</h4>
          <h1 class="name">
            <span class="position-name-wrap">
              <span class="position-head-wrap-name">{{detailInfo[index].positionName}}</span>
            </span>
          </h1>
          <div class="marEdit"></div>
        </div>
        <dd class="job_request">
          <h3>
            <span class="salary">{{detailInfo[index].Salary}} </span>
            <span>{{detailInfo[index].city}}</span>
            <span>/{{detailInfo[index].Education}} /</span>
            <span> {{detailInfo[index].workingExperience}}/</span>
            <span>全职</span>
          </h3>
          <!-- 职位标签 -->
          <ul class="position-label clearfix">
            <li class="labels">{{detailInfo[index].industrySector}}</li>
          </ul>
          <p class="publish_time">03:49&nbsp; 发布于拉勾网</p>
        </dd>
      </div>

      <i class="icon-connect"></i>

      <div class="position-content-r">

        <div class="position-deal">
          <a class="jd_collection">收藏</a>
          <a class="send-CV-btn">投个简历</a>
        </div>
        <!-- 简历状态 -->
        <div class="resume-select">
          <a class="resume-select-fl" href="###" target="_blank">
            <i class="fl-img"></i>
            <span>完善在线简历</span>
          </a>
          <a class="resume-select-ri" href="###" target="_blank">
            <i class="ri-img"></i>
            <span>上传附件</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- 头部 end -->

  <!-- 左边部分 star -->
  <div class="container">
    <div class="content_l">
      <div class="job_detail">
        <dt class="join_tc_icon">
          <dd class="job-advantage">
            <span class="advantage">职位诱惑：</span>
            <p>{{detailInfo[index].jobTemptation}}</p>
          </dd>
          <dd class="job_bt">
            <h3 class="description">职位描述：</h3>
            <div class="job-detail">
              <p>{{detailInfo[index].jobDescription}}</p>
            </div>
          </dd>
          <dd class="job-addres">
            <h3 class="address">工作地址</h3>
            <div class="work_addr">
              <a href="javascript:;">深圳</a> -
              <a href="javascript:;">南山区</a> - 
              <a href="javascript:;">科技园</a>
              - 南山科技园
              <a href="javascript:;" id="mapPreview">查看地图</a>
            </div>
          </dd>
          <dd class="jd_publisher">
            <h3>职位发布者:</h3>
            <div class="border">
              <img :src= "detailInfo[index].HR.head" alt="">
              <div class="publisher_name">
                <a title="杨琳姐">
                  <span class="name">{{detailInfo[index].HR.name}}</span>
                  <span class="chat_me"></span>
                </a>
                <span class="pos"> 项目助理 </span>
                <span class="circle"></span>
                <span class="time" id="timeInfo">今日活跃</span>
              </div>
            </div>
          </dd>
        </dt>
        <dl class="interview_experience module-container">
          <div class="module-title">
            面试评价
          </div>
          <div class="reviews-area">
            <div class="list-empty">
              <i></i>
              <span>该职位尚未收到面试评价</span>
            </div>
          </div>
        </dl>
        <div class="popular_recom hide-recom">
          <div class="expansion">
            展开
            <i></i>
          </div>
          <dl class="popular_company">
            <dt>推荐公司：</dt>
            <dd>
              <a target="_blank" href="javascript:;">瑞可甜心</a>
              <a target="_blank" href="javascript:;">北京微橡科技有限公司</a>
              <a target="_blank" href="javascript:;">峰尚</a>
              <a target="_blank" href="javascript:;">天云软件</a>
              <a target="_blank" href="javascript:;">健翔医院</a>
              <a target="_blank" href="javascript:;">愿程教育</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  <!-- 左边部分 end -->

    <!-- 右边部分 star -->
    <div class="content_r">
      <dl class="job_company">
        <dt>
          <a href="javascript:;">
            <img :src="detailInfo[index].imgUrl" alt="" class="b2">
            <div class="job_company_content">
              <h3>
                <em class="fl-cn">
                  {{detailInfo[index].companyName}}
                </em>
                <i class="icon-approve icon-glyph-valid"></i>
              </h3>
            </div>
          </a>
        </dt>
        <dd>
          <ul class="c_feature">
            <li>
              <i class="icon-four-squares iconfont"></i>
              <h4 class="c_feature_name">{{detailInfo[index].industrySector}}</h4>
            </li>
            <li>
              <i class="icon-trend iconfont"></i>
              <h4 class="c_feature_name">{{detailInfo[index].FinancingStage}}</h4>
            </li>
            <li>
              <i class="icon-ren iconfont"></i>
              <h4 class="c_feature_name">{{detailInfo[index].StaffSize}}</h4>
            </li>
            <li>
              <i class="icon-home iconfont"></i>
              <h4 class="c_feature_name">{{detailInfo[index].companyUrl}}</h4>
            </li>
          </ul>
        </dd>
      </dl>

      <div class="jobs_similar" id="jobs_similar">
        <h4 class="jobs_similar_header">
          <span>相似职位</span>
        </h4>
        <input type="hidden" value="true" id="similarPosition">
        <div class="jobs_similar_content" id="jobs_similar_content">
          <div class="jobs_similar_detail" id="jobs_similar_detail" data-lg-tj-track-code="jobs_similar"
            data-lg-tj-track-type="1">
            <ul class="similar_list reset">
              <!--source=rec-->
              <li class="similar_list_item  clearfix" data-jobid="7330519">
                <a class="position_link clearfix" href="javascript:;" target="_blank" data-index="0"
                  data-lg-tj-id="9600" data-lg-tj-no="0001" data-lg-tj-cid="7330519" data-lg-tj-abt="default|0"
                  data-lg-webtj-_show_id="107f46364fd74f6dbaf1422f3d79a1fb"
                  data-lg-webtj-_search_type="position_similar" data-lg-webtj-_content_type="jd">
                  <div class="similar_list_item_logo">
                    <img class="lazy_img"
                      data-original="http://www.lgstatic.com/i/image2/M01/AB/70/CgotOVvtLkWAaHG7AAAtqT2isAE445.png"
                      alt="科楠科技" width="56" height="56"
                      src="http://www.lgstatic.com/i/image2/M01/AB/70/CgotOVvtLkWAaHG7AAAtqT2isAE445.png"
                      style="display: block;">
                  </div>
                  <div class="similar_list_item_pos">
                    <h2 title="硬件工程师">硬件工程师</h2>
                    <p>10k-18k</p>


                    <p class="similar_company_name" title="科楠科技 [深圳·南山区]">
                      科楠科技 [深圳·南山区]
                    </p>
                  </div>
                </a>
              </li>
              <li class="similar_list_item  clearfix" data-jobid="7910234">
                <a class="position_link clearfix" href="javascript:;" target="_blank" data-index="1"
                  data-lg-tj-id="9600" data-lg-tj-no="0002" data-lg-tj-cid="7910234" data-lg-tj-abt="default|0"
                  data-lg-webtj-_show_id="107f46364fd74f6dbaf1422f3d79a1fb"
                  data-lg-webtj-_search_type="position_similar" data-lg-webtj-_content_type="jd">
                  <div class="similar_list_item_logo">
                    <img class="lazy_img"
                      data-original="http://www.lgstatic.com/i/image/M00/BE/12/CgqKkVjLi3yATrXvAAGEYg5z3tw116.png"
                      alt="深信服科技集团" width="56" height="56"
                      src="http://www.lgstatic.com/i/image/M00/BE/12/CgqKkVjLi3yATrXvAAGEYg5z3tw116.png"
                      style="display: block;">
                  </div>
                  <div class="similar_list_item_pos">
                    <h2 title="硬件安全工程师">硬件安全工程师</h2>
                    <p>15k-30k·14薪</p>


                    <p class="similar_company_name" title="深信服科技集团 [深圳·南山区]">
                      深信服科技集团 [深圳·南山区]
                    </p>
                  </div>
                </a>
              </li>
              <li class="similar_list_item  clearfix" data-jobid="7924719">
                <a class="position_link clearfix" href="javascript:;" target="_blank" data-index="2"
                  data-lg-tj-id="9600" data-lg-tj-no="0003" data-lg-tj-cid="7924719" data-lg-tj-abt="default|0"
                  data-lg-webtj-_show_id="107f46364fd74f6dbaf1422f3d79a1fb"
                  data-lg-webtj-_search_type="position_similar" data-lg-webtj-_content_type="jd">
                  <div class="similar_list_item_logo">
                    <img class="lazy_img"
                      data-original="http://www.lgstatic.com/i/image/M00/2D/0F/CgqKkVc63sGAIIFHAAAZPE6r9G0051.jpg"
                      alt="普渡科技" width="56" height="56"
                      src="http://www.lgstatic.com/i/image/M00/2D/0F/CgqKkVc63sGAIIFHAAAZPE6r9G0051.jpg"
                      style="display: block;">
                  </div>
                  <div class="similar_list_item_pos">
                    <h2 title="Android开发工程师（机器人&amp;智能硬件）">Android开发工程师（机器人&amp;智能硬件）</h2>
                    <p>15k-30k</p>


                    <p class="similar_company_name" title="普渡科技 [深圳·科技园]">
                      普渡科技 [深圳·科技园]
                    </p>
                  </div>
                </a>
              </li>
              <li class="similar_list_item  clearfix" data-jobid="7044080">
                <a class="position_link clearfix" href="javascript" target="_blank" data-index="3" data-lg-tj-id="9600"
                  data-lg-tj-no="0004" data-lg-tj-cid="7044080" data-lg-tj-abt="default|0"
                  data-lg-webtj-_show_id="107f46364fd74f6dbaf1422f3d79a1fb"
                  data-lg-webtj-_search_type="position_similar" data-lg-webtj-_content_type="jd">
                  <div class="similar_list_item_logo">
                    <img class="lazy_img"
                      data-original="http://www.lgstatic.com/i/image/M00/22/B9/Ciqc1F7sbSOAPvJsAAD-EFH95mc021.jpg"
                      alt="翌日科技" width="56" height="56"
                      src="http://www.lgstatic.com/i/image/M00/22/B9/Ciqc1F7sbSOAPvJsAAD-EFH95mc021.jpg"
                      style="display: block;">
                  </div>
                  <div class="similar_list_item_pos">
                    <h2 title="硬件工程师">硬件工程师</h2>
                    <p>15k-25k</p>


                    <p class="similar_company_name" title="翌日科技 [深圳·新安]">
                      翌日科技 [深圳·新安]
                    </p>
                  </div>
                </a>
              </li>
              <li class="similar_list_item  clearfix" data-jobid="6652238">
                <a class="position_link clearfix" href="javascript:;" target="_blank" data-index="4"
                  data-lg-tj-id="9600" data-lg-tj-no="0005" data-lg-tj-cid="6652238" data-lg-tj-abt="default|0"
                  data-lg-webtj-_show_id="107f46364fd74f6dbaf1422f3d79a1fb"
                  data-lg-webtj-_search_type="position_similar" data-lg-webtj-_content_type="jd">
                  <div class="similar_list_item_logo">
                    <img class="lazy_img"
                      data-original="http://www.lgstatic.com/i/image2/M01/02/95/CgoB5lyRtoeAYVvdAABK_PoyKfI850.png"
                      alt="火火兔" width="56" height="56"
                      src="http://www.lgstatic.com/i/image2/M01/02/95/CgoB5lyRtoeAYVvdAABK_PoyKfI850.png"
                      style="display: block;">
                  </div>
                  <div class="similar_list_item_pos">
                    <h2 title="硬件工程师">硬件工程师</h2>
                    <p>10k-18k</p>


                    <p class="similar_company_name" title="火火兔 [深圳·西丽]">
                      火火兔 [深圳·西丽]
                    </p>
                  </div>
                </a>
              </li>
            </ul>
            <a href="javascript:;" class="jobs_similar_footer" target="_blank" data-lg-tj-id="9700"
              data-lg-tj-no="idnull" data-lg-tj-cid="idnull">查看更多相似职位</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边部分 end -->
  </div>
  </div>
</template>
<script>
// 引入axios
import {reqPositions} from "../../api"
export default {
  name: 'Detail',

  data(){
     return {
       detailInfo:[],  //接收详情页动态数据
       index: 0  // 接收详情页的某一条公司数据
     }
  },
  
  // 页面渲染完成后发送请求详情页数据
 async mounted(){
   
     const result = await reqPositions();
    //  console.log(result);
     if(result.code===20000){
        //  console.log(this.$data.detailInfo);
         this.$data.detailInfo = result.data;
        //  console.log(this.$data.detailInfo[0].companyName);
         
     }else{
       alert("详情页请求失败："+result.message)
     }
  }
}
</script>
<style rel="stylesheet/css" >
/* 投简历 star */
* {
  margin: 0;
  padding: 0;
}

body ul,
li {
  list-style: none;
}

.position-head {
  background-color: #f2f5f4;
  padding: 30px 0 11px;
  width: 100%;
  min-width: 1024px;
  overflow: hidden;
}

.position-head .position-content {
  position: relative;
  width: 1024px;
  margin: 0 auto;
  overflow: hidden;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.position-head .position-content .position-content-l {
  float: left;
  max-width: 574px;
}

.position-head .position-content .position-content-l .job-name {
  margin: 0 0 13px;
}

.position-head .position-content .position-content-l .job-name .company {
  margin: -2px 0 8px 0;
  font-size: 14px;
  color: #555;
  position: relative;
  left: 2px;
}

.position-head .position-content .position-content-l .job-name .name {
  position: relative;
  display: inline-block;
  height: 36px;
  font-size: 36px;
  color: #333;
  line-height: 36px;
  margin: 0;
}

.position-head .position-name-wrap {
  position: relative;
  white-space: nowrap;
}

.position-head .position-name-wrap .position-head-wrap-name {
  max-width: 492px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}

.position-head .position-content .position-content-l .job-name .marEdit {
  position: relative;
  display: inline-block;
  bottom: -3px;
}

.position-head .position-content .position-content-l .job_request {
  margin-top: 2px;
  font-size: 18px;
  color: #555;
}

.position-head .position-content .position-content-l .job_request h3 .salary {
  color: #fd5f39;
}
.position-label {
  overflow: hidden;
}
.position-label .labels {
  float: left;
  height: 22px;
  margin-right: 8px;
  padding: 0 10px;
  line-height: 22px;
  background-color: #fff;
  color: #70797b;
  font-size: 12px;
  border-radius: 10px;
}
.position-head
  .position-content
  .position-content-l
  .job_request
  .publish_time {
  padding-top: 10px;
  font-size: 14px;
  color: #999;
}
.position-content {
  position: relative;
}

.position-content-r {
  overflow: hidden;
  padding-left: 245px;
  float: right;
  padding-top: 17px;
}
.icon-connect {
  background: url(./images/1.png) no-repeat;
  display: block;
  width: 173px;
  height: 50px;
  position: absolute;
  left: 610px;
  top: 30px;
}

.position-deal {
  overflow: hidden;
}
.jd_collection,
.send-CV-btn {
  display: inline-block;
  height: 44px;
  width: 130px;
  line-height: 44px;
  text-align: center;
  border: 1px solid #00b38a;
  border-radius: 3px;
  background-color: #ebf0ef;
  cursor: pointer;
  font-size: 14px;
  color: #00b38a;
}
.send-CV-btn {
  margin-left: 17px;
  font-size: 18px;
  background-color: #00b38a;
  color: #fff;
}

.resume-select {
  overflow: hidden;
  margin-top: 20px;
  margin-left: 10px;
}

.resume-select-fl,
.resume-select-ri {
  display: inline-block;
  color: #555;
  background-color: transparent;
  font-size: 14px;
}
.resume-select-fl {
  margin-left: 20px;
  position: relative;
}
.resume-select-ri {
  margin-left: 80px;
  position: relative;
}
.fl-img {
  display: inline-block;
  width: 23px;
  height: 18px;
  background: url(./images/2.png);
  position: absolute;
  left: -23px;
  top: 2px;
}
.ri-img {
  width: 23px;
  height: 20px;
  display: inline-block;
  line-height: 20px;
  background: url(./images/3.png);
  position: absolute;
  left: -23px;
  top: 2px;
}

/* 投简历 end */

/* 内容 star */
.container {
  width: 1024px;
  margin: 0 auto;
  padding-bottom: 118px;
}
/* 内容end */

/* 左边部分开始 */

.content_l{
  float: left;
  position: relative;
  padding-top: 26px;
  height: 999px;
  width: 696px;
  background-position: right;
  padding-right: 52px;
  padding-top: 26px;
}
.job_detail dt {
  position: relative;
  overflow: hidden;
  line-height: 47px;
}
.job_detail dd {
  padding: 15px 0 10px;
  color: #333;
  word-wrap: break-word;
}
.job-advantage .advantage {
  font-size: 16px;
  color: #333;
  font-weight: 700;
}
.job-advantage p {
  margin-top: 13px;
  color: #333;
  font-size: 14px;
}
.job_detail dd.job_bt {
  margin-bottom: 0;
  padding-bottom: 0;
}
.job_bt h3.description, .leader-interview .description, .team-leader .description {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  line-height: 16px;
  margin-bottom: 22px;
  margin-top: 5px;
}
.job_bt p {
  margin: 1em 0;
  font-size: 14px;
}
.address{
  font-size: 16px;
  padding-bottom: 10px;
}
.job_detail .job-address {
  padding-top: 25px;
  margin-top: -26px;
  margin-bottom: 10px;
  overflow: hidden;
}
#mapPreview{
  float: right;
}
.job_detail .job-address .address {
  font-size: 16px;
  color: #333;
  font-weight: 700;
}
.work_addr a {
  color: #00b38a;
  cursor: pointer;
  font-size: 14px;
}
.job_detail .job-address .work_addr #mapPreview {
  float: right;
}
.job_detail dd.jd_publisher {
  padding: 5px 0 10px;
  position: relative;
  margin-top: 38px;
  margin-bottom: 40px;
}
.jd_publisher h3 {
  width: 90px;
  height: 22px;
  margin: 0 0 0 -45px;
  position: absolute;
  left: 44px;
  top: -24px;
  z-index: 2;
  font-size: 16px;
  line-height: 22px;
  color: #333;
  font-weight: 700;
  text-align: center;
}
.jd_publisher .border {
  height: 70px;
  padding: 14px 10px;
  padding-left: 0;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.jd_publisher .border img {
  position: absolute;
  left: 0;
  top: 14px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  background-size: 50px 50px;
  width: 50px;
  height: 50px;
}
.jd_publisher .publisher_name {
  float: left;
}
.jd_publisher .publisher_name span.name {
  float: left;
  font-size: 18px;
  color: #333;
  margin: 10px 0 0 65px;
  max-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jd_publisher .publisher_name span.chat_me {
  position: relative;
  float: left;
  font-size: 18px;
  color: #333;
  width: 25px;
  height: 25px;
  margin: 20px 0 0 5px;
  background: url('./images/ia_100000072.png') no-repeat 0 0;
  cursor: pointer;
}


.jd_publisher .publisher_name span.pos {
  clear: left;
  float: left;
  font-size: 14px;
  color: #999;
  margin: -10px 0 5px 65px;
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jd_publisher .publisher_name span.circle {
  float: left;
  display: inline-block;
  border: 1px solid #999;
  border-radius: 50%;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 12px;
  background: #999;
}
.jd_publisher .publisher_name span.time {
  float: left;
  color: #999;
  font-size: 14px;
  margin: -10px 0;
}

.interview_experience {
  margin-top: 10px;
  margin-bottom: 40px;
}
.module-container {
  margin-top: 10px;
}
.module-container {
  border-top: 1px solid #e8e8e8;
  min-height: 20px;
  margin-top: 40px;
  position: relative;
}
.module-container .module-title {
  position: absolute;
  left: 0;
  top: -11px;
  color: #000;
  font-size: 18px;
  padding-right: 16px;
  background-color: #fff;
}
.interview_experience .reviews-area {
  font-size: 14px;
  color: #555;
}
.interview_experience .reviews-area .list-empty {
  margin: 80px 0;
  text-align: center;
}
.interview_experience .reviews-area .list-empty i {
  display: inline-block;
  height: 45px;
  width: 45px;
  background-image: url('./images/unhappy_d9b5db5.png');
  vertical-align: middle;
  margin-right: 15px;
}
.interview_experience .reviews-area .list-empty span {
  display: inline-block;
}
.popular_recom {
  margin-top: 46px;
  position: relative;
}
.hide-recom {
  overflow: hidden;
}
.popular_recom .expansion {
  position: absolute;
  top: 12px;
  right: 12px;
  color: #bebebe;
}
.popular_recom .expansion i {
  position: relative;
  top: -1px;
  display: inline-block;
  width: 10px;
  height: 6px;
  margin-left: 2px;
  background: url('./images/arrow_down_c415674.png') 0 0 no-repeat;
}
.popular_company{
  overflow: hidden;
  font-size: 14px;
}
.popular_recom dt {
  float: left;
  color: #bebebe;
  
}
.popular_recom dd {
  margin: 0 70px;
}
.popular_recom dl a {
  display: inline-block;
  margin-left: 14px;
  text-decoration: underline;
  color: #999;
}
/* 左边部分结束 */

/* 右边部分开始 */
.content_r {
  float: right;
  width: 245px;
  margin-left: 31px;
  margin-top: 45px;
}


.c_feature .icon-four-squares{
  font-size: 16px !important;
  color: #555
}

.job_company>dt {
    position: relative;
    padding-bottom: 25px;
    margin-bottom: -10px;
}
.job_company .b2 {
  border: 2px solid #f2f2f2;
}
.job_company dt div {
  position: absolute;
  left: 90px;
  bottom: 5px;
  padding: 20px 0;
}
.job_company dt a img{
  width: 100px;
  height: 100px;
}
.job_company dt h3 {
  margin-left: 21px;
  margin-bottom: 0;
  font-size: 18px;
  line-height: 18px;
  color: #555;
}
.icon-glyph-valid {
  width: 16px;
  height: 18px;
  margin-left: 0;
  background: url('./images/ia_100000075.png') no-repeat 0 0;
  color: #fff;
  vertical-align: bottom;
}
.job_company dt h3 i {
  width: 16px;
  height: 18px;
  margin-left: 0;
  display: inline-block;
  margin-left: -4px;
  color: #00b38a;
  font-size: 14px;
}

.job_company .c_feature li {
  position: relative;
  margin: 0 0 16px;
  color: #737373;
  line-height: 25px;
}
.job_company .c_feature i {
  display: inline-block;
  margin-right: 15px;
}
.job_company .c_feature li .c_feature_name {
  margin: 0;
  font-size: 14px;
  font-weight: unset;
  display: inline;
}

.jobs_similar {
  padding-top: 8px;
}
.jobs_similar_header {
  margin: 14px 0;
}

.jobs_similar_header span {
  position: relative;
  display: inline-block;
  *display: inline;
  padding: 0 10px 7px 0;
  *padding-bottom: 2px;
  margin-right: -4px;
  margin-bottom: -2px;
  color: #555;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}
.jobs_similar_header span:after {
  content: "";
  position: absolute;
  top: 11px;
  left: 83px;
  display: inline-block;
  width: 162px;
  border-bottom: 1px solid #e8e8e8;
}

button, input, optgroup, select, textarea {
  margin: 0;
  padding: 0;
  border: 1px solid #ededed;
  border-radius: 0;
  font-family: "Hiragino Sans GB","Microsoft Yahei",SimSun,Arial,"Helvetica Neue",Helvetica;
}
.jobs_similar_detail .similar_list {
  margin-top: -12px;
}

.similar_list_item {
  width: 245px;
  vertical-align: top;
  border-bottom: 1px dashed #e5e5e5;
  position: relative;
  overflow: hidden;
  margin: 10px 0;
  overflow: hidden;
}

.similar_list_item a {
  display: block;
  padding: 12px 0 14px;
  overflow: hidden;
}
.similar_list_item_logo {
  width: 60px;
  margin-right: 12px;
  
}
.similar_list_item_logo img{
  float: left;
}
.similar_list_item_pos {
  width: 167px;
  float: right;
}

.similar_list_item_logo img {
  vertical-align: middle;
  display: block;
  border: 2px solid #f2f2f2;
}

.jobs_similar_footer {
    display: block;
    color: #555;
    height: 35px;
    line-height: 35px;
    background: #fafafa url(//www.lgstatic.com/lg-www-fed/job-detail/modules/job-recommend/img/similar_position_triangle_544444c.png) no-repeat 205px 10px;
    margin-bottom: 28px;
    text-align: center;
}


/* 内容 end */

</style>