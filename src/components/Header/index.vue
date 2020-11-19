<template>
  <header id="header">
    <div class="header-bar">
      <!-- 头部导航栏 -->
      <div class="inner">
        <!-- 左边 -->
        <div class="l-bar">
          <a href="" class="logo"></a>
          <ul class="l-bar-tabs">
            <li class="bar-city">
              <span>深圳站</span>
              <i></i>
            </li>
            <li class="tabs-active">
              <a href="">首页</a>
            </li>
            <li>
              <a href="">公司</a>
            </li>
            <li>
              <a href="">校园招聘</a>
            </li>
            <li>
              <a href="javascript:;" @click="goSearch">职位</a>
            </li>
            <li>
              <a href="">言职</a>
            </li>
            <li>
              <a href="">课程</a>
            </li>
            <li>
              <a href="">APP</a>
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div class="r-bar">
          <!--  未登录状态 -->
          <ul class="account-bar">
            <li class="upload">
              <a href="##">上传附件简历</a>
            </li>
            <li>
              <a href="javascript:;" class="login" @click="goLogin">登录</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="##" @click="goRegister">注册</a>
            </li>
          </ul>
          <!-- 登录状态 -->
          <!-- <ul class="account-bar">
            <li class="msg">
              <a href="" class="iconfont icon-lingdang"></a>
            </li>
            <li>
              <a href="">我的简历</a>
            </li>
            <li class="user">
              <span>布丁Coco</span>
              <i></i>
            </li>
          </ul> -->
          <a href="##" class="r-os">进入企业版</a>
        </div>
      </div>
      <!-- 右侧固定导航栏 -->
      <div class="r-nav">
        <div class="nav-wrap" style="height: 2700px">
          <div class="inner-nav">
            <a href="" class="nav-item icon-item1"></a>
            <a href="" class="nav-item icon-item2"></a>
            <a href="" class="nav-item icon-item3"></a>
            <a href="" class="nav-item icon-item4"></a>
            <a href="" class="nav-item icon-item5"></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      centerDialogVisible: false,
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    goRegister() {
      this.$router.push('/register')
    }
  },
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
#header {
  position: relative;
  z-index: 120;
  min-height: 40px;
  .header-bar {
    min-width: 1200px;
    background: #32373e;
    // 头部导航栏
    .inner {
      width: 1200px;
      height: 40px;
      margin: 0 auto;
      background: #32373e;
      font-size: 14px;
      cursor: default;

      .l-bar {
        float: left;
        .logo {
          float: left;
          width: 43px;
          height: 40px;
          background-image: url("./images/logo.png");
          background-repeat: no-repeat;
          background-position: -10px -1px;
          background-size: 64px 128px;
        }

        .l-bar-tabs {
          float: left;
          margin-left: 34px;
          .bar-city {
            float: left;
            margin-right: 34px;
            cursor: pointer;
            span {
              font-size: 14px;
              color: #0dca9f;
              line-height: 40px;
              padding-right: 12px;
              margin: 0;
            }
            i {
              position: absolute;
              height: 0;
              width: 0;
              border-width: 5px;
              border-style: solid;
              border-color: #5f646d transparent transparent;
              right: -4px;
              top: 18px;
            }
          }
          li {
            position: relative;
            text-align: center;
            float: left;
            color: #fff;
            a {
              display: inline-block;
              height: 40px;
              line-height: 40px;
              padding: 0 21px;
              color: #afb5c0;
            }
          }
          .tabs-active {
            background: #24282c;
            cursor: default;
            a {
              color: #fff;
            }
          }
        }
      }
      .r-bar {
        float: right;
        .account-bar {
          float: left;
          margin-right: 52px;

          li {
            position: relative;
            text-align: center;
            float: left;
            // 未登录状态
            a {
              display: inline-block;
              height: 40px;
              line-height: 40px;
              color: #afb5c0;
              cursor: pointer;
            }
            span {
              padding: 0 7px;
              color: #5e6166;
              line-height: 40px;
            }
            .login {
              position: relative;
              &::before {
                content: "";
                position: absolute;
                top: 11px;
                left: -26px;
                width: 18px;
                height: 18px;
                background: url(//www.lgstatic.com/lg-www-fed/common/widgets/header_c/modules/topbar/img/icon_login@2x_a6d7b9d.png)
                  no-repeat;
                background-size: 100% 100%;
              }
            }

            .loginForm {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              .input-item {
                // position: relative;
                width: 316px;
                margin-bottom: 16px;
                box-sizing: border-box;
                border: 1px solid #fff;
                .input-border {
                  border: 1px solid #fff;
                  .input {
                    box-sizing: border-box;
                    width: 100%;
                    height: 50px;
                    padding-left: 18px;
                    background: 0 0;
                    border-radius: 0;
                    font-size: 14px;
                    border: 0;
                    background: #f4f4f4;
                  }
                }
              }
              .yanzhen {
                clear: both;

                .phoneLogin {
                  float: left;
                  cursor: pointer;
                  margin-bottom: 25px;
                  font-size: 14px;
                  color: #00b38a;
                }
                .forget-pwd {
                  // position: relative;
                  float: right;
                  font-size: 14px;
                  display: block;
                  text-align: right;
                  text-decoration: none;
                  color: #999;
                }
              }
              .login-btn {
                width: 316px;
                height: 48px;
                line-height: 48px;
                font-size: 16px;
                text-align: center;
                color: #fff;
                background-image: url(//www.lgstatic.com/lg-www-fed/common/widgets/passport/static/images/popup-sprite_e5ea04f.png);
                background-repeat: no-repeat;
                background-position: -20px -20px;
                margin-bottom: 20px;
                cursor: pointer;
              }
              .go-rigist {
                width: 100%;
                font-size: 16px;
                color: #666;
                text-align: center;
                cursor: pointer;
              }
            }

            // 登录状态
            a {
              display: inline-block;
              height: 40px;
              line-height: 40px;
              padding: 0 16px;
              color: #afb5c0;
            }
          }
          .user {
            position: relative;
            cursor: pointer;
            padding: 0 12px;
            box-sizing: border-box;

            span {
              display: block;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
              color: #afb5c0;
              max-width: 96px;
              padding-left: 0;
              padding-right: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              word-wrap: normal;
            }
            i {
              position: absolute;
              top: 17px;
              right: 0;
              font-size: 0;
              height: 0;
              width: 0;
              border-width: 5px 4px 0;
              border-style: solid dashed;
              border-color: #afb5c0 transparent transparent;
            }
          }

          .upload {
            padding: 0 52px;
          }
        }
      }
      .r-os {
        float: left;
        height: 40px;
        line-height: 40px;
        color: #afb5c0;
      }
    }
    // 右边固定导航栏
    .r-nav {
      position: fixed;
      right: 0;
      width: 48px;
      background: #fafafa;
      box-shadow: -4px 0px 6px 0px rgba(0, 0, 0, 0.08);
      .nav-wrap {
        .inner-nav {
          padding-top: 86px;
          .nav-item {
            display: block;
            position: relative;
            cursor: pointer;
            margin: 0 auto;
            margin-bottom: 40px;
            width: 24px;
            height: 24px;
            background-size: 100% 100%;
          }
          .icon-item1 {
            background-image: url("./images/icon1.png");
          }
          .icon-item2 {
            background-image: url("./images/icon2.png");
          }
          .icon-item3 {
            background-image: url("./images/icon3.png");
          }
          .icon-item4 {
            margin-bottom: 80px;
            background-image: url("./images/icon4.png");
          }
          .icon-item5 {
            background-image: url("./images/icon5.png");
          }
        }
      }
    }
  }
}
</style>