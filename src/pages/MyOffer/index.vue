<template>
  <div>
    <div class="registerComplete">
      <div class="header__2nPfm">
        <a href="javascript:;">
          <img src="./images/ia_100000000.png" alt="" class="logo__2RHiR" />
        </a>
        <div class="right__1n3bv">
          <div class="qrcode__34frg">
            <img src="./images/ia_100000002.png" alt="" class="logo__3RHiR" />
            <span> 下载拉勾APP</span>
          </div>
          <div class="shu__g5LHN">|</div>
          <div class="info__2ZQPu">
            <div class="name__1Dd1y">用户6910</div>
            <img src="./images/ia_100000003.png" alt="" class="arrow__1-4H-" />
          </div>
        </div>
      </div>
      <div class="cardContainer__2m6D1">
        <!-- 头部 -->
        <div class="header__1dhzz">
          <div class="title__2-NtD">填写你的基本信息</div>
          <div class="tips__Pr1je">
            真实完善你的个人信息，有助于赢得招聘者的好感
          </div>
          <div class="greenLine__aDGiG"></div>
        </div>
        <!-- 表单 -->
        <form class="personInfo__aUPsd">
          <!-- 姓名 -->
          <div class="name__3KdNs">
            <div class="inputItemWrap__2ta1o" style="width: 310px">
              <label
                for="name"
                class="inputLabel__2pEIO"
                style="font-size: 12px"
                >姓名</label
              >
              <div class="inputAreaWrap__wwhUU formInputItemError__3BHN0">
                <div>
                  <div class="baseInputWrap__1DwEY baseErrorInputWrap__Gj2mv">
                    <input
                      error="1"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="请输入"
                      v-model="username"
                    />
                  </div>
                  <div class="errorTips__3l6aR" v-if="!username">请输入</div>
                </div>
                <div class="errorTips__3l6aR"></div>
              </div>
            </div>
            <el-upload
              class="avatar-uploader"
              :action="`http://192.168.16.52:7777/api/uploadAvatar/${myphone}`"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <!-- 性别0 -->
          <div class="sex__3bWHO wrap__nkWgh">
            <div class="label__3M__f">性别</div>
            <div class="radioBox__2ThsS">
              <div
                class="sel__2je1b"
                :class="changeSex ? 'sex-active' : ''"
                @click="getSex('男')"
              >
                <span>男</span>
                <i class="selIcon__2KhNI"></i>
              </div>
              <div
                class="sel__2je1b"
                :class="changeSex ? '' : 'sex-active'"
                @click="getSex('女')"
              >
                <span>女</span>
                <i class="selIcon__2KhNI"></i>
              </div>
            </div>
          </div>
          <!-- 出生日期 -->
          <div class="block">
            <div class="inputItemWrap__1ksRm">
              <el-form>
                <el-form-item label="年龄">
                  <el-input v-model="age"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <!-- 级联选择器 -->
          <div class="inputItemWrap__1ksRm">
            <div class="block">
              <label for="firstInput" class="inputLabel__2dAMi"
                >目前所在城市</label
              >
              <br />
              <el-cascader
                :options="options"
                @change="handleChange"
              ></el-cascader>
            </div>
          </div>
          <!-- 身份 -->
          <div class="sex__3bWHO wrap__nkWgh">
            <div class="label__3M__f">身份</div>
            <div class="radioBox__2ThsS">
              <div
                class="sel__2je1b"
                :class="changeIdentity ? 'sex-active' : ''"
                @click="getIdentity('职场人士')"
              >
                <span>职场人士 (已参加工作)</span>
                <i class="selIcon__2KhNI"></i>
              </div>

              <div
                class="sel__2je1b"
                :class="!changeIdentity ? 'sex-active' : ''"
                @click="getIdentity('学生')"
              >
                <span>学生 (在校生，应届生)</span>
                <i class="selIcon__2KhNI"></i>
              </div>
            </div>
          </div>
          <!-- 开始参加工作时间   style="display:none" 默认身份职场人士，开始参加工作显示-->
          <div class="block">
            <div class="inputItemWrap__1ksRm">
              <label for="firstInput" class="inputLabel__2dAMi"
                >开始参加工作</label
              ><br />
              <el-date-picker v-model="value1" type="date" placeholder="请选择">
              </el-date-picker>
            </div>
          </div>
          <!-- 邮箱 -->
          <div class="inputItemWrap__23vFA">
            <label for="email" class="inputLabel__1fI9q">邮箱</label>
            <div class="inputAreaWrap__htlsp">
              <div class="baseInputWrap__1DwEY">
                <input
                  error="0"
                  id="email"
                  autocomplete="off"
                  name="email"
                  type="text"
                  placeholder="请填写，用于接受面试通知等信息"
                  v-model="eMail"
                />
              </div>
            </div>
          </div>
          <!-- 完成 -->
          <div class="button__3AeRc">
            <div
              class="lgButton__1UxBx lgDisableButton__1iyOz"
              style="width: 380px"
              @click="goNext"
            >
              完成
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MyOffer',
  data() {
    return {
      value1: '',
      city: '',
      username: '',
      age: '',
      sex: '',
      identity: '',
      eMail: '',
      changeSex: true,
      changeIdentity: true,
      // 下拉框配置
      options: [
        {
          value: '北京',
          label: '北京',
        },
        {
          value: '上海',
          label: '上海',
        },
        {
          value: '广州',
          label: '广州',
        },
        {
          value: '深圳',
          label: '深圳',
        },
        {
          value: '成都',
          label: '成都',
        },
        {
          value: '重庆',
          label: '重庆',
        },
        {
          value: '杭州',
          label: '杭州',
        },
        {
          value: '武汉',
          label: '武汉',
        },
        {
          value: '西安',
          label: '西安',
        },
        {
          value: '天津',
          label: '天津',
        },
        {
          value: '苏州',
          label: '苏州',
        },
      ],
      imageUrl: '',
    }
  },
  computed: {
    ...mapState({
      myphone: (state) => state.users.myPhone,
    }),
  },
  methods: {
    getSex(str) {
      this.sex = str
      if (str === '男') {
        this.changeSex = true
      } else {
        this.changeSex = false
      }
    },
    getIdentity(str) {
      this.identity = str
      if (str === '职场人士') {
        this.changeIdentity = true
      } else {
        this.changeIdentity = false
      }
    },
    goNext() {
      const { city, username, age, sex, identity, eMail } = this
      this.$router.push({
        path: '/education',
        query: { city, username, age, sex, identity, eMail },
      })
    },

    handleChange(value) {
      // console.log(value[0])
      this.city = value[0]
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    changeBirthday(value) {
      console.log(value)
    },
  },
}
</script>
<style lang='less' rel='stylesheet/less' scoped>
html,
body {
  height: 100%;
  width: 100%;
}
.sex-active {
  color: #00b38a !important;
  background: #00b38a;
  border-color: #00b38a !important;
}
.registerComplete {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #09b991;
}
.header__2nPfm {
  margin-top: 10px;
  margin-left: 214px;
  margin-right: 214px;
}
.header__2nPfm .logo__2RHiR {
  width: 41px;
  height: 20px;
  float: left;
}
.logo__3RHiR {
  width: 14px;
  height: 13px;
  margin-top: 3px;
}
.right__1n3bv {
  float: right;
}
.qrcode__34frg {
  cursor: pointer;
  position: relative;
}
.qrcode__34frg span {
  font-size: 14px;
  color: white;
}
.header__2nPfm .right__1n3bv > div {
  float: left;
  color: #ffffff;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
}
.shu__g5LHN {
  margin: 0 14px;
}
.header__2nPfm .right__1n3bv .info__2ZQPu {
  position: relative;
  cursor: pointer;
}
.logo__2RHiR {
  width: 14px;
  height: 13px;
  margin-top: 3px;
}
.name__1Dd1y {
  float: left;
}
.info__2ZQPu > img {
  float: left;
}
.arrow__1-4H- {
  width: 5px;
  height: 10px;
  margin-top: 5px;
  margin-left: 5px;
}
.cardContainer__2m6D1 {
  width: 480px;
  min-height: 746px;
  margin: 41px auto 0;
  border-radius: 12px;
  background: #fff;
  padding-bottom: 40px;
  margin-bottom: 20px;
}
.cardContainer__2m6D1 .header__1dhzz {
  border-bottom: 1px solid #ebecee;
  padding: 20px 0 20px 50px;
  position: relative;
}
.cardContainer__2m6D1 .header__1dhzz .title__2-NtD {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 22px;
}
.cardContainer__2m6D1 .header__1dhzz .tips__Pr1je {
  margin-top: 4px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 17px;
}
.cardContainer__2m6D1 .header__1dhzz .greenLine__aDGiG {
  width: 14px;
  height: 1px;
  background: #00b38a;
  position: absolute;
  bottom: -1px;
}
.personInfo__aUPsd {
  padding: 0 50px;
}
.personInfo__aUPsd .name__3KdNs {
  position: relative;
}
.inputItemWrap__2ta1o {
  padding-top: 28px;
  width: 380px;
  position: relative;
}
.inputItemWrap__2ta1o .inputAreaWrap__wwhUU {
  margin-top: 6px;
  position: relative;
}

.inputItemWrap__2ta1o .errorTips__3l6aR {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ff7452;
  margin-top: 2px;
  display: block;
}
.baseInputWrap__1DwEY {
  position: relative;
}
body .baseErrorInputWrap__Gj2mv::before {
  border-bottom: 1.17px solid #ff7452;
}
.inputItemWrap__2ta1o .formInputItemError__3BHN0 input {
  border-bottom: 1px solid #ff7452;
}
body .baseErrorInputWrap__Gj2mv::after {
  transform: scaleX(1);
  border-bottom: 1.17px solid #ff7452;
}
.inputItemWrap__2ta1o .errorTips__3l6aR {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ff7452;
  margin-top: 2px;
  display: block;
}

.head__2Mybl {
  top: 35px;
  right: 0;
  position: absolute;
}
.head__2Mybl .headHover__nGkZt {
  display: none;
  cursor: pointer;
  top: 0;
  right: 0;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}
.head__2Mybl .headHover__nGkZt img {
  width: 20px;
  height: 17px;
}
.head__2Mybl img {
  width: 60px;
  height: 60px;
  border-radius: 60px;
}
.baseInputWrap__1DwEY input {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 6px 0 7px;
  display: block;
  min-width: 0;
  box-sizing: content-box;
  background: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}
.personInfo__aUPsd .wrap__nkWgh {
  margin-top: 28px;
}
.personInfo__aUPsd .wrap__nkWgh .label__3M__f {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 17px;
  margin-left: 1px;
}

.personInfo__aUPsd .sex__3bWHO .radioBox__2ThsS {
  margin-top: 6px;
}
.personInfo__aUPsd .sex__3bWHO .radioBox__2ThsS .action__25ZH5 {
  border: 1px solid #00b38a;
}
.personInfo__aUPsd .sex__3bWHO .radioBox__2ThsS .sel__2je1b {
  float: left;
  cursor: pointer;
  position: relative;
  width: 184px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #e8e9eb;
}
.personInfo__aUPsd .sex__3bWHO .radioBox__2ThsS .sel__2je1b span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #cccccc;
  line-height: 40px;
  text-indent: 20px;
  display: inline-block;
}
.personInfo__aUPsd .sex__3bWHO .radioBox__2ThsS .action__25ZH5 .selIcon__2KhNI {
  background: url('./images/ia_100000010.png');
  background-size: 100% 100%;
}
.personInfo__aUPsd .sex__3bWHO .radioBox__2ThsS .sel__2je1b {
  float: left;
  cursor: pointer;
  position: relative;
  width: 184px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #e8e9eb;
}
.personInfo__aUPsd .sex__3bWHO .radioBox__2ThsS :nth-child(2n) {
  margin-left: 10px;
}
.personInfo__aUPsd .sex__3bWHO .radioBox__2ThsS .sel__2je1b span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #cccccc;
  line-height: 40px;
  text-indent: 20px;
  display: inline-block;
}
.personInfo__aUPsd .sex__3bWHO .radioBox__2ThsS .sel__2je1b i {
  display: inline-block;
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: url('./images/ia_100000010.png');
  background-size: 100% 100%;
}
.personInfo__aUPsd .sex__3bWHO .radioBox__2ThsS:after {
  clear: both;
  content: '.';
  display: block;
  font-size: 0;
  height: 0;
  visibility: hidden;
  _zoom: 1;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
.inputItemWrap__1ksRm {
  padding-top: 28px;
  width: 380px;
  position: relative;
}
.inputLabel__2dAMi {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
}
.inputItemWrap__1ksRm {
  padding-top: 28px;
  width: 380px;
  position: relative;
}
.inputLabel__2dAMi {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
}
.personInfo__aUPsd .wrap__nkWgh {
  margin-top: 28px;
}
.label__3M__f {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 17px;
  margin-left: 1px;
}
.radioBox__2ThsS {
  margin-top: 6px;
  overflow: hidden;
}
.radioBox__2ThsS .sel__2je1b {
  float: left;
  cursor: pointer;
  position: relative;
  width: 184px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #e8e9eb;
}
.radioBox__2ThsS .sel__2je1b span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #cccccc;
  line-height: 40px;
  text-indent: 20px;
  display: inline-block;
}
.radioBox__2ThsS .sel__2je1b i {
  display: inline-block;
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: url('./images/ia_100000010.png');
  background-size: 100% 100%;
}
.radioBox__2ThsS :nth-child(2n) {
  margin-left: 10px;
}
.radioBox__2ThsS:after {
  clear: both;
  content: '.';
  display: block;
  font-size: 0;
  height: 0;
  visibility: hidden;
  _zoom: 1;
}
.inputItemWrap__23vFA {
  padding-top: 28px;
  width: 380px;
  position: relative;
}
.inputLabel__1fI9q {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
}
.inputAreaWrap__htlsp {
  margin-top: 6px;
  position: relative;
}
.baseInputWrap__1DwEY input {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 6px 0 7px;
  display: block;
  min-width: 0;
  box-sizing: content-box;
  background: none;
  -webkit-tap-highlight-color: transparent;
  font-size: 11px;
}
.baseInputWrap__1DwEY {
  position: relative;
}
.baseInputWrap__1DwEY::before {
  left: 0;
  right: 0;
  bottom: 0;
  content: '\A0';
  position: absolute;
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid #f0f0f0;
  pointer-events: none;
}
.baseInputWrap__1DwEY::after {
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  position: absolute;
  transform: scaleX(0);
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  border-bottom: 1.17px solid #00b38a;
  pointer-events: none;
}
.personInfo__aUPsd .button__3AeRc {
  margin-top: 30px;
}
.lgDisableButton__1iyOz {
  background: rgba(0, 179, 138, 0.5);
  color: #ffffff;
}
.lgButton__1UxBx {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 2px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  cursor: pointer;
  margin-right: 10px;
}
// 用户头像上传
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader {
  top: 35px;
  right: 0;
  position: absolute;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
}
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.el-icon-plus:before {
  content: '\e6d9';
}
// 用户头像上传
</style>