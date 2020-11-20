<template>
  <div>
    <!-- 轮播模块 star -->
    <div class="company-container">
      <h3>什么值得投</h3>
      <!-- 轮播图 -->
      <div class="company-banner">
        <!-- 列表 -->
        <div class="company-banner-list">
          <div class="block">
            <!-- 轮播父盒子 -->
            <el-carousel
              height="300px"
              indicator-position="none"
              :loop="false"
              autoplay
            >
              <!-- 轮播每一屏 -->
              <el-carousel-item class="banner-box">
                <!-- 每个公司 -->
                <div
                  class="banner-box-item"
                  v-for="(item, index) in newComArrOne"
                  :key="index"
                >
                  <img :src="item.ImgUrl" />
                  <a href="javascript:;">{{ item.comName }}</a>
                </div>
              </el-carousel-item>

              <!-- 轮播每一屏 -->
              <el-carousel-item class="banner-box">
                <!-- 每个公司 -->
                <div
                  class="banner-box-item"
                  v-for="(item, index) in newComArrTwo"
                  :key="index"
                >
                  <img :src="item.ImgUrl" />
                  <a href="javascript:;">{{ item.comName }}</a>
                </div>
              </el-carousel-item>

              <!-- 轮播每一屏 -->
              <el-carousel-item class="banner-box">
                <!-- 每个公司 -->
                <div
                  class="banner-box-item"
                  v-for="(item, index) in newComArrThree"
                  :key="index"
                >
                  <img :src="item.ImgUrl" />
                  <a href="javascript:;">{{ item.comName }}</a>
                </div>
              </el-carousel-item>

              <!-- 轮播每一屏 -->
              <el-carousel-item class="banner-box">
                <!-- 每个公司 -->
                <div
                  class="banner-box-item"
                  v-for="(item, index) in newComArrFour"
                  :key="index"
                >
                  <img :src="item.ImgUrl" />
                  <a href="javascript:;">{{ item.comName }}</a>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- 底部日期 -->
          <div class="footer-box">
            <!-- 日期 -->
            <div class="banner-box-item-zero">
              <span style="color: #37ecb6">。。。。&nbsp; </span>
              <span style="font-size: 16px">11/16</span>
              <span style="color: #37ecb6">&nbsp; 。。。。</span>
            </div>

            <!-- 日期 -->
            <div class="banner-box-item-zero">
              <span style="color: #37ecb6">。。。。&nbsp; </span>
              <span style="font-size: 16px">11/17</span>
              <span style="color: #37ecb6">&nbsp; 。。。。</span>
            </div>

            <!-- 日期 -->
            <div class="banner-box-item-zero">
              <span style="color: #37ecb6">。。。。&nbsp; </span>
              <span style="font-size: 16px">11/18</span>
              <span style="color: #37ecb6">&nbsp; 。。。。</span>
            </div>

            <!-- 日期 -->
            <div class="banner-box-item-zero">
              <span style="color: #37ecb6">。。。。&nbsp; </span>
              <span style="font-size: 16px">11/19</span>
              <span style="color: #37ecb6">&nbsp; 。。。。</span>
            </div>
            <!-- 日期 -->
            <div class="banner-box-item-zero">
              <span style="color: #37ecb6">。。。。&nbsp; </span>
              <span style="font-size: 16px">11/20</span>
              <span style="color: #37ecb6">&nbsp; 。。。。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 轮播模块 end -->

    <!-- 主体内容 star-->
    <div class="companyMain-container">
      <div class="company-bx">
        <!-- 筛选 -->
        <div class="company-positionHead">
          <!-- 公司地点 star -->
          <div class="company-address">
            <span class="company-fl">公司地点：</span>
            <div
              class="company-address-list company-fl"
              v-for="(item, index) in filterOne"
              :key="index"
            >
              <!-- class="company-address-list-active" -->
              <a
                href="javascript:;"
                :class="index == 0 ? 'company-address-list-active' : ''"
                >{{ item }}</a
              >
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
            <div
              class="company-address-list company-fl"
              v-for="(item, index) in filterTwo"
              :key="index"
            >
              <a
                href="javascript:;"
                :class="index == 0 ? 'company-address-list-active' : ''"
                >{{ item }}</a
              >
            </div>
          </div>
          <!--融资阶段： end -->

          <!-- 公司规模： star -->
          <div class="company-address">
            <span class="company-fl">公司规模：</span>
            <div
              class="company-address-list company-fl"
              v-for="(item, index) in filterThree"
              :key="index"
            >
              <a
                href="javascript:;"
                :class="index == 0 ? 'company-address-list-active' : ''"
                >{{ item }}</a
              >
            </div>
          </div>
          <!--公司规模： end -->

          <!-- 行业领域： star -->
          <div class="company-address">
            <span class="company-fl">行业领域：</span>
            <div
              class="company-address-list company-fl"
              v-for="(item, index) in filterFour"
              :key="index"
            >
              <a
                href="javascript:;"
                :class="index == 0 ? 'company-address-list-active' : ''"
                >{{ item }}</a
              >
            </div>
            <a href="javascript:;" class="company-btn-more company-fr">
              更多
              <i></i>
            </a>
          </div>
          <!--行业领域： end -->
        </div>
        <!-- 排序方式 star -->
        <div class="company-sort">
          <span class="company-fl">排序方式：</span>
          <div class="company-sort-left company-fl">
            <a href="javascript:;" class="company-address-list-active"
              >默认排序</a
            >
            <a href="javascript:;">职位数量 ↓</a>
            <a href="javascript:;">面试评价数 ↓</a>
            <a href="javascript:;">简历处理率 ↓</a>
          </div>
          <div class="company-sort-right company-fr">
            <label for="company-cb">
              <input type="checkbox" name="company-cb" />
              有面试评价
            </label>
          </div>
        </div>
        <!-- 排序方式 end -->
        <!-- 公司列表 star -->
        <div class="companyList-container">
          <ul>
            <!-- 腾讯模块 star -->
            <li v-for="item in newPageArr" :key="item.id">
              <div class="companyList-top">
                <p>
                  <img :src="item.ImgUrl" alt="" />
                </p>
                <h3>{{ item.comName }}</h3>
                <h4 class="companyList-top-one">{{ item.indusStage }}</h4>
                <h4 class="companyList-top-two wordCut">
                  {{ item.advantage ? item.advantage : '无' }}
                </h4>
              </div>
              <div class="companyList-bottom">
                <a href="javascript:;">
                  <p class="companyList-green">{{ item.commentNum }}</p>
                  <p class="companyList-line">面试评价</p>
                </a>
                <a href="javascript:;">
                  <p class="companyList-green">{{ item.positionNum }}</p>
                  <p class="companyList-line">在招职位</p>
                </a>
                <a href="javascript:;">
                  <p class="companyList-green">{{ item.perNum }}</p>
                  <p>简历处理率</p>
                </a>
              </div>
            </li>
            <!-- 腾讯模块 end -->
          </ul>
        </div>
        <!-- 公司列表 end -->
      <!-- 分页 -->
        <Pagination :handleSizeChange="handleSizeChange" :handleCurrentChange="handleCurrentChange"/>
        <!-- 热门内容 star-->
        <div class="company-hotList">
          <dl>
            <!-- 头部 -->
            <dt>
              <span
                class="company-link"
                @click="companyTodoList = 0"
                :class="{ current: companyTodoList === 0 }"
                >热门城市</span
              >
              <span
                class="company-link"
                @click="companyTodoList = 1"
                :class="{ current: companyTodoList === 1 }"
                >热门公司</span
              >
              <span
                class="company-link"
                @click="companyTodoList = 2"
                :class="{ current: companyTodoList === 2 }"
                >热门职位</span
              >
              <span
                class="company-link"
                @click="companyTodoList = 3"
                :class="{ current: companyTodoList === 3 }"
                >热门行业</span
              >
              <span
                class="company-link"
                @click="companyTodoList = 4"
                :class="{ current: companyTodoList === 4 }"
                >热门关键词</span
              >
            </dt>
            <!-- 热门城市 star -->
            <dd
              class="company-dd-list company-default"
              :class="{ show: companyTodoList === 0 }"
            >
              <a href="javascript:;">深圳人才网</a>
              <a href="javascript:;">上海人才网</a>
              <a href="javascript:;">广州人才网</a>
              <a href="javascript:;">杭州人才网</a>
              <a href="javascript:;">成都人才网</a>
              <a href="javascript:;">南京人才网</a>
              <a href="javascript:;">武汉人才网</a>
              <a href="javascript:;">西安人才网</a>
              <a href="javascript:;">长沙人才网</a>
              <a href="javascript:;">苏州人才网</a>
              <a href="javascript:;">天津人才网</a>
              <a href="javascript:;">重庆人才网</a>

              <a href="javascript:;" class="company-perples">深圳人才网</a>
              <a href="javascript:;" class="company-perples">上海人才网</a>
              <a href="javascript:;" class="company-perples">广州人才网</a>
              <a href="javascript:;" class="company-perples">杭州人才网</a>
              <a href="javascript:;" class="company-perples">成都人才网</a>
              <a href="javascript:;" class="company-perples">南京人才网</a>
              <a href="javascript:;" class="company-perples">武汉人才网</a>
              <a href="javascript:;" class="company-perples">西安人才网</a>
              <a href="javascript:;" class="company-perples">长沙人才网</a>
              <a href="javascript:;" class="company-perples">苏州人才网</a>
              <a href="javascript:;" class="company-perples">天津人才网</a>
              <a href="javascript:;" class="company-perples">重庆人才网</a>

              <a href="javascript:;" class="company-perples">深圳人才网</a>
              <a href="javascript:;" class="company-perples">上海人才网</a>
              <a href="javascript:;" class="company-perples">广州人才网</a>
              <a href="javascript:;" class="company-perples">杭州人才网</a>
              <a href="javascript:;" class="company-perples">成都人才网</a>
              <a href="javascript:;" class="company-perples">南京人才网</a>
              <a href="javascript:;" class="company-perples">武汉人才网</a>
              <a href="javascript:;" class="company-perples">西安人才网</a>
              <a href="javascript:;" class="company-perples">长沙人才网</a>
              <a href="javascript:;" class="company-perples">苏州人才网</a>
              <a href="javascript:;" class="company-perples">天津人才网</a>
              <a href="javascript:;" class="company-perples">重庆人才网</a>

              <a href="javascript:;" class="company-perples">深圳人才网</a>
              <a href="javascript:;" class="company-perples">上海人才网</a>
              <a href="javascript:;" class="company-perples">广州人才网</a>
              <a href="javascript:;" class="company-perples">杭州人才网</a>
              <a href="javascript:;" class="company-perples">成都人才网</a>
              <a href="javascript:;" class="company-perples">南京人才网</a>
              <a href="javascript:;" class="company-perples">武汉人才网</a>
              <a href="javascript:;" class="company-perples">西安人才网</a>
              <a href="javascript:;" class="company-perples">长沙人才网</a>
              <a href="javascript:;" class="company-perples">苏州人才网</a>
              <a href="javascript:;" class="company-perples">天津人才网</a>
              <a href="javascript:;" class="company-perples">重庆人才网</a>
            </dd>
            <!-- 热门城市 end -->

            <!-- 热门公司 star style="display:none"-->
            <dd
              class="company-dd-list company-default"
              :class="{ show: companyTodoList === 1 }"
            >
              <a href="javascript:;">哔哩哔哩招聘</a>
              <a href="javascript:;">字节跳动招聘</a>
              <a href="javascript:;">字节跳动招聘</a>
              <a href="javascript:;">小红书招聘</a>
              <a href="javascript:;">小红书招聘</a>
              <a href="javascript:;">拼多多招聘</a>
              <a href="javascript:;">前端招聘</a>
              <a href="javascript:;">跟谁学招聘</a>
              <a href="javascript:;">知乎招聘</a>
              <a href="javascript:;">火币招聘</a>
              <a href="javascript:;">shopee招聘</a>
              <a href="javascript:;">airbnb招聘</a>

              <a href="javascript:;" class="company-perples">哔哩哔哩招聘</a>
              <a href="javascript:;" class="company-perples">字节跳动招聘</a>
              <a href="javascript:;" class="company-perples">字节跳动招聘</a>
              <a href="javascript:;" class="company-perples">小红书招聘</a>
              <a href="javascript:;" class="company-perples">小红书招聘</a>
              <a href="javascript:;" class="company-perples">拼多多招聘</a>
              <a href="javascript:;" class="company-perples">前端招聘</a>
              <a href="javascript:;" class="company-perples">跟谁学招聘</a>
              <a href="javascript:;" class="company-perples">知乎招聘</a>
              <a href="javascript:;" class="company-perples">火币招聘</a>
              <a href="javascript:;" class="company-perples">shopee招聘</a>
              <a href="javascript:;" class="company-perples">airbnb招聘</a>

              <a href="javascript:;" class="company-perples">哔哩哔哩招聘</a>
              <a href="javascript:;" class="company-perples">字节跳动招聘</a>
              <a href="javascript:;" class="company-perples">字节跳动招聘</a>
              <a href="javascript:;" class="company-perples">小红书招聘</a>
              <a href="javascript:;" class="company-perples">小红书招聘</a>
            </dd>
            <!-- 热门公司 end -->

            <!-- 热门职业 star style="display:none"-->
            <dd
              class="company-dd-list company-default"
              :class="{ show: companyTodoList === 2 }"
            >
              <a href="javascript:;">会计招聘</a>
              <a href="javascript:;">淘宝客服招聘</a>
              <a href="javascript:;">人力资源招聘</a>
              <a href="javascript:;">Java招聘</a>
              <a href="javascript:;">财务招聘</a>
              <a href="javascript:;">拼多多招聘</a>
              <a href="javascript:;">项目经理招聘</a>
              <a href="javascript:;">新媒体运营招聘</a>
              <a href="javascript:;">Python招聘</a>
              <a href="javascript:;">出纳招聘</a>
              <a href="javascript:;">产品经理招聘</a>
              <a href="javascript:;">律师招聘</a>
              <a href="javascript:;">模具设计招聘</a>

              <a href="javascript:;" class="company-perples">会计招聘</a>
              <a href="javascript:;" class="company-perples">淘宝客服招聘</a>
              <a href="javascript:;" class="company-perples">人力资源招聘</a>
              <a href="javascript:;" class="company-perples">Java招聘</a>
              <a href="javascript:;" class="company-perples">财务招聘</a>
              <a href="javascript:;" class="company-perples">拼多多招聘</a>
              <a href="javascript:;" class="company-perples">项目经理招聘</a>
              <a href="javascript:;" class="company-perples">新媒体运营招聘</a>
              <a href="javascript:;" class="company-perples">Python招聘</a>
              <a href="javascript:;" class="company-perples">出纳招聘</a>
              <a href="javascript:;" class="company-perples">产品经理招聘</a>
              <a href="javascript:;" class="company-perples">律师招聘</a>
              <a href="javascript:;" class="company-perples">模具设计招聘</a>

              <a href="javascript:;" class="company-perples">会计招聘</a>
              <a href="javascript:;" class="company-perples">淘宝客服招聘</a>
              <a href="javascript:;" class="company-perples">人力资源招聘</a>
              <a href="javascript:;" class="company-perples">Java招聘</a>
              <a href="javascript:;" class="company-perples">财务招聘</a>
              <a href="javascript:;" class="company-perples">拼多多招聘</a>
              <a href="javascript:;" class="company-perples">项目经理招聘</a>
              <a href="javascript:;" class="company-perples">新媒体运营招聘</a>
              <a href="javascript:;" class="company-perples">Python招聘</a>
              <a href="javascript:;" class="company-perples">出纳招聘</a>
              <a href="javascript:;" class="company-perples">产品经理招聘</a>
              <a href="javascript:;" class="company-perples">律师招聘</a>
              <a href="javascript:;" class="company-perples">模具设计招聘</a>

              <a href="javascript:;" class="company-perples">会计招聘</a>
              <a href="javascript:;" class="company-perples">淘宝客服招聘</a>
              <a href="javascript:;" class="company-perples">人力资源招聘</a>
              <a href="javascript:;" class="company-perples">Java招聘</a>
              <a href="javascript:;" class="company-perples">财务招聘</a>
              <a href="javascript:;" class="company-perples">拼多多招聘</a>
              <a href="javascript:;" class="company-perples">项目经理招聘</a>
              <a href="javascript:;" class="company-perples">新媒体运营招聘</a>
              <a href="javascript:;" class="company-perples">Python招聘</a>
              <a href="javascript:;" class="company-perples">出纳招聘</a>
              <a href="javascript:;" class="company-perples">产品经理招聘</a>
              <a href="javascript:;" class="company-perples">律师招聘</a>
              <a href="javascript:;" class="company-perples">模具设计招聘</a>
            </dd>
            <!-- 热门职业 end -->

            <!-- 热门行业 star style="display:none"-->
            <dd
              class="company-dd-list company-default"
              :class="{ show: companyTodoList === 3 }"
            >
              <a href="javascript:;">产品经理</a>
              <a href="javascript:;">新媒体运营</a>
              <a href="javascript:;">CTO</a>
              <a href="javascript:;">数据分析师</a>
              <a href="javascript:;">深度学习</a>
              <a href="javascript:;">网络工程师</a>
              <a href="javascript:;">数据挖掘</a>
              <a href="javascript:;">网店运营</a>
              <a href="javascript:;">嵌入式</a>
              <a href="javascript:;">web前端</a>
              <a href="javascript:;">图像识别</a>
              <a href="javascript:;">产品运营</a>
              <a href="javascript:;">运维工程师</a>
              <a href="javascript:;">UI设计师</a>
              <a href="javascript:;">原画师</a>

              <a href="javascript:;" class="company-perples">产品经理</a>
              <a href="javascript:;" class="company-perples">新媒体运营</a>
              <a href="javascript:;" class="company-perples">CTO</a>
              <a href="javascript:;" class="company-perples">数据分析师</a>
              <a href="javascript:;" class="company-perples">深度学习</a>
              <a href="javascript:;" class="company-perples">网络工程师</a>
              <a href="javascript:;" class="company-perples">数据挖掘</a>
              <a href="javascript:;" class="company-perples">网店运营</a>
              <a href="javascript:;" class="company-perples">嵌入式</a>
              <a href="javascript:;" class="company-perples">web前端</a>
              <a href="javascript:;" class="company-perples">图像识别</a>
              <a href="javascript:;" class="company-perples">产品运营</a>
              <a href="javascript:;" class="company-perples">运维工程师</a>
              <a href="javascript:;" class="company-perples">UI设计师</a>
              <a href="javascript:;" class="company-perples">原画师</a>

              <a href="javascript:;" class="company-perples">产品经理</a>
              <a href="javascript:;" class="company-perples">新媒体运营</a>
              <a href="javascript:;" class="company-perples">CTO</a>
              <a href="javascript:;" class="company-perples">数据分析师</a>
              <a href="javascript:;" class="company-perples">深度学习</a>
              <a href="javascript:;" class="company-perples">网络工程师</a>
              <a href="javascript:;" class="company-perples">数据挖掘</a>
              <a href="javascript:;" class="company-perples">网店运营</a>
              <a href="javascript:;" class="company-perples">嵌入式</a>
              <a href="javascript:;" class="company-perples">web前端</a>
              <a href="javascript:;" class="company-perples">图像识别</a>
              <a href="javascript:;" class="company-perples">产品运营</a>
              <a href="javascript:;" class="company-perples">运维工程师</a>
              <a href="javascript:;" class="company-perples">UI设计师</a>
              <a href="javascript:;" class="company-perples">原画师</a>

              <a href="javascript:;" class="company-perples">产品经理</a>
              <a href="javascript:;" class="company-perples">新媒体运营</a>
              <a href="javascript:;" class="company-perples">CTO</a>
              <a href="javascript:;" class="company-perples">数据分析师</a>
              <a href="javascript:;" class="company-perples">深度学习</a>
              <a href="javascript:;" class="company-perples">网络工程师</a>
              <a href="javascript:;" class="company-perples">数据挖掘</a>
              <a href="javascript:;" class="company-perples">网店运营</a>
              <a href="javascript:;" class="company-perples">嵌入式</a>
              <a href="javascript:;" class="company-perples">web前端</a>
              <a href="javascript:;" class="company-perples">图像识别</a>
              <a href="javascript:;" class="company-perples">产品运营</a>
              <a href="javascript:;" class="company-perples">运维工程师</a>
              <a href="javascript:;" class="company-perples">UI设计师</a>
              <a href="javascript:;" class="company-perples">原画师</a>
            </dd>
            <!-- 热门行业 end -->

            <!-- 热门热门关键词 star style="display:none"-->
            <dd
              class="company-dd-list company-default"
              :class="{ show: companyTodoList === 4 }"
            >
              <a href="javascript:;">懒人听书</a>
              <a href="javascript:;">威锋网</a>
              <a href="javascript:;">55海淘</a>
              <a href="javascript:;">红手指</a>
              <a href="javascript:;">途虎养车</a>
              <a href="javascript:;">17track</a>
              <a href="javascript:;">csc</a>
              <a href="javascript:;">三节课</a>
              <a href="javascript:;">混沌大学</a>
              <a href="javascript:;">咚漫</a>
              <a href="javascript:;">乐有家</a>
              <a href="javascript:;">魔趣</a>
              <a href="javascript:;">网商园</a>
              <a href="javascript:;">实验楼</a>
              <a href="javascript:;">六间房</a>
              <a href="javascript:;">umu</a>
              <a href="javascript:;">dnspod</a>
              <a href="javascript:;">720云</a>

              <a href="javascript:;" class="company-perples">懒人听书</a>
              <a href="javascript:;" class="company-perples">威锋网</a>
              <a href="javascript:;" class="company-perples">55海淘</a>
              <a href="javascript:;" class="company-perples">红手指</a>
              <a href="javascript:;" class="company-perples">途虎养车</a>
              <a href="javascript:;" class="company-perples">17track</a>
              <a href="javascript:;" class="company-perples">csc</a>
              <a href="javascript:;" class="company-perples">三节课</a>
              <a href="javascript:;" class="company-perples">混沌大学</a>
              <a href="javascript:;" class="company-perples">咚漫</a>
              <a href="javascript:;" class="company-perples">乐有家</a>
              <a href="javascript:;" class="company-perples">魔趣</a>
              <a href="javascript:;" class="company-perples">网商园</a>
              <a href="javascript:;" class="company-perples">实验楼</a>
              <a href="javascript:;" class="company-perples">六间房</a>
              <a href="javascript:;" class="company-perples">umu</a>
              <a href="javascript:;" class="company-perples">dnspod</a>
              <a href="javascript:;" class="company-perples">720云</a>

              <a href="javascript:;" class="company-perples">懒人听书</a>
              <a href="javascript:;" class="company-perples">威锋网</a>
              <a href="javascript:;" class="company-perples">55海淘</a>
              <a href="javascript:;" class="company-perples">红手指</a>
              <a href="javascript:;" class="company-perples">途虎养车</a>
              <a href="javascript:;" class="company-perples">17track</a>
              <a href="javascript:;" class="company-perples">csc</a>
              <a href="javascript:;" class="company-perples">三节课</a>
              <a href="javascript:;" class="company-perples">混沌大学</a>
              <a href="javascript:;" class="company-perples">咚漫</a>
              <a href="javascript:;" class="company-perples">乐有家</a>
              <a href="javascript:;" class="company-perples">魔趣</a>
              <a href="javascript:;" class="company-perples">网商园</a>
              <a href="javascript:;" class="company-perples">实验楼</a>
              <a href="javascript:;" class="company-perples">六间房</a>
              <a href="javascript:;" class="company-perples">umu</a>
              <a href="javascript:;" class="company-perples">dnspod</a>
              <a href="javascript:;" class="company-perples">720云</a>
            </dd>
            <!-- 热门热门关键词 end -->
          </dl>
        </div>
        
        <!-- 热门内容 end-->
      </div>
    </div>

    <!-- 主体内容 end-->
  </div>
</template>
<script>
import HotContent from '@/components/HotContent'

// 引入api解构出接口
// 引入api接口函数
import { reqCompanys, reqFilters } from '../../api'
export default {
  name: 'Company',
  component: {
    HotContent,
  },
  data() {
    return {
      btnFlag: true,
      allStation: [], // 所有公司信息
      allFilters: [], // 所有过滤栏
      pageSize: 8, // 每页条数
      pageTotal: 32, // 总条数
      currentPage: 1, // 默认第一页
      newComArrOne: [], // 轮播第一屏
      newComArrTwo: [], // 轮播第二屏
      newComArrThree: [], // 轮播第三屏
      newComArrFour: [], // 轮播第四屏

      // 过滤栏4个
      filterOne: [],
      filterTwo: [],
      filterThree: [],
      filterFour: [],

      // 分页四个
      PageOneArr: [],
      PageTwoArr:[],
      PageThreeArr:[],
      PageFourArr:[],
      AllPageArr:[],
      newPageArr:[],

      companyTodoList: 0, // 热门城市公司下标
    }
  },
  methods: {
 // 分页
    handleSizeChange: function (size) {
      this.pagesize = size; //当前显示页数
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage; //第几页
      this.newPageArr = this.AllPageArr[currentPage - 1];
    },
  },
  async mounted() {
    // 请求所有公司岗位信息
    const resultOne = await reqCompanys()
    this.allStation = resultOne.data
    // 轮播图每一屏的数据
    this.newComArrOne = this.allStation.slice(0, 5)
    this.newComArrTwo = this.allStation.slice(6, 11)
    this.newComArrThree = this.allStation.slice(12, 17)
    this.newComArrFour = this.allStation.slice(24, 29)

    // 请求过滤数据
    const resultTwo = await reqFilters()
    this.allFilters = resultTwo.data
    this.filterOne = this.allFilters[0].cityName.slice(0, 15)
    this.filterTwo = this.allFilters[0].componySize
    this.filterThree = this.allFilters[0].financeStages
    this.filterFour = this.allFilters[0].industry.slice(1, 11)

      // 分页器四个
    this.PageOneArr = this.allStation.slice(0, 8);
    this.PageTwoArr = this.allStation.slice(9, 17);
    this.PageThreeArr = this.allStation.slice(18, 26);
    this.PageFourArr = this.allStation.slice(24, 32);

    // 四个按钮总数组
    this.AllPageArr = [
      this.PageOneArr,
      this.PageTwoArr,
      this.PageThreeArr,
      this.PageFourArr,
    ];
    // 默认第一页是大数组里的第一个数组
    this.newPageArr = this.AllPageArr[0];
  },
}
</script>
<style>
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

.backtop:hover {
  background-position: right top !important;
}
/* 轮播模块 star*/

.company-container {
  width: 100%;
  height: 389px;
  background: url('./images/ia_100000004.jpg') no-repeat;
  background-size: 100% 389px;
}

/* 轮播图内容 */

.company-container h3 {
  font-size: 30px;
  color: #fff;
  text-shadow: 0 3px 9px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 48px;
  text-align: center;
  padding: 25px 0 0px;
  font-weight: normal;
}

.company-banner {
  width: 1120px;
  margin: 0 auto;
  position: relative;
  background-color: #00b38b;
  height: 300px;
}

/* 列表 */

.company-banner-list {
  width: 100%;
  overflow: hidden;
  position: relative;
}

/* 轮播大盒子 */
.banner-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* 轮播每个公司 */
.banner-box-item {
  width: 142px;
  height: 202px;
  background-color: pink;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 9px;
  position: relative;
}
.banner-box-item img {
  display: block;
  width: 100%;
  height: 140px;
}
.banner-box-item a {
  display: block;
  text-align: center;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  border-radius: 1px;
  width: 128px;
  height: 40px;
  line-height: 40px;
  color: #333333;
  font-size: 15px;
  position: absolute;
}
/* 底部日期 */
.footer-box {
  width: 100%;
  height: 21px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-around;
}

/* 轮播模块 end*/

/* 主题内容 star */

.companyMain-container {
  overflow: hidden;
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

/* 排序方式 star */

.company-sort {
  margin-top: 13px;
  height: 15px;
  padding: 12px;
  text-align: left;
  line-height: 15px;
  font-size: 13px;
  border: 1px solid #ededed;
}

/* 左边盒子 */

.company-sort-left {
  margin-right: 35px;
  padding-left: 16px;
}

.company-sort-left a {
  padding: 4px 8px;
  cursor: pointer;
  text-decoration: none;
}

/* 右边盒子 */

.company-sort-right {
  width: 114px;
  margin-right: 18px;
  text-align: right;
  cursor: default;
}

/* 排序方式 end */

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
  border: 1px solid #eee;
}

.companyList-container ul li:hover {
  box-shadow: 0 0 10px 0 rgba(56, 81, 76, 0.12);
}

/* 企业LOGO 上 */

.companyList-top {
  margin: 0 13px;
  padding: 20px 0 14px;
  text-align: center;
  border-bottom: 1px dashed #e0e0e0;
  position: relative;
  font-size: 14px;
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
.wordCut {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-wrap: normal;
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
  content: '';
  height: 30px;
  width: 1px;
  background: #ededed;
}

/* 公司列表 end */

/* 分页 */

.companyList-pages {
  margin: 40px 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
}
/* 热门内容 star */

.company-hotList {
  width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
  overflow: hidden;
}

.company-hotList dl {
  position: relative;
}

/* 头部 */

.company-hotList dl dt {
  border-bottom: 1px solid #e8e8e8;
  font-size: 16px;
  color: #333;
  margin-bottom: 21px;
}

.company-link {
  margin-right: 20px;
  cursor: pointer;
}

/* 点谁谁加下划线 */

.current {
  display: inline-block;
  padding: 14px 0;
  border-bottom: 2px solid #333;
}
/* 内容 */
.company-dd-list {
  display: none;
  position: relative;
  width: 1120px;
  color: #555;
  font-size: 14px;
  overflow: hidden;
}
.show {
  display: block;
}
.company-dd-list a {
  white-space: nowrap;
  float: left;
  height: 15px;
  padding: 8px 18px 8px 0;
  line-height: 15px;
  color: #555;
  text-decoration: none;
}
.company-dd-list a:hover {
  color: #00b38a;
  text-decoration: underline;
}
/* 展开 */
.company-nofollow {
  height: 22px;
  position: absolute;
  right: 3px;
  top: 78px;
  cursor: pointer;
  color: #999;
}
.company-nofollow i {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 5px;
  background-image: url('./images/arrow_down2_eea7e54.png');
  background-repeat: no-repeat;
  background-position: 0 3px;
  background-size: 12px 6px;
}
/* 默认显示一行人才网,并高度99px */
.company-default {
  height: 99px;
}
/* 默认隐藏第一行之外的人才网a标签样式 */
.company-perples {
  display: none;
}

/* 热门内容 end */

/* 主题内容 end */

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #00b38b;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #00b38b;
}
</style>