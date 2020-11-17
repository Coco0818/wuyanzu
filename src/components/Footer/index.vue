<template>
  <div id="footer">
    <div class="wrapper">
      <div class="inner-wrapper">
        <div class="footer-left">
          <a class="footer-app" href="##">
            <i class="footer-app-icon"></i>
            下载拉勾APP
          </a>
          <a class="footer-app" href="##">
            <i class="footer-icon"></i>
            微信小程序
          </a>
          <div class="footer-item">
            <a class="wechat" href="##">
              <i class="wechat-icon"></i>
              拉勾微信
              <img
                src="./images/wechatCord.png"
                width="160px"
                height="160px"
                style="display: none; opacity: 1"
              />
            </a>
            <a class="wechat" href="##">
              <i class="weibo-icon"></i>
              拉勾微博
              <img
                src="./images/wechatCord.png"
                width="160px"
                height="160px"
                style="display: none; opacity: 1"
              />
            </a>
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-module">
            <p class="title">企业服务</p>
            <a href="##">招聘抢人宝典</a>
            <a href="##">公司搜索</a>
            <a href="##">拉勾APP</a>
          </div>
          <div class="footer-module">
            <p class="title">用户帮助</p>
            <a href="##">用户协议</a>
            <a href="##">隐私政策</a>
            <a href="##">在线提问</a>
          </div>
          <div class="footer-module">
            <p class="title">联系方式</p>
            <a href="##">服务热线：4006 2828 35 (9:00 -18:00)</a>
            <a href="##">企业服务邮箱：cc@lagou.com</a>
            <a href="##">联系我们</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="copyright-main">
          <div class="main-left">
            <span class="copyright-title">
              <em>©</em>
              <span>2020</span>
              拉勾网
            </span>
            <span>京ICP备14023790号-2</span>
            <a href="" class="beian-main">
              <i class="beian-icon"></i>
              京公网安备 11010802024043号</a
            >
            <div class="weifa-phone">
              <i class="weifa-icon"></i>
              <p>
                <span>违法和不良信息举报</span>
                <span>电话: 4006 2828 35</span>
                <span>邮箱: cc@lagou.com</span>
              </p>
            </div>
          </div>
          <i class="main-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style lang="less" scoped>
#footer {
  // margin-top: 250px;
  background-color: #fff;
  clear: both;
  border-top: 1px solid #ebebeb;
  position: relative;
  z-index: 110;
  .wrapper {
    margin: 0 auto;
    position: relative;
    .inner-wrapper {
      width: 1200px;
      max-width: 1200px;
      margin: 49px auto 66px;
      white-space: nowrap;
      display: flex;

      .footer-left {
        border-right: 1px solid #e8e8e8;
        padding-right: 130px;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .footer-app {
          position: relative;
          padding: 10px 0 8px;
          width: 180px;
          border: 1px solid #00b38a;
          color: #00b38a;
          text-align: center;
          margin-bottom: 16px;
          display: flex;
          .footer-app-icon {
            display: inline-block;
            height: 16px;
            width: 12px;
            margin-right: 7.6px;
            background: url('./images/sprite_9dd5c92.png') -150px -220px
              no-repeat;
          }
          .footer-icon {
            display: inline-block;
            height: 14px;
            width: 16px;
            margin-right: 6.4px;
            background: url('./images/sprite_9dd5c92.png') -214px -54px
              no-repeat;
          }
        }
        .footer-item {
          display: flex;
          justify-content: space-between;
          a {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .wechat {
            position: relative;
            .wechat-icon {
              display: inline-block;
              height: 16px;
              width: 16px;
              margin-right: 5px;
              background: url('./images/sprite_9dd5c92.png') -114px -184px
                no-repeat;
              img {
                display: none;
                position: absolute;
                width: 140px;
                height: 140px;
                top: 32px;
                left: 0;
                z-index: 1001;
                background-color: #fff;
                box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
                border-radius: 3px;
              }
            }
            .weibo-icon {
              display: inline-block;
              height: 14px;
              width: 16px;
              margin-right: 5px;
              background: url('./images/sprite_9dd5c92.png') -214px -20px
                no-repeat;
            }
          }
        }
      }
      .footer-right {
        margin-left: 130px;
        display: flex;
        flex: 1;
        justify-content: space-between;
        .title {
          font-size: 18px;
          font-weight: 600;
          color: #555;
          margin-bottom: 30px;
        }
        a {
          color: #555;
          font-size: 14px;
          text-decoration: none;
          display: block;
          margin-bottom: 10px;
        }
      }
    }
    .copyright {
      clear: both;
      margin: 0 auto;
      color: #999;
      font-size: 14px;
      line-height: 12px;
      text-align: center;
      background: #fafafa;
      height: 100px;
      overflow: hidden;
      a {
        padding-right: 0;
        font-size: 14px;
        color: #999;
      }
      .copyright-main {
        width: 1200px;
        max-width: 1200px;
        margin: 28px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .main-left {
          display: flex;
          align-items: center;
          .copyright-title {
            margin-right: 5px;
            em {
              font-size: 14px;
              font-style: normal;
            }
          }
          .beian-main {
            margin: 0 0 0 20px;
            display: flex;
            align-items: center;
            .beian-icon {
              display: inline-block;
              width: 16px;
              height: 16px;
              background: url('./images/sprite_9dd5c92.png') -150px -184px
                no-repeat;
              margin: 0 5px 0 0;
            }
          }
          .weifa-phone {
            margin: 0 0 0 20px;
            border: 1px solid #d5dadf;
            display: flex;
            align-items: center;
            padding: 8px 20px;
            .weifa-icon {
              display: inline-block;
              width: 20px;
              height: 24px;
              background: url('./images/sprite_9dd5c92.png') -132px -20px
                no-repeat;
              margin: 0 10px 0 0;
            }
            p {
              text-align: left;
              span {
                display: block;
                line-height: 14px;
                font-size: 12px;
                color: #999;
              }
            }
          }
        }
        .main-icon {
          display: inline-block;
          width: 198px;
          height: 19px;
          background: url('./images/footer_lagou_icon_75f0ebc.png') 0 0
            no-repeat;
        }
      }
    }
  }
}
</style>