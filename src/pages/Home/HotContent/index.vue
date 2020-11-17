<template>
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
</template>
<script>
export default {
  name: 'HotContent',
  data() {
    return {
      companyTodoList: 0, // 热门城市公司下标
    }
  },
}
</script>
<style scoped>
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
</style>