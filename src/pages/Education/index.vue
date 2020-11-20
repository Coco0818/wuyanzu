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
      <div class="cardContainer__2m6D1" v-if="success">
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
          <!-- 学校名称 -->
          <div class="name__3KdNs">
            <div class="inputItemWrap__2ta1o" style="width: 310px">
              <label for="name" class="inputLabel__2pEIO">学校名称</label>
              <div class="inputAreaWrap__wwhUU formInputItemError__3BHN0">
                <div>
                  <div class="baseInputWrap__1DwEY baseErrorInputWrap__Gj2mv">
                    <input
                      error="1"
                      id="name"
                      autocomplete="off"
                      name="name"
                      type="text"
                      placeholder="请输入"
                      v-model="university"
                    />
                  </div>
                </div>
                <div class="errorTips__3l6aR"></div>
              </div>
            </div>
          </div>

          <!-- 所学专业 -->
          <div class="name__3KdNs">
            <div class="inputItemWrap__2ta1o" style="width: 310px">
              <label for="name" class="inputLabel__2pEIO">所学专业</label>
              <div class="inputAreaWrap__wwhUU formInputItemError__3BHN0">
                <div>
                  <div class="baseInputWrap__1DwEY baseErrorInputWrap__Gj2mv">
                    <input
                      error="1"
                      id="name"
                      autocomplete="off"
                      name="name"
                      type="text"
                      placeholder="请输入"
                      v-model="profession"
                    />
                  </div>
                </div>
                <div class="errorTips__3l6aR"></div>
              </div>
            </div>
          </div>

          <!-- 学历水平 -->
          <div class="name__3KdNs">
            <div class="inputItemWrap__2ta1o" style="width: 310px">
              <el-col :span="12" style="padding-top: 12px">
                <div class="block">
                  <label for="firstInput" class="inputLabel__2dAMi"
                    >学历水平</label
                  >
                  <br />
                  <el-cascader
                    :options="options"
                    @change="handleChange"
                    style="margin-top: 10px"
                  ></el-cascader>
                </div>
              </el-col>
            </div>
            <el-form style="margin-top: 20px">
              <el-form-item label="理想薪资">
                <el-input v-model="salary"></el-input>
              </el-form-item>
            </el-form>
          </div>

          <!-- 上一步 -->
          <div class="TwoButton">
            <el-button class="TwoButton1" @click="goBack()">上一步</el-button>
            <el-button class="TwoButton2" @click="goSearch()">完成</el-button>
          </div>
          <!-- 下一步 -->
        </form>
      </div>
      <div class="success" v-else>
        <div class="boder">
          <div class="success-icon">
            <span>✔</span>
          </div>
          <h2 class="text">恭喜简历已完成，开始投递简历吧！</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyOffer from '../MyOffer'
import { reqUploadUserInfo } from '@/api'
export default {
  name: 'Education',
  components: {
    MyOffer,
  },
  data() {
    return {
      success: true,
      salary: '',
      university: '',
      education: '',
      profession: '',
      options: [
        {
          value: '初中',
          label: '初中',
        },
        {
          value: '高中',
          label: '高中',
        },
        {
          value: '专科',
          label: '专科',
        },
        {
          value: '本科',
          label: '本科',
        },
        {
          value: '硕士',
          label: '硕士',
        },
        {
          value: '博士',
          label: '博士',
        },
      ],
    }
  },
  methods: {
    handleChange(value) {
      this.education = value[0]
    },
    goBack() {
      this.$router.back()
      console.log(this.$route)
    },
    async goSearch() {
      this.success = false

      const userInfo = {
        name: this.$route.query.username,
        sex: this.$route.query.sex,
        city: this.$route.query.city,
        identity: this.$route.query.identity, // 身份
        Email: this.$route.query.eMail,
        University: this.university,
        Education: this.education,
        age: this.$route.query.age,
        Salary: this.salary,
        profession: this.profession,
      }
      await reqUploadUserInfo(userInfo, 13697083850)
      setTimeout(() => {
        this.$destroy('MyOffer,Education')
        this.$router.push('/myresume')
        this.success = true
      }, 3000)
    },
  },
}
</script>
<style lang='less' rel='stylesheet/less' scoped>
* {
  outline: none;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #585e68;
  font-size: 14px;
  margin-bottom: 20px;
}
.registerComplete {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  // display: flex;
  // justify-content: center;
  // align-items: center;
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
  overflow: hidden;
}
.inputItemWrap__2ta1o {
  padding-top: 39px;
  width: 380px;
  position: relative;
  overflow: hidden;
}
.inputItemWrap__2ta1o .inputAreaWrap__wwhUU {
  margin-top: 6px;
  position: relative;
}
.inputLabel__2pEIO {
  font-size: 13px;
}
.inputItemWrap__2ta1o .errorTips__3l6aR {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ff7452;
  margin-top: 2px;
  display: block;
}
.baseInputWrap__1DwEY input {
  font-size: 12px;
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
.TwoButton {
  margin-top: 150px;
}
.TwoButton1 {
  border: 1px solid #09b991;
  color: #09b991;
  background-color: white;
  margin-left: 22px;
}
.TwoButton2 {
  background-color: #7fd9c4;
  color: white;
  margin-left: 36px;
}
.TwoButton1:hover,
.TwoButton2:hover {
  background-color: #09b991;
  color: white;
}

.success {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: 480px;
  margin: 0 auto;
  margin-top: 240px;
}
.success .boder {
  text-align: center;
  border-radius: 20px;
  height: 500px;
  line-height: 500px;
  background: #fff;
  // display: flex;
  // align-items: center;
  position: relative;
}
.success .boder .success-icon {
  position: absolute;
  left: 50%;
  margin-left: -35px;
  top: 50%;
  margin-top: -125px;
  // display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #00b38a;
  span {
    font-size: 40px;
    color: #fff;
    position: absolute;
    left: 20px;
    top: -216px;
  }
}
.success .boder .text {
  font-size: 24px;
}
</style>