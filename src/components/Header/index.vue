<template>
  <header id="header">
    <div class="header-bar">
      <!-- 头部导航栏 -->
      <div class="inner">
        <!-- 左边 -->
        <div class="l-bar">
          <router-link class="logo" to="/"></router-link>
          <ul class="l-bar-tabs" @click="sum">
            <li class="bar-city">
              <span>深圳站</span>
              <i></i>
            </li>
            <li>
              <a
                href="javascript:;"
                @click="goHome"
                :class="routePath === '/' ? 'tabs-active' : ''"
                >首页</a
              >
            </li>
            <li>
              <a
                href="javascript:;"
                @click="goCompany"
                :class="routePath === '/company' ? 'tabs-active' : ''"
                >公司</a
              >
            </li>
            <li>
              <a href="javascript:;">校园招聘</a>
            </li>
            <li>
              <a
                href=""
                @click="goSearch"
                :class="routePath === '/search' ? 'tabs-active' : ''"
                >职位</a
              >
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
          <!-- 登录状态 -->
          <ul class="account-bar" v-if="myPhone">
            <li class="msg">
              <a href="" class="iconfont icon-lingdang"></a>
            </li>
            <li @click="goMyOffer">
              <a href="javascript:;">我的简历</a>
            </li>
            <li class="user">
              <el-dropdown trigger="click" @command="logOut">
                <span class="el-dropdown-link">
                  {{ userName }}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
          <!-- 未登录状态 -->
          <ul class="account-bar" v-else>
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

          <a href="##" class="r-os">进入企业版</a>
        </div>
      </div>
      <!-- 右侧固定导航栏 -->
      <div class="r-nav">
        <div class="nav-wrap" style="height: 2700px">
          <div class="inner-nav">
            <el-tooltip
              class="item"
              effect="light"
              content="收藏职位"
              placement="left-start"
            >
              <a href="" class="nav-item icon-item1"> </a>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="light"
              content="投递记录"
              placement="left-start"
            >
              <a href="" class="nav-item icon-item2"></a>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="light"
              content="职位订阅"
              placement="left-start"
            >
              <a href="" class="nav-item icon-item3"></a>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="light"
              content="面试邀约"
              placement="left-start"
            >
              <a href="" class="nav-item icon-item4"></a>
            </el-tooltip>

            <el-tooltip class="item" placement="left-start" effect="light">
              <div slot="content" class="share-app">
                <div class="download-app">
                  <img
                    src="./images/download.png"
                    alt=""
                    style="width: 172px; height: 172px"
                  />
                </div>
                <div class="scan" style="text-align: center">扫码下载APP</div>
              </div>
              <!-- <el-button>Top center</el-button> -->
              <a href="" class="nav-item icon-item5"></a>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      routePath: '/',
      centerDialogVisible: false,
    }
  },
  computed: {
    ...mapState({
      myPhone: (state) => state.users.myPhone,
    }),

    ...mapGetters({
      userName: 'getUserName',
    }),
  },
  watch: {
    $route() {
      this.routePath = this.$route.path
    },
  },
  mounted() {},
  methods: {
    goLogin() {
      this.$router.push('/login')
    },
    goRegister() {
      this.$router.push('/register')
    },
    goHome() {
      this.$router.push('/')
    },
    goSearch() {
      this.$router.push('/search')
    },
    goCompany() {
      this.$router.push('/company')
    },
    sum(e) {
      e.preventDefault()
      // console.log(e)
      // console.log(e.path[2].childNodes)
      const arr = [].slice.call(e.path[2].childNodes, 1)
      arr.forEach((item) => {
        // console.dir(item)
        item.childNodes[0].className = ''
      })
      e.target.className = 'tabs-active'
    },
    goMyOffer() {
      const showResume = this.$store.state.users.showResume
      // console.log(showResume)
      if (showResume) {
        this.$router.push('/myresume')
      } else {
        this.$router.push('/myoffer')
      }
    },
    logOut() {
      console.log(1)
      this.$store.dispatch('deleteUserInfo')
      localStorage.removeItem('token')
      this.$router.push('/')
    },
  },
}
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
          background-image: url('./images/logo.png');
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
                content: '';
                position: absolute;
                top: 11px;
                left: -26px;
                width: 18px;
                height: 18px;
                // background: url(//www.lgstatic.com/lg-www-fed/common/widgets/header_c/modules/topbar/img/icon_login@2x_a6d7b9d.png)
                // no-repeat;
                // background-size: 100% 100%;
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
              top: 18px;
              right: -12px;
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
          .item {
            .share-app {
              top: -40px;
              left: -210px;
              position: absolute;
              z-index: 1;
              visibility: hidden;
              opacity: 0;
              background-color: #fff;
              padding: 8px;
              padding-bottom: 12px;
              transition: opacity 0.3s;
              .download-app {
                img {
                  border-radius: 2px;
                  padding-bottom: 12px;
                  font-size: 16px;
                  color: #333;
                  text-align: center;
                  background-color: #fff;
                  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
                  width: 172px;
                  height: 172px;
                  background-image: url('./images/download.png');
                  background-size: 100% 100%;
                  margin: 0 auto;
                }
              }
              .scan {
                margin-top: 20px;
                margin-bottom: 5px;
                font-size: 16px;
                font-weight: 400;
                color: #0c0c0c;
                text-align: center;
              }
            }
          }

          .icon-item1 {
            background-image: url('./images/icon1.png');
          }
          .icon-item2 {
            background-image: url('./images/icon2.png');
          }
          .icon-item3 {
            background-image: url('./images/icon3.png');
          }
          .icon-item4 {
            margin-bottom: 80px;
            background-image: url('./images/icon4.png');
          }
          .icon-item5 {
            background-image: url('./images/icon5.png');
          }
        }
      }
    }
  }
}
</style>