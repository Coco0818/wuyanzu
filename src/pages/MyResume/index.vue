<template>
  <div id="myresume">
    <!-- 简历区 -->
    <div class="resume">
      <!-- 基本信息 -->
      <div class="resume-a clearFix">
        <div class="head-pic">
          <img :src="headPic.imgUrl" />
        </div>
        <div class="my-msg">
          <h2 class="name">{{ myResumeInfo.name }}</h2>
          <ul class="info-list">
            <li class="fl">{{ myResumeInfo.University }}<span>|</span></li>
            <li class="fl">{{ myResumeInfo.Education }}<span>|</span></li>
            <li class="fl">{{ myResumeInfo.identity }}<span>|</span></li>
            <li class="fl">{{ myResumeInfo.age }}<span>|</span></li>
          </ul>
          <ul class="tel-list">
            <li class="fl">
              <img class="tel-icon" src="./images/phone.png" alt="" />
              <span>{{ myResumeInfo.phone }}</span>
            </li>
            <li class="fl">
              <img class="mail-icon" src="./images/email.png" alt="" />
              <span>{{ myResumeInfo.Email }}</span>
            </li>
          </ul>
        </div>
        <div class="user-btn">
          <img src="./images/download.png" alt="" />
          <a href="javascript">编辑</a>
        </div>
      </div>
      <!-- 个人优势 -->
      <div class="resume-b">
        <h2 class="title">个人优势</h2>
        <div class="goods">
          <ul class="youdian">
            <li>我的优势</li>
          </ul>
        </div>
      </div>
      <!-- 求职意向 -->
      <div class="resume-b">
        <h2 class="title">求职意向</h2>
        <ul class="expectJobses">
          <li>
            <span>前端工程师</span>
            <span>|</span>
            <span>{{ myResumeInfo.city }}</span>
            <span>|</span>
            <span>{{ myResumeInfo.Salary }}</span>
          </li>
        </ul>
      </div>
      <!-- 项目经验 -->
      <div class="resume-d">
        <h2 class="title">工作经历</h2>
      </div>
      <div class="resume-e">
        <h2 class="title">项目经历</h2>
        <div class="empty">
          <span class="left"
            >完善项目经历信息，有助于Hr更真实的了解你的能力</span
          >
          <span class="right">立即添加</span>
        </div>
      </div>
      <div class="resume-f">
        <h2 class="title">教育经历</h2>
        <div class="project-item">
          <div class="title-pic">
            <img :src="headPic.imgUrl" alt="" />
            <div>
              <span class="school">{{ myResumeInfo.University }}</span>
              <div class="text-dsc">
                <span>{{ myResumeInfo.profession }}</span>
                <span></span>
                <span> / </span>
                <span class="teshu">{{ myResumeInfo.Education }}</span>
              </div>
            </div>
            <div class="time">
              <span>2010.09-2018.06</span>
            </div>
          </div>
        </div>
      </div>
      <div class="resume-g">
        <h2 class="title">社交主页</h2>
      </div>
      <div class="resume-h">
        <h2 class="title">设计作品</h2>
        <div class="position">
          <ul>
            <li>
              <div class="upload">
                <i>+</i>
              </div>
              <div class="upload-text">上传图片</div>
              <div class="upload-dsc">
                <span>目前仅支持PNG/JPG/JPEG/GIF图片</span>
                <span>文件大小需小于10M</span>
              </div>
              <input
                type="file"
                title="支持.jpg,.gif,.jpeg,.png,.pjpeg格式文件，大小不超过10M"
                size="3"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 求职状态区 -->
    <div class="right-nav">
      <div class="right-top">
        <div class="my-upload">
          <p>
            <img src="./images/upload.png" alt="" />
          </p>
          <button class="lg-btn">上传简历附件</button>
          <p class="my-upload-text">支持word、pdf、ppt、txt、wps格式文件</p>
        </div>
        <!-- 求职状态 -->
        <div class="flex-between">
          <span class="my-state">求职状态</span>
          <span class="jobing">
            离职找工作/2周内入职
            <img src="./images/arrow-rg.png" alt="" />
          </span>
        </div>

        <div class="privacy">
          <div class="flex-info">
            <span class="set-title">隐私设置</span>
            <span class="set-icon">
              <img src="./images/seting.png" alt="" />
              设置
            </span>
          </div>
          <div class="flex-info">
            <span class="basic">屏蔽公司</span>
            <p class="basic">
              <span>已屏蔽 &nbsp;</span>
              <span class="lagou">0</span>
              <span>个</span>
            </p>
          </div>
          <div class="flex-info">
            <span class="basic">隐藏设置</span>
            <span class="basic">已隐藏</span>
          </div>
        </div>
      </div>
      <ul class="inner">
        <li class="active">
          <img class="stack-icon" src="./images/7.png" alt="" />
          <div>基本信息</div>
        </li>
        <li>
          <img class="stack-icon" src="./images/6.png" alt="" />
          <div>个人能力</div>
        </li>
        <li>
          <img class="stack-icon" src="./images/5.png" alt="" />
          <div>工作经历</div>
        </li>
        <li>
          <img class="stack-icon" src="./images/4.png" alt="" />
          <div>项目经验</div>
        </li>
        <li>
          <img class="stack-icon" src="./images/3.png" alt="" />
          <div>教育经历</div>
        </li>
        <li>
          <img class="stack-icon" src="./images/2.png" alt="" />
          <div>社交主页</div>
        </li>
        <li>
          <img class="stack-icon" src="./images/1.png" alt="" />
          <div>设计作品</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { reqMyResume } from '@/api'
export default {
  name: 'MyResume',
  data() {
    return {
      myResumeInfo: {},
      headPic: {},
    }
  },
  async mounted() {
    const result = await reqMyResume(13697083850)
    if (result.code === 20000) {
      this.myResumeInfo = result.data[0]
      this.headPic = result.data[1]
    } else {
      alert('请求失败')
    }
  },
}
</script>
<style lang="less" scoped>
.clearFix {
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  clear: both;
}
.fl {
  float: left;
}
.title {
  // display: inline-block;
  font-size: 20px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #040404;
  line-height: 28px;
  letter-spacing: 1px;
  position: relative;
  // margin-left: 10px;
  margin-left: 40px;
  float: left;
  &::before {
    content: '';
    display: block;
    border-left: 3px solid #00b38a;
    height: 16px;
    width: 3px;
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
#myresume {
  // margin-top: 50px;
  width: 100%;
  margin: 50px auto 0;
  // height: 1400px;
  display: flex;
  justify-content: center;
  // align-items: center;
  .resume {
    width: 858px;
    // height: 216px;
    background: #ffffff;
    border-radius: 4px;
    position: relative;
    border: 1px solid #e6e6e6;
    // left: 50%;
    .resume-a {
      width: 768px;
      height: 120px;
      padding: 51px 50px 50px 41px;
      background: #f8f9fb;
      .head-pic {
        float: left;
        img {
          width: 99px;
          height: 99px;
          border-radius: 50%;
        }
      }
      .my-msg {
        float: left;
        .name {
          margin-left: 20px;
          font-size: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #040404;
          line-height: 33px;
          letter-spacing: 1px;
          padding-right: 11px;
        }
        .info-list {
          padding-top: 20px;
          font-size: 16px;
          font-weight: 400;
          color: #666666;
          margin-left: 19px;
          li {
            margin: 1px;
            span {
              margin: 0 10px;
            }
          }
        }
        .tel-list {
          margin-left: 20px;
          margin-top: 30px;
          font-size: 16px;
          font-weight: 400;
          color: #666666;

          li {
            margin-right: 20px;
            .tel-icon {
              width: 11px;
              height: 14px;
              margin-right: 5px;
              margin-top: -2px;
              vertical-align: middle;
            }
            .mail-icon {
              width: 14px;
              height: 11px;
              margin-right: 5px;
              margin-top: -2px;
              vertical-align: middle;
            }
          }
        }
      }
      .user-btn {
        position: absolute;
        right: 50px;
        top: 60px;
        img {
          width: 12px;
          height: 14px;
          margin-right: 7px;
          margin-top: -2px;
          vertical-align: middle;
        }
        a {
          font-size: 14px;
          font-family: HiraginoSansGB-W3, HiraginoSansGB;
          font-weight: normal;
          color: #02b28a;
          cursor: pointer;
        }
      }
    }
    .resume-b {
      margin-top: 50px;

      .goods {
        display: inline-block;
        width: 780px;
        padding: 10px;
        margin: 0 32px;
        margin-top: 20px;
        .youdian {
          ul {
            li {
              font-size: 14px;
            }
          }
        }
      }
      .expectJobses {
        padding: 0px 40px;
        margin-top: 30px;
        display: inline-block;
        li {
          color: #666666;
          padding: 0px 40px;
          padding: 10px;
          margin-top: 20px;
          margin-left: -134px;
          span {
            font-size: 16px;
            font-weight: 400;
            margin-right: 30px;
          }
        }
      }
    }
    .resume-d {
      margin-top: 50px;
      height: 50px;
    }
    .resume-e {
      margin-top: 50px;
      display: inline-block;

      .empty {
        width: 780px;
        margin: 0 30px;
        margin-top: 70px;
        height: 66px;
        background: #f8f9fb;
        border-radius: 2px;
        border: 1px dashed #d7d7d7;
        line-height: 66px;
        text-align: center;
        .left {
          font-size: 14px;
          font-family: HiraginoSansGB-W3, HiraginoSansGB;
          font-weight: normal;
          color: #a8a8a8;
        }
        .right {
          cursor: pointer;
          margin-left: 20px;
          font-size: 14px;
          font-family: HiraginoSansGB-W3, HiraginoSansGB;
          font-weight: normal;
          color: #02b28a;
        }
      }
    }
    .resume-f {
      margin-top: 50px;
      height: 100px;
      position: relative;
      .project-item {
        padding: 10px;
        margin-bottom: 10px;

        .title-pic {
          margin-top: 50px;
          position: relative;
          img {
            width: 46px;
            height: 46px;
            margin-right: 10px;
            float: left;
            margin-left: 30px;
          }
          div {
            margin-left: 30px;
            .school {
              max-width: 210px;
              display: inline-block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .text-dsc {
              // display: inline;
              span {
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #666666;
              }
              // .teshu {
              //   max-width: 127px;
              //   display: inline-block;
              //   overflow: hidden;
              //   text-overflow: ellipsis;
              //   white-space: nowrap;
              // }
            }
          }
          .time {
            position: absolute;
            right: 20px;
            top: 0;
            font-weight: 400;
            font-size: 14px;
            span {
              color: #666666;
            }
          }
        }
      }
    }
    .resume-g {
      margin-top: 50px;
      height: 100px;
    }
    .resume-h {
      margin-top: 50px;
      .position {
        float: left;
        margin-top: 20px;
        margin-left: -138px;
        ul {
          padding: 0px 40px;
          margin-top: 30px;
          li {
            &:last-child {
              position: relative;
              width: 240px;
              height: 135px;
              border-radius: 2px;
              border: 1px solid #d5dadf;
              vertical-align: top;
              padding: 25px 19px 12px 19px;
            }
            .upload {
              width: 30px;
              height: 30px;
              border-radius: 24px;
              text-align: center;
              line-height: 30px;
              border: 1px solid #18b893;
              margin: 0 auto;
              margin-bottom: 5px;

              i {
                font-size: 24px;
                color: #18b893;
                display: inline-block;
                line-height: 0;
                text-align: center;
                line-height: 30px;
                text-transform: none;
                vertical-align: -0.125em;
                text-rendering: optimizeLegibility;
              }
            }
            .upload-text {
              font-size: 14px;
              font-weight: 500;
              color: #18b893;
              text-align: center;
              margin-bottom: 7px;
            }
            .upload-dsc {
              font-size: 12px;
              font-weight: 400;
              color: #b0b0b0;
              text-align: center;
              span {
                display: block;
              }
            }
            input {
              width: 240px;
              height: 135px;
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .right-nav {
    width: 325px;
    // float: right;
    margin-top: -20px;
    margin-left: 30px;
    .right-top {
      .my-upload {
        margin-top: 20px;
        background: #fff;
        border: 1px solid #e6e6e6;
        padding: 15px;
        text-align: center;
        p {
          img {
            width: 83px;
          }
        }
        .lg-btn {
          margin: 10px auto;
          display: block;
          font-size: 14px;
          width: 144px;
          height: 28px;
          padding: 0;
          color: #00b38a;
          border-color: #00b38a;
          background-color: transparent;
        }
        .my-upload-text {
          font-size: 12px;
          color: #555;
        }
      }
      .flex-between {
        background: #fff;
        border-radius: 2px;
        border: 1px solid #e6e6e6;
        padding: 20px;
        margin-top: 20px;
        .my-state {
          font-size: 20px;
          font-weight: 500;
          color: #040404;
        }
        .jobing {
          // display: flex;
          // justify-content: space-between;
          // align-items: center;
          float: right;
          margin-top: 4px;
          font-size: 14px;
          color: #666;
          cursor: pointer;
          img {
            width: 14px;
          }
        }
      }
      .privacy {
        background: #fff;
        border-radius: 2px;
        border: 1px solid #e6e6e6;
        padding: 20px;
        margin-top: 20px;
        .privacy-set {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 10px;
        }
        .flex-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          .set-title {
            font-size: 20px;
            font-weight: 500;
            color: #040404;
          }
          .set-icon {
            display: flex;
            align-items: center;
            color: #00b38a;
            cursor: pointer;
            font-size: 14px;
            img {
              width: 14px;
              margin-right: 5px;
            }
          }
          .basic {
            font-size: 14px;
            color: #666;
            .lagou {
              color: #00b38a;
            }
          }
        }
      }
    }
    .inner {
      margin-top: 30px;
      background: #ffffff;
      border-radius: 4px;
      border: 1px solid #e9e9e9;
      li {
        height: 50px;
        line-height: 50px;
        margin-left: -1.5px;
        cursor: pointer;
        border-left: 3px solid transparent;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        font-size: 14px;
        padding-left: 32px;
        .stack-icon {
          float: left;
          display: inline-block;
          width: 18px;
          height: 18px;
          margin-top: 16px;
          margin-right: 15px;
        }
      }
      .active {
        color: #02b28a;
        border-color: #00b88d;
        border-width: 3px;
      }
    }
  }
}
</style>
