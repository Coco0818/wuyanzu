<template>
  <div class="register-box">
    <div class="register-header">
      <div class="register-header-bg">
        <span>
          <img
            class="register-header-img"
            src="./images/register_logo.png"
            alt=""
          />
        </span>
        <div class="register-header-right">
          <div class="show_qrcode_app">
            <!-- <i class="icon_app"></i> -->
            <img class="icon_app" src="./images/register_phone.png" alt="" />
            <span>拉勾APP</span>
          </div>
        </div>
      </div>
    </div>
    <div class="register-middle">
      <div class="register-middle-container">
        <img
          class="register-middle-img"
          src="./images/register_word.png"
          alt=""
        />
        <div class="register-middle-home">
          <div class="home-left">
            <div class="home-left-seach">
              <img
                class="home-left-img"
                src="./images/register_seach.png"
                alt=""
              />
              <input
                class="search-input ui-autocomplete-input"
                tabindex="1"
                type="text"
                placeholder="搜索职位名称，查看本月高薪招聘信息"
                maxlength="64"
                autocomplete="off"
              />
              <button class="search-btn">搜索职位</button>
            </div>
            <div class="select-content">
              <div class="select-search-lab">
                <span class="search-lab active">技术</span>
                <span class="search-lab">产品</span>
                <span class="search-lab">设计</span>
                <span class="search-lab">运营</span>
                <span class="search-lab">销售</span>
                <span class="search-lab">市场</span>
              </div>
              <div class="select-search-content">
                <img class="middle-banner" src="./images/i_baidu.png" alt="" />
                <img
                  class="middle-banner"
                  src="./images/i_meituan.png"
                  alt=""
                />
                <img class="middle-banner" src="./images/i_wangyi.png" alt="" />
                <img
                  class="middle-banner"
                  src="./images/i_xindongfang.png"
                  alt=""
                />
                <img class="middle-banner" src="./images/i_beike.png" alt="" />
                <img
                  class="middle-banner"
                  src="./images/i_haoweilai.png"
                  alt=""
                />
                <img class="middle-banner" src="./images/i_bank.png" alt="" />
                <img class="middle-banner" src="./images/i_qu.png" alt="" />
                <img class="middle-banner" src="./images/i_dd.png" alt="" />
                <img
                  class="middle-banner"
                  src="./images/i_bilibili.png"
                  alt=""
                />
                <img
                  class="middle-banner"
                  src="./images/i_jingshan.png"
                  alt=""
                />
                <img class="middle-banner" src="./images/i_mayi.png" alt="" />
                <img class="middle-banner" src="./images/i_jd.png" alt="" />
              </div>
            </div>
          </div>
          <div class="middle-right">
            <p class="middle-title">
              <span class="middle-green">一键</span>注册 轻松获高薪
            </p>
            <form id="phone_form" method="post" action="javascript:;">
              <ul>
                <li>
                  <span class="area_code">0086</span>
                  <div class="area_code_list" style="display: none">
                    <dl class="code_list_main">
                      <dt>常用</dt>
                      <dd>中国<span>0086</span></dd>
                      <dd>中国香港<span>00852</span></dd>
                      <dd>中国台湾<span>00886</span></dd>
                      <dd>中国澳门<span>00853</span></dd>
                      <dd>美国<span>001</span></dd>
                      <dt>A</dt>
                      <dd>澳大利亚<span>0061</span></dd>
                      <dd>中国澳门<span>00853</span></dd>
                      <dd>爱尔兰<span>00353</span></dd>
                      <dt>B</dt>
                      <dd>巴西<span>0055</span></dd>
                      <dt>D</dt>
                      <dd>德国<span>0049</span></dd>
                      <dt>E</dt>
                      <dd>俄罗斯<span>007</span></dd>
                      <dt>F</dt>
                      <dd>法国<span>0033</span></dd>
                      <dt>H</dt>
                      <dd>韩国<span>0082</span></dd>
                      <dd>荷兰<span>0031</span></dd>
                      <dt>J</dt>
                      <dd>加拿大<span>001</span></dd>
                      <dt>M</dt>
                      <dd>马来西亚<span>0060</span></dd>
                      <dd>美国<span>001</span></dd>
                      <dt>R</dt>
                      <dd>日本<span>0081</span></dd>
                      <dt>T</dt>
                      <dd>中国台湾<span>00886</span></dd>
                      <dd>泰国<span>0066</span></dd>
                      <dt>X</dt>
                      <dd>中国香港<span>00852</span></dd>
                      <dd>新加坡<span>0065</span></dd>
                      <dd>新西兰<span>0064</span></dd>
                      <dt>Y</dt>
                      <dd>印度<span>0091</span></dd>
                      <dd>英国<span>0044</span></dd>
                      <dd>越南<span>0084</span></dd>
                      <dd>印度尼西亚<span>0062</span></dd>
                      <dt>Z</dt>
                      <dd>中国<span>0086</span></dd>
                    </dl>
                    <p class="tips">
                      如果没有找到您的所在归属地，请拨打客服电话4006282835解决。
                    </p>
                  </div>
                  <input
                    placeholder="请输入常用手机号"
                    id="lp_phone"
                    name="phone"
                    autocomplete="off"
                    class="error"
                  /><span for="lp_phone" generated="true" class="error"
                    >请输入手机号码</span
                  >
                </li>
                <li class="yzmli">
                  <input
                    placeholder="请证明你不是机器人"
                    id="lp_phone_yzm"
                    name="yzm"
                    autocomplete="on"
                    class="valid"
                  />
                  <img
                    src="https://passport.lagou.com/vcode/create?from=register&amp;refresh=1451121012510"
                    alt="点击重试"
                    class="yzm"
                    width="98"
                    height="35"
                  />
                  <a href="javascript:;" class="reflash"></a>
                </li>
                <li class="coderli">
                  <input
                    placeholder="请输入手机验证码"
                    id="lp_coder"
                    name="coder"
                    autocomplete="on"
                    class="error"
                  /><span for="lp_coder" generated="true" class="error"
                    >请输入手机验证码</span
                  >
                  <span class="getcode">获取验证码</span>
                </li>
                <li class="verify_tips">
                  <p class="verify_tips_main">
                    收不到短信？请使用<input
                      type="button"
                      class="voice_btn"
                      value="语音验证"
                    />
                  </p>
                  <p class="verify_tips_count_down">语音发送成功</p>
                </li>
              </ul>
              <a
                href="javascript:void(0);"
                class="submitBtn"
                data-lg-tj-id="1kxx"
                data-lg-tj-no="0003"
                data-lg-tj-cid="idnull"
                >立即注册</a
              >
              <div class="lp_agreeNotice_box">
                <p>
                  注册代表你已同意<a
                    rel="nofollow"
                    href="http://www.lagou.com/privacy.html"
                    target="_blank"
                    data-lg-tj-id="1kxx"
                    data-lg-tj-no="0005"
                    data-lg-tj-cid="idnull"
                    >「拉勾用户协议」</a
                  >
                </p>
              </div>
            </form>
            <div class="login_btn">
              <a href="javascript:;" @click="goLogin">已有帐号，直接登录</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="register-footer">
      <ul class="info clearfix">
        <li>
          <img src="./images/i_footer1.png" />
          <div>
            <p class="title">极速入职</p>
            <p class="content">最快24小时拿到企业offer</p>
          </div>
        </li>
        <li>
          <img src="./images/i_footer2.png" />
          <div>
            <p class="title">隐私保护</p>
            <p class="content">安全私密快速投简历</p>
          </div>
        </li>
        <li>
          <img src="./images/i_footer3.png" />
          <div>
            <p class="title">薪资透明</p>
            <p class="content">薪资透明真实谢绝面议</p>
          </div>
        </li>
        <li class="end">
          <img src="./images/i_footer4.png" />
          <div>
            <p class="title">海量信息</p>
            <p class="content">海量互联网职位实时更新</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="register-cp-footer">
      <img src="./images/i_footer.png" width="173" height="17" />
      <p class="cp-footer-info">
        <span>©拉勾网 京ICP备14023790号-2</span>
        <span class="cp-footer-line"></span>
        <span>京公网安备 11010802024043号</span>
        <span class="cp-footer-line"></span>
        <span>违法和不良信息举报电话：4006 2828 35 (9:00 -18:00)</span>
        <span class="cp-footer-line"></span>
        <span>举报邮箱：cc@lagou.com</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  methods: {
    goLogin() {
      this.$router.push('/login')
    },
  },
}
</script>
<style  rel="stylesheet" scoped>
* {
  padding: 0;
  margin: 0;
}

.register-box {
  min-width: 1024px;
}

.register-header {
  background: #fff;
}

.register-header .register-header-bg {
  width: 1000px;
  height: 60px;
  margin: 0 auto;
  overflow: hidden;
}

.register-header .register-header-bg .register-header-img {
  float: left;
  margin: 15px 0;
  width: 222px;
  height: 34px;
}

.register-header .register-header-bg .register-header-right {
  /* position: relative; */
  font-size: 14px;
  color: #999;
  float: right;
  height: 60px;
  line-height: 60px;
}

.icon_app {
  display: inline-block;
  width: 15px;
  height: 15px;
}

.register-middle {
  min-height: 694px;
  background: #00b38a;
  background-image: url(./images/register_bg.png);
  background-repeat: no-repeat;
  background-position: bottom;
  width: 100%;
  background-size: auto 112px;
}

.register-middle-container {
  width: 1000px;
  margin: 0 auto;
}
.register-middle-container .register-middle-img {
  display: block;
  /* margin: 28px 0 8px; */
  padding: 28px 0 8px;
  height: 34px;
}

.register-middle-container .register-middle-home {
  overflow: hidden;
}

.register-middle-home .home-left {
  float: left;
  width: 610px;
  height: 470px;
}

.home-left-seach {
  height: 46px;
  background-color: #fff;
  line-height: 46px;
  border-radius: 6px;
}
.home-left-seach .home-left-img {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 11px 0 22px;
  /* position: absolute; */
}

.search-input {
  font-size: 14px;
  color: #666;
  letter-spacing: 0;
  width: 430px;
  /* padding-left: 49px; */
  flex: 1;
  /* line-height: 35px; */
  border: none;
  outline: none;
}

.search-btn {
  font-size: 16px;
  color: #fff;
  letter-spacing: 0;
  background: #00b38a;
  border-radius: 2px;
  border: 0;
  padding: 7px 25px;
}

.select-content {
  margin-top: 10px;
  display: flex;
}
.select-search-lab {
  width: 112px;
  background: #00906f;
  border-radius: 4px;
  padding: 5px;
  box-sizing: border-box;
  margin-right: 10px;
  height: 414px;
}
.search-lab {
  display: block;
  font-size: 16px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  width: 102px;
  height: 67px;
  margin: auto;
  line-height: 67px;
}

.search-lab.active {
  background: hsla(0, 0%, 100%, 0.5);
  border-radius: 4px;
  color: #007d61;
}
.select-search-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  top: -10px;
  height: 424px;
}

.select-search-content .middle-banner {
  border-radius: 4px;
  opacity: 0.72;
}
.middle-banner:hover {
  opacity: 1;
}
/*  */
.middle-right {
  width: 360px;
  float: right;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px #12a591;
  padding: 57px 50px 35px;
  box-sizing: border-box;
}

.middle-title {
  font-size: 24px;
  text-align: center;
  font-weight: 600;
  position: relative;
  line-height: 26px;
  margin-bottom: 47px;
}

.middle-green {
  color: #00b38a;
}

.middle-green:after {
  content: '';
  width: 24px;
  height: 3px;
  opacity: 0.3;
  background: #333;
  display: block;
  position: absolute;
  left: 50%;
  bottom: -13px;
  transform: translateX(-50%);
}

#phone_form {
  display: block;
}

#phone_form ul {
  list-style: none;
  margin-bottom: 24px;
}

#phone_form ul li {
  position: relative;
  margin-bottom: 27px;
}

.area_code {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  float: left;
  width: 50px;
  height: 38px;
  padding-right: 22px;
  line-height: 40px;
  cursor: default;
}

.area_code:after {
  position: absolute;
  content: '';
  right: 8px;
  top: 14px;
  display: block;
  width: 10px;
  height: 10px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAANFJREFUOBHtkr0NwjAQheNkCqZhDyoax4IiDJCaAYIEyK6oKDwEq5n3FJyI4BiHNBQ56Wzf36fTnbNskb+bgDDGrNHVHXosy/LyS4dg7FFXQze5EKLAY+WcO2utq6lA1rCWDLJyKeUDjh0MB2czBfrKbVhLBlnCd4SgQuCKAH0HpdTJx0L3EIZ8zbwOSCMVOgb7AKZAY7AgMAb9BhsFhqD0QboF+Jm17v58m2Hvbl+DmWZ+m2MwVkWBTMCn3eLyG6/w+W+w54m1tqDOoyzVqRN4AgXLjC5IHionAAAAAElFTkSuQmCC)
    no-repeat;
  background-size: contain;
}

.area_code_list {
  position: absolute;
  left: 0;
  top: 42px;
  z-index: 10;
  display: none;
  width: 200px;
  max-height: 288px;
  border: 1px solid #eee;
  overflow-y: scroll;
  background-color: #fff;
}

.area_code_list dl {
  line-height: 36px;
  cursor: default;
}

.area_code_list dt {
  padding: 0 12px;
  color: #999;
  background-color: #fbfbfb;
}

.area_code_list dd {
  padding: 0 12px;
  color: #555;
}

.area_code_list .tips {
  color: #b5b5b5;
  padding: 40px 12px;
}

.middle-right form input.error {
  border-bottom: 1px solid #ff6a6a;
}

.middle-right form input:not([type='button']) {
  display: block;
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  outline: none;
}

.area_code_list + input {
  padding-left: 72px;
}

form span.error {
  display: block;
  font-size: 12px;
  line-height: 20px;
  color: #fd5f39;
  position: absolute;
  top: 43px;
}

.middle-right .yzmli {
  display: none;
}

.middle-right form input:not([type='button']) {
  display: block;
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  outline: none;
}

.yzmli input {
  padding-right: 110px;
}

.reflash,
.yzm {
  position: absolute;
  right: 0;
  top: 1px;
  width: 98px;
}

.yzm {
  z-index: 1;
  line-height: 38px;
  color: #777;
}

.reflash {
  z-index: 2;
  height: 38px;
}

.reflash,
.yzm {
  position: absolute;
  right: 0;
  top: 1px;
  width: 98px;
}

.lp-login .coderli {
  margin-bottom: 0;
}

.getcode {
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  height: 38px;
  font-size: 14px;
  line-height: 38px;
  color: #00b38a;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
}

.verify_tips {
  margin: 21px 0 0;
  color: #777;
  overflow: hidden;
}
.middle-right form li:last-of-type {
  margin-bottom: 0;
}

.verify_tips .voice_btn {
  outline: none;
  text-decoration: none;
  color: #00b389;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 14px;
}

.verify_tips_count_down,
.verify_tips_main {
  display: none;
}

.middle-right .submitBtn {
  display: block;
  height: 48px;
  line-height: 48px;
  margin-bottom: 16px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  background-image: linear-gradient(90deg, #09cb9d, #02b389);
  border-radius: 3px;
}

.lp_agreeNotice_box {
  font-size: 12px;
  line-height: 20px;
  color: #999;
  text-align: center;
}

.lp_agreeNotice_box p a {
  color: #00b38a;
}

.login_btn {
  text-align: center;
  margin-top: 44px;
}

.login_btn a {
  font-size: 14px;
  color: #00b38a;
  text-decoration: underline;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;
}

.register-footer {
  padding: 35px 20px;
  background: #fff;
}

.register-footer .info {
  width: 1024px;
  margin: 0 auto;
}

.clearfix {
  zoom: 1;
}

.register-footer .info {
  list-style: none;
}

.register-footer .info li {
  float: left;
  margin-right: 65px;
}

.register-footer .info div {
  float: right;
  margin-left: 15px;
}

.register-footer .info li img {
  float: left;
  width: 43px;
}

.register-footer .info .title {
  font-size: 18px;
  color: #333;
  height: 20px;
  line-height: 20px;
}

.register-footer .info .content {
  font-size: 12px;
  color: #666;
  height: 32px;
  line-height: 32px;
}

.register-footer .info .end {
  float: left;
  margin-right: 0;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;
}

/* register-cp-footer区域 */
.register-cp-footer {
  width: 1000px;
  margin: auto;
  padding-bottom: 30px;
  overflow: hidden;
  border-top: 1px solid #d5dadf;
}

.register-cp-footer img {
  display: block;
  margin: 24px auto 6px;
}

.register-cp-footer .cp-footer-info {
  width: 100%;
  text-align: center;
  color: #999;
  font-size: 12px;
}

.cp-footer-line {
  display: inline-block;
  width: 1px;
  height: 8px;
  margin: 0 5px;
  background: #ccc;
  overflow: hidden;
}
</style>
