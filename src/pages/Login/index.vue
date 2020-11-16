<template>
  <div>
    <input type="hidden" value="" id="isVisiable_request_form_verifyCode" />
    <!-- 页面主体START -->
    <header class="sso_header">
      <a href="http://www.lagou.com" class="logo "> </a>
    </header>
    <section class="content_box cleafix">
      <!--右上角二维码展示-->
      <div
        class="qr_code_content"
        data-lg-tj-id="1jkz"
        data-lg-tj-no="idnull"
        data-lg-tj-cid="idnull"
      >
        <div class="qr_code_img"></div>
        <div class="mobile-info"></div>
      </div>
      <div class="left_area fl">
        <div class="form-content" style="display: block;">
          <div class="form_head">
            <ul class="form_head clearfix">
              <li
                class="active"
                data-lg-tj-id="1Us0"
                data-lg-tj-no="idnull"
                data-lg-tj-cid="idnull"
              >
                密码登录
              </li>
              <li
                data-lg-tj-id="1Ut0"
                data-lg-tj-no="idnull"
                data-lg-tj-cid="idnull"
              >
                验证码登录
              </li>
            </ul>
            <span class="tab_active"></span>
          </div>
          <div class="form_body" data-view="passwordLogin">
            <form class="active" action="javascript:;">
              <div
                class="input_item clearfix"
                data-propertyname="username"
                data-controltype="Phone"
                style="display: block;"
              >
                <input
                  type="text"
                  class="input input_white HtoC_JS"
                  name=""
                  placeholder="请输入常用手机号/邮箱"
                  data-required="required"
                  autocomplete="off"
                />
              </div>
              <div
                class="input_item clearfix"
                data-propertyname="password"
                data-controltype="Password"
                style="display: block;"
              >
                <input
                  type="password"
                  class="input input_white HtoC_JS"
                  name=""
                  placeholder="请输入密码"
                  data-required="required"
                  autocomplete="off"
                />
              </div>

              <div class="input_item clearfix">
                <p class="forgot_pwd">忘记密码？</p>
              </div>
              <div
                class="input_item btn_group clearfix sense_login_password"
                data-propertyname="submit"
                data-controltype="Botton"
                style="display: block;"
              >
                <input
                  type="submit"
                  class="btn btn_green btn_active btn_block btn_lg"
                  value="登 录"
                  data-lg-tj-id="1j90"
                  data-lg-tj-no="idnull"
                  data-lg-tj-cid="idnull"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="divider fl"></div>
      <div class="right_area fl" style="display: block;">
        <h5>还没有账号:</h5>
        <a
          class="register_now"
          data-lg-tj-id="1ja0"
          data-lg-tj-no="idnull"
          data-lg-tj-cid="idnull"
          >立即注册</a
        >
        <h5>使用以下账号直接登录:</h5>
        <ul class="vender_login clearfix">
          <li class="vender_icon icon_sina"></li>
          <li class="vender_icon icon_wechat"></li>
          <li class="vender_icon icon_tencent"></li>
          <li class="vender_icon icon_baidu"></li>
        </ul>
      </div>
    </section>

    <div style="display:none">
      <div class="popup" id="ajaxError" style="overflow:hidden;width:500px;">
        <h4 class="error_msg">网络出错啦</h4>
      </div>
    </div>
    <!-- 页面主体END -->
    <input
      type="hidden"
      id="verifyStyle"
      style="display: none"
      value="nolagou"
    />
    <div id="cboxOverlay" style="display: none;"></div>
    <div
      id="colorbox"
      class=""
      role="dialog"
      tabindex="-1"
      style="display: none;"
    >
      <div id="cboxWrapper">
        <div>
          <div id="cboxTopLeft" style="float: left;"></div>
          <div id="cboxTopCenter" style="float: left;"></div>
          <div id="cboxTopRight" style="float: left;"></div>
        </div>
        <div style="clear: left;">
          <div id="cboxMiddleLeft" style="float: left;"></div>
          <div id="cboxContent" style="float: left;">
            <div id="cboxTitle" style="float: left;"></div>
            <div id="cboxCurrent" style="float: left;"></div>
            <button type="button" id="cboxPrevious"></button
            ><button type="button" id="cboxNext"></button
            ><button id="cboxSlideshow"></button>
            <div id="cboxLoadingOverlay" style="float: left;"></div>
            <div id="cboxLoadingGraphic" style="float: left;"></div>
          </div>
          <div id="cboxMiddleRight" style="float: left;"></div>
        </div>
        <div style="clear: left;">
          <div id="cboxBottomLeft" style="float: left;"></div>
          <div id="cboxBottomCenter" style="float: left;"></div>
          <div id="cboxBottomRight" style="float: left;"></div>
        </div>
      </div>
      <div
        style="position: absolute; width: 9999px; visibility: hidden; display: none; max-width: none;"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
<style rel="stylesheet" scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
input {
  font-family: Arial, "Hiragino Sans GB", "Microsoft Yahei", SimSun;
}

.sso_header {
  position: relative;
  width: 100%;
  height: 360px;
  background-color: #00b38a;
}

.sso_header .logo {
  position: absolute;
  z-index: 9999;
  top: 76px;
  left: 50%;
  margin-left: -350px;
  width: 112px;
  height: 42px;
  background: url(./images/logo.png) no-repeat;
  background-size: contain;
}

.content_box {
  width: 552px;
  margin: -205px auto 60px;
  padding: 62px 70px 68px 78px;
  background-color: #fff;
  display: table;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  border: 1px solid #dce1e6;

  position: relative;
  z-index: 1;
}

.content_box .qr_code_content {
  position: absolute;
  top: 6px;
  left: 6px;
  cursor: pointer;
}

.content_box .qr_code_content .qr_code_img {
  width: 52px;
  height: 52px;
  background: url(./images/qrcode-normal.svg) left center no-repeat;
  float: left;
}

.content_box .qr_code_content .mobile-info {
  width: 106px;
  height: 34px;
  position: absolute;
  left: 48px;
  background: url(./images/wx-login.svg) left center no-repeat;
  animation: infoMove 0.7s;
}

.content_box .left_area {
  width: 290px;
}
.fl {
  float: left;
}

.form_head {
  position: relative;
  z-index: 1;
  height: 33px;
  margin-bottom: 29px;
  border-bottom: 1px solid #ebebeb;
}
.form_head {
  position: relative;
  z-index: 1;
  height: 33px;
  margin-bottom: 29px;
  border-bottom: 1px solid #ebebeb;
}

.form_head li.active {
  color: #00b38a;
}
.form_head li {
  font-size: 16px;
  line-height: 24px;
  position: relative;
  float: left;
  width: 50%;
  height: 33px;
  cursor: pointer;
  text-align: center;
  color: #333;
}

.content_box .tab_active {
  position: absolute;
  left: 0;
  bottom: -1px;
  z-index: 1;
  background-color: #00b38a;
  width: 150px;
  height: 1px;
}

.content_box .tab_active:before,
.content_box .tab_active:after {
  position: absolute;
  z-index: 2;
  top: -12px;
  left: 50%;
  margin-left: -3px;
  content: "";
  width: 0;
  height: 0;
  line-height: 0;
  border: 6px solid transparent;
  border-bottom-color: #007b5f;
}

.content_box .tab_active:after {
  z-index: 3;
  top: -11px;
  width: 0;
  height: 0;
  line-height: 0;
  border: 6px solid transparent;
  border-bottom-color: #fff;
}

.content_box .input_item {
  position: relative;
}

.input_item:first-child {
  z-index: 2;
}
.clearfix {
  zoom: 1;
}
.input_item {
  position: relative;
  z-index: 1;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.content_box .input {
  box-sizing: border-box;
  width: 290px;
  border-radius: 0;
}
.content_box .input_white,
.content_box .dropbtn_white {
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-color: #ededed;
  background: 0 0;
}

.input_white,
.dropbtn_white {
  border-color: #f8f8f8;
  background-color: #f8f8f8;
}
.input,
.dropbtn {
  font-size: 14px;
  position: relative;
  z-index: 1;
  height: 44px;
  line-height: 44px\9;
  vertical-align: middle;
  color: #333;
  border-width: 1px;
  border-style: solid;
  outline: 0;
}

.content_box .input_item + .input_item {
  margin-top: 20px;
}

.content_box .forgot_pwd {
  position: relative;
  float: right;
  font-size: 14px;
  display: block;
  text-align: right;
  text-decoration: none;
  color: #00b38a;
  margin-top: -5px;
  z-index: 3;
}

.btn_green:hover,
.btn_green.btn_active {
  color: #fff;
  border-color: #00b38a;
  background-color: #00b38a;
}

.btn_block {
  display: block;
  width: 100%;
}
.btn_lg {
  font-size: 18px;
  line-height: 46px;
  height: 46px;
}
.btn {
  font-size: 16px;
  line-height: 44px;
  display: inline-block;
  height: 44px;
  padding: 0 30px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  outline: 0;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  -webkit-transition: 0.05s linear;
  -o-transition: 0.05s linear;
  transition: 0.05s linear;
  margin-top: 20px;
}

.content_box .divider {
  position: relative;
  border-left: 1px dashed #ededed;
  height: 274px;
  color: #d8d8d8;
  margin: 0 52px;
}
.fl {
  float: left;
}

.content_box .divider:after {
  position: absolute;
  content: "or";
  left: 50%;
  top: 50%;
  padding: 2px;
  background-color: #fff;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.content_box .right_area {
  width: 150px;
  padding-top: 26px;
  color: #777;
  display: none;
}

.content_box .right_area h5 {
  margin: 44px 0 8px;
  color: #555;
}
h5 {
  font-size: 14px;
}

.content_box .right_area .register_now {
  display: inline-block;
  height: 22px;
  font-size: 16px;
  color: #00b38a;
  padding-right: 23px;
  background: url(./images/icon-arrow-right.png) right center no-repeat;
}
a {
  background-color: transparent;
  outline: 0;
  text-decoration: none;
}

.vender_login {
  margin-top: 12px;
  text-align: center;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.vender_login {
  display: flex;
  justify-content: space-around;
}
.vender_login .vender_icon {
  display: inline-block;
  width: 20px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
}

.vender_login .icon_sina {
  background-image: url(./images/icon-sina1.png);
}
.vender_login .icon_wechat {
  background-image: url(./images/icon-wechat1.png);
}
.vender_login .icon_tencent {
  background-image: url(./images/icon-tencent1.png);
}
.vender_login .icon_baidu {
  background-image: url(./images/icon-baidu1.png);
}
</style>
