<template>
  <div>
    <input type="hidden" value="" id="isVisiable_request_form_verifyCode" />
    <!-- 页面主体START -->
    <header class="sso_header">
      <a href="http://www.lagou.com" class="logo"> </a>
    </header>
    <section class="content_box cleafix">
      <!--右上角二维码展示-->
      <div class="qr_code_content">
        <div class="qr_code_img"></div>
        <div class="mobile-info"></div>
      </div>
      <!-- 主体左边部分 -->
      <div class="left_area fl">
        <div class="form-content" style="display: block">
          <!-- 头部 -->
          <div class="form_head">
            <ul class="form_head clearfix">
              <li class="active" @click="isPhoneLogin = !isPhoneLogin">
                密码登录
              </li>
              <li @click="isPhoneLogin = !isPhoneLogin">验证码登录</li>
            </ul>
            <span :class="isPhoneLogin ? 'tab_active' : 'tab_active1'"></span>
          </div>
          <!-- 输入框 密码登录部分 -->
          <div class="form_body" :class="isPhoneLogin ? 'isShow' : ''">
            <form class="active" action="javascript:;">
              <div class="input_item clearfix">
                <input
                  type="text"
                  class="input input_white HtoC_JS"
                  name=""
                  placeholder="请输入常用手机号/邮箱"
                  autocomplete="off"
                  v-model="phone"
                  @blur="vefChange(phone)"
                />
                <span class="input_tips" :class="isVefPhone ? 'vefShow' : ''"
                  >请输入已验证手机/邮箱</span
                >
              </div>
              <div class="input_item clearfix">
                <input
                  type="password"
                  class="input input_white HtoC_JS"
                  name=""
                  placeholder="请输入密码"
                  autocomplete="off"
                  v-model="password"
                  @blur="vefChange(password)"
                />
                <span
                  class="input_tips"
                  ref="tipsPassword"
                  :class="isVefPassword ? 'vefShow' : ''"
                  >密码错误</span
                >
              </div>

              <div class="input_item clearfix">
                <p class="forgot_pwd">忘记密码？</p>
              </div>
              <div class="input_item btn_group clearfix sense_login_password">
                <input
                  type="submit"
                  class="btn btn_green btn_active btn_block btn_lg"
                  value="登 录"
                  @click="goLogin"
                />
              </div>
            </form>
          </div>
          <!-- 输入框 验证码登录部分 -->
          <div
            class="form_body"
            ref="codeLogin"
            :class="isPhoneLogin ? '' : 'isShow'"
          >
            <form action="javascript:;">
              <div class="input_item clearfix">
                <span class="area_code" @click="viewAreaNum">0086</span>
                <div
                  class="area_code_list"
                  style="display: none"
                  ref="AreaNum"
                  @click="disviewAreaNum"
                >
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
                  type="text"
                  class="input input_white HtoC_JS"
                  name=""
                  placeholder="请输入常用手机号"
                  autocomplete="off"
                  v-model="phone"
                  @blur="vefChange(phone)"
                />
                <span class="input_tips" :class="isVefPhone ? 'vefShow' : ''"
                  >请输入正确的手机号</span
                >
              </div>
              <div class="input_item clearfix" :class="isPhoneLogin"></div>
              <div class="input_item">
                <div class="input_group clearfix">
                  <input
                    type="text"
                    class="input input_white"
                    name=""
                    placeholder="请输入验证码"
                    autocomplete="off"
                    v-model="verifyCode"
                    @blur="vefChange(verifyCode)"
                  />
                  <input
                    type="button"
                    class="btn btn_active last_child sense_msg_code"
                    value="获取验证码"
                    @click="goVerifyCodeLogin"
                  />
                </div>
                <span class="input_tips" :class="isVefCode ? 'vefShow' : ''"
                  >验证码错误</span
                >
              </div>
              <div class="input_item btn_group clearfix sense_login_code">
                <input
                  type="submit"
                  class="btn btn_green btn_active btn_block btn_lg"
                  value="登 录"
                  @click="goVerifyCodeLogin"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="divider fl"></div>
      <div class="right_area fl" style="display: block">
        <h5>还没有账号:</h5>
        <a class="register_now" @click="goRegister">立即注册</a>
        <h5>使用以下账号直接登录:</h5>
        <ul class="vender_login clearfix">
          <li class="vender_icon icon_sina"></li>
          <li class="vender_icon icon_wechat"></li>
          <li class="vender_icon icon_tencent"></li>
          <li class="vender_icon icon_baidu"></li>
        </ul>
      </div>
    </section>

    <!-- 页面主体END -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
// 引入登录接口
import { reqLogin, reqgetCode, reqVerifyCodeLogin } from '../../api'
export default {
  name: 'Login',

  data() {
    return {
      // phone: 13120202020,
      phone: null,
      password: null,
      verifyCode: null,
      isPhoneLogin: true, // 密码登录页面/验证码登录页面切换
      isVefPhone: false, //  手机号码正则
      isVefPassword: false, // 密码正则
      isVefCode: false, //  验证码正则
    }
  },
  computed: {
    ...mapState({
      myPhone: (state) => state.users.userInfo,
    }),
  },

  methods: {
    // 点击0086选择区号
    viewAreaNum() {
      this.$refs.AreaNum.style.display = 'block'
    },
    disviewAreaNum() {
      this.$refs.AreaNum.style.display = 'none'
    },

    // 验证手机号和密码
    vefChange(e) {
      // 手机号的正则
      const vefPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
      // 密码的正则--> 只能输入6到16位的数字+字母(两者都要有)
      const vefPassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
      // 验证码的正则
      const vefCode = /^\d{6}$/
      // 获取手机号和密码
      const { phone, password, verifyCode } = this
      switch (e) {
        case phone:
          // console.log(phone)
          if (!vefPhone.test(phone)) {
            // 获取提示验证错误的样式
            // this.$refs.tipsPhone.style.display = "block";
            this.isVefPhone = true
            // console.log(121);
          } else {
            // this.$refs.tipsPhone.style.display = "none";
            this.isVefPhone = false
          }
          break
        case password:
          if (!vefPassword.test(password)) {
            this.isVefPassword = true
          } else {
            this.isVefPassword = false
          }
          break
        case verifyCode:
          if (!vefCode.test(verifyCode)) {
            this.isVefCode = true
          } else {
            this.isVefCode = false
          }
          break
      }
    },
    // 跳转回到注册页面
    goRegister() {
      this.$router.push('/register')
    },
    // 点击密码登录，发送请求，登录成功跳转回详情页组件
    async goLogin() {
      // 调用密码登录接口
      // 获取手机号和密码
      const { phone, password } = this
      await this.$store.dispatch('getUserInfo', { phone, password })
      console.log(this.$store.state.users.myPhone)
      if (this.$store.state.users.myPhone) {
        this.$message({
          message: '登录成功，即将跳转首页',
          type: 'success',
        })
        setTimeout(() => {
          // 登录成功，则跳转到详情页面
          this.$router.push('/')
        }, 3000)
      } else {
        this.$message.error('手机号或密码错误，请重新输入')
      }
      // 发送请求
      // const result = await reqLogin(phone, password)
      // console.log(result)
      // if (result.code === 20000) {
      //   this.$message({
      //     message: '登录成功，即将跳转首页',
      //     type: 'success',
      //   })
      //   setTimeout(() => {
      //     // 登录成功，则跳转到详情页面
      //     this.$router.push('/')
      //   }, 3000)
      // 登录成功会返回一个成功的手机号
      //   this.myPhone = result.data.phone
      //   // console.log(result.data.phone)
      // } else {
      //   alert('输入手机号或密码错误')
      // }
    },
    // 点击验证码登录
    async goVerifyCodeLogin() {
      // 调用密码登录接口
      // 获取手机号和密码
      const { phone, verifyCode } = this
      // 发送请求
      const result = await reqVerifyCodeLogin(phone, verifyCode)
      console.log(result)
      if (result.code === 20000) {
        // 登录成功，则跳转到详情页面
        this.$router.push('/')
      } else {
        alert('输入手机号或验证码错误')
      }
    },
  },
}
</script>
<style rel="stylesheet" scoped>
* {
  margin: 0;
  padding: 0;
}
.vefShow {
  display: block !important;
}
.input_tips {
  position: relative;
  z-index: 2;
  display: none;
  margin-top: 5px;
  line-height: 18px;
  font-size: 12px;
  color: #fd5f39;
  background-size: 14px;
}
.isShow {
  display: block !important;
}
.form_body {
  display: none;
}
ul,
li {
  list-style: none;
}
.content_box .input_item {
  position: relative;
}
.input_item:first-child {
  z-index: 2;
}
.content_box .input {
  box-sizing: border-box;
  width: 290px;
  border-radius: 0;
}
.input_group {
  overflow: hidden;
}
.content_box .input_white,
.content_box .dropbtn_white {
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-color: #ededed;
  background: 0 0;
}
.area_code_list + input {
  padding-left: 72px;
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
.area_code[data-v-2ddd9490] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  float: left;
  width: 50px;
  height: 44px;
  padding-right: 22px;
  line-height: 44px;
  cursor: default;
}

*[data-v-2ddd9490] {
  margin: 0;
  padding: 0;
}
.area_code {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  float: left;
  width: 50px;
  height: 44px;
  padding-right: 22px;
  line-height: 44px;
  cursor: default;
}

.area_code {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  float: left;
  width: 50px;
  height: 44px;
  padding-right: 22px;
  line-height: 44px;
  cursor: default;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Hiragino Sans GB', 'Microsoft Yahei', SimSun, Arial,
    'Helvetica Neue', Helvetica;
  color: #333;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
}
html {
  font-size: 14px;
}
form {
  display: block;
  margin-top: 0em;
}
.area_code {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  float: left;
  width: 50px;
  height: 44px;
  padding-right: 22px;
  line-height: 44px;
  cursor: default;
}
.area_code:after {
  position: absolute;
  right: 8px;
  top: 19px;
  display: block;
  content: '';
  width: 10px;
  height: 5px;
  background: url(//www.lgstatic.com/lg-passport-fed/static/pc/modules/common/img/code86_a209722.png)
    no-repeat;
}
.area_code:after {
  position: absolute;
  right: 8px;
  top: 19px;
  display: block;
  content: '';
  width: 10px;
  height: 5px;
  background: url(//www.lgstatic.com/lg-passport-fed/static/pc/modules/common/img/code86_a209722.png)
    no-repeat;
}

::selection {
  color: #fff;
  background-color: #00b38a;
}
.area_code_list {
  position: absolute;
  left: 0;
  top: 46px;
  z-index: 10;
  display: none;
  width: 200px;
  max-height: 240px;
  border: 1px solid #eee;
  overflow-y: scroll;
  background-color: #fff;
}
.area_code_list dl {
  line-height: 36px;
  cursor: default;
}
dl,
dt,
dd {
  margin: 0;
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
.area_code_list dd span {
  float: right;
}
.area_code_list .tips {
  color: #b5b5b5;
  padding: 20px 12px;
}
.content_box .input {
  box-sizing: border-box;
  width: 290px;
  border-radius: 0;
}
.content_box .input_item + .input_item {
  margin-top: 20px;
}

.content_box .yzm {
  position: absolute;
  right: 0;
  top: 1px;
  z-index: 1;
  width: 98px;
  line-height: 38px;
  color: #777;
}
.input_group img {
  border: 0;
  vertical-align: top;
  display: inline-block;
}
a {
  background-color: transparent;
  outline: 0;
  text-decoration: none;
}
.content_box .input_group > input.first_child {
  padding-right: 80px;
}
.input_group > input:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
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
.input_group input {
  float: left;
}

.content_box .input_group > input.last_child {
  position: absolute;
  right: 0;
  top: -20px;
  z-index: 2;
  height: 43px;
  font-size: 14px;
  padding: 0;
  border: 0;
}
.input_group > input:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn:hover,
.btn.btn_active {
  text-decoration: none;
  color: #00b38a;
  background-color: #fff;
}
label,
select,
button,
input[type='button'],
input[type='reset'],
input[type='submit'],
input[type='radio'],
input[type='checkbox'] {
  cursor: pointer;
}

input {
  font-family: Arial, 'Hiragino Sans GB', 'Microsoft Yahei', SimSun;
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
/*  */
.content_box .tab_active {
  position: absolute;
  left: 0;
  bottom: -1px;
  z-index: 1;
  background-color: #00b38a;
  width: 150px;
  height: 0px;
  border: 1px solid #00b38a;
  /*  */
  display: block;
}

.content_box .tab_active:before,
.content_box .tab_active:after {
  position: absolute;
  z-index: 2;
  top: -12px;
  left: 50%;
  margin-left: -3px;
  content: '';
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

/*  */
.content_box .tab_active1 {
  position: absolute;
  left: 150px;
  bottom: -1px;
  z-index: 1;
  background-color: #00b38a;
  width: 150px;
  height: 0px;
  border: 1px solid #00b38a;
  /*  */
  /* display: none; */
}

.content_box .tab_active1:before,
.content_box .tab_active1:after {
  position: absolute;
  z-index: 2;
  top: -12px;
  left: 50%;
  margin-left: -3px;
  content: '';
  width: 0;
  height: 0;
  line-height: 0;
  border: 6px solid transparent;
  border-bottom-color: #007b5f;
}

.content_box .tab_active1:after {
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
  content: '';
  display: table;
}

.content_box .input {
  box-sizing: border-box;
  width: 290px;
  opacity: 0.5;
}
.content_box .input_white,
.content_box .dropbtn_white {
  border-color: #ededed;
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
.btn:hover {
  cursor: pointer;
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
  content: 'or';
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
.register_now:hover {
  text-decoration: underline;
  cursor: pointer;
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
  content: '';
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
