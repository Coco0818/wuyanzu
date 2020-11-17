<template>
  <div>
    <!-- 工作热门区 -->
    <ul class="job-tap">
      <li
        @click="work = !work"
        class="hot-tap"
        :class="[work ? 'current' : '']"
      >
        24Hours热门
      </li>
      <li
        @click="work = !work"
        class="new-tap"
        :class="[work ? '' : 'current']"
      >
        最新职位
      </li>
    </ul>
    <!-- 工作列表 -->
    <div class="job-list-wrapper">
      <div class="job-list">
        <div class="hot-list" v-if="work">
          <div class="hot-tips">
            <span class="tips-icon"><i>?</i></span>
            <div>过去24小时，最多人看过的岗位在这里</div>
            <span class="tips">我知道了</span>
          </div>
          <ul class="job-item">
            <li
              class="job-wrapper"
              v-for="(item, index) in hotCompanyList"
              :key="item._id"
            >
              <!-- 校招直招图 -->
              <span class="top-icon"></span>
              <span class="top-icon"></span>
              <div class="pli-top">
                <div class="pli-head">
                  <div class="pli-name">
                    <h2 class="dib">
                      <a href="">{{ item.positionName }}</a>
                    </h2>
                    <span class="dib create-item"
                      >&nbsp;&nbsp;[13:13发布]&nbsp;&nbsp;</span
                    >

                    <div class="chat-me" @mouseenter="showHr(index)">
                      <img src="./images/icon_chat2_d162651.png" alt="" />
                      <div
                        class="chat-pop"
                        :class="{ hr: hrShow === index }"
                        @mouseleave="leaveHr"
                      >
                        <span class="aroow"></span>
                        <dl class="chat-main">
                          <dt>
                            <!-- 二维码 -->
                            <div class="chat-qrcode">
                              <img src="./images/qrcode.png" alt="" />
                            </div>
                          </dt>
                          <dd>
                            <dl class="chat-head">
                              <dt>
                                <img
                                  src="./images/CgpOIF5zHE6AO-4cAAClHXSH0dU730.jpg"
                                  alt="hr头像"
                                  class="hr-pic"
                                />
                              </dt>
                              <dd>
                                <div class="hr-name">dkp</div>
                                <div class="hr-position"></div>
                              </dd>
                              <dd class="tip-text">
                                Hi，对我发布的职位感兴趣？用拉勾APP扫码，直接和我聊聊吧！
                              </dd>
                            </dl>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <span class="salary">{{ item.Salary }}</span>
                </div>
                <div class="pli-midle">
                  <span>{{ item.workingExperience }}</span>
                  <span class="benke">{{ item.Education }}</span>
                </div>
                <div class="pli-foot">
                  <div class="pli-btm">
                    <span
                      class="wordCut"
                      v-for="(tap, index) in item.postTag"
                      :key="index"
                      >{{ tap }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="pli-gongsi">
                <div class="xuxian"></div>
                <a href="##">
                  <img :src="item.imgUrl" alt="" />
                </a>
                <div class="bottom-right">
                  <h3 class="company_name wordCut">
                    <a href="##">{{ item.companyName }}</a>
                  </h3>
                  <h3 class="industry wordCut">
                    <span>{{ item.industrySector }}</span>
                    <span class="qianzhui">{{ item.FinancingStage }}</span>
                    <span class="qianzhui">{{ item.city }}</span>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
          <!-- 公共按钮 -->
          <a class="list-more" href="##">查看更多</a>
        </div>
        <!-- 最新职位 -->
        <div class="hot-list" v-else>
          <div class="hot-tips">
            <span class="tips-icon"><i>?</i></span>
            <div>刚刚才发布的职位！</div>
            <span class="tips">我知道了</span>
          </div>
          <ul class="job-item">
            <li
              class="job-wrapper"
              v-for="(item, index) in newCompanyList"
              :key="item._id"
            >
              <!-- 校招直招图 -->
              <span class="top-icon"></span>
              <!-- <span class="top-icon"></span> -->
              <div class="pli-top">
                <div class="pli-head">
                  <div class="pli-name">
                    <h2 class="dib">
                      <a href="">{{ item.positionName }}</a>
                    </h2>
                    <span class="dib create-item"
                      >&nbsp;&nbsp;[13:13发布]&nbsp;&nbsp;</span
                    >
                    <div class="chat-me" @mouseenter="showHr(index)">
                      <img src="./images/icon_chat2_d162651.png" alt="" />
                      <div
                        class="chat-pop"
                        :class="{ hr: hrShow === index }"
                        @mouseleave="leaveHr"
                      >
                        <span class="aroow"></span>
                        <dl class="chat-main">
                          <dt>
                            <!-- 二维码 -->
                            <div class="chat-qrcode">
                              <img src="./images/qrcode.png" alt="" />
                            </div>
                          </dt>
                          <dd>
                            <dl class="chat-head">
                              <dt>
                                <img
                                  src="./images/CgpOIF5zHE6AO-4cAAClHXSH0dU730.jpg"
                                  alt="hr头像"
                                  class="hr-pic"
                                />
                              </dt>
                              <dd>
                                <div class="hr-name">dkp</div>
                                <div class="hr-position"></div>
                              </dd>
                              <dd class="tip-text">
                                Hi，对我发布的职位感兴趣？用拉勾APP扫码，直接和我聊聊吧！
                              </dd>
                            </dl>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <span class="salary">{{ item.Salary }}</span>
                </div>
                <div class="pli-midle">
                  <span>{{ item.workingExperience }}</span>
                  <span class="benke">{{ item.Education }}</span>
                </div>
                <div class="pli-foot">
                  <div class="pli-btm">
                    <span
                      class="wordCut"
                      v-for="(tag, index) in item.postTag"
                      :key="index"
                      >{{ tag }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="pli-gongsi">
                <div class="xuxian"></div>
                <a href="">
                  <img :src="item.imgUrl" alt="" />
                </a>
                <div class="bottom-right">
                  <h3 class="company_name wordCut">
                    <a href="##">{{ item.companyName }}</a>
                  </h3>
                  <h3 class="industry wordCut">
                    <span>{{ item.industrySector }}</span>
                    <span class="qianzhui">{{ item.FinancingStage }}</span>
                    <span class="qianzhui">{{ item.city }}</span>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
          <!-- 公共按钮 -->
          <a class="list-more" href="##">查看更多</a>
        </div>
      </div>
    </div>
    <!-- 互联网热门公司 -->
    <ul class="job-tap">
      <li class="hot-tap current">互联网热门公司榜</li>
    </ul>
    <div class="job-list-wrapper">
      <div class="job-list">
        <div class="hot-list">
          <div class="hot-tips">
            <span class="tips-icon"><i>?</i></span>
            <div>互联网行业实力热门企业</div>
            <span class="tips">我知道了</span>
          </div>
          <!-- 公司列表 -->
          <div class="companyList-container">
            <ul>
              <li v-for="inter in internetCompanyInfo" :key="inter.id">
                <div class="companyList-top">
                  <p>
                    <img :src="inter.ImgUrl" alt="" />
                  </p>
                  <h3>{{ inter.comName }}</h3>
                  <h4 class="companyList-top-one">
                    {{ inter.indusStage }}
                  </h4>
                  <h4 class="companyList-top-two">{{ inter.advantage }}</h4>
                </div>
                <div class="companyList-bottom">
                  <a href="javascript:;">
                    <p class="companyList-green">{{ inter.commentNum }}</p>
                    <p class="companyList-line">面试评价</p>
                  </a>
                  <a href="javascript:;">
                    <p class="companyList-green">{{ inter.positionNum }}</p>
                    <p class="companyList-line">在招职位</p>
                  </a>
                  <a href="javascript:;">
                    <p class="companyList-green">{{ inter.perNum }}</p>
                    <p>简历处理率</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <a class="list-more2" href="##">查看更多</a>
  </div>
</template>
<script>
import { reqPositions, reqCompanys } from '@/api'

export default {
  name: 'JobTag',
  data() {
    return {
      work: true, // 热门工作区切换
      companyInfo: [], //所有公司信息
      hotCompanyList: [], //热门公司
      newCompanyList: [], //新公司
      companyRank: [], // 热门公司榜
      internetCompanyInfo: [], // 互联网热门公司
      hrShow: -1, // hr信息战术
    }
  },
  async mounted() {
    // 请求所有公司信息
    this.getCompanyInfo()
    // 互联网热门公司
    const inter = await reqCompanys()
    this.internetCompanyInfo = inter.data.slice(0, 8)
  },
  methods: {
    // 请求所有公司信息
    async getCompanyInfo() {
      const result = await reqPositions()
      this.companyInfo = result.data
      this.hotCompanyList = result.data.slice(0, 6)
      this.newCompanyList = result.data.slice(6, 12)
      this.companyRank = result.data.slice(12, 18)
    },
    showHr(index) {
      this.hrShow = index
    },
    leaveHr() {
      this.hrShow = -1
    },
  },
}
</script>
<style lang="less" scoped>
.job-tap {
  margin-top: 52px;
  margin-bottom: 14px;
  font-size: 0;
  border-bottom: 1px solid #e8e8e8;

  li {
    display: inline-block;
    padding: 14px 0;
    margin-right: 58px;
    font-size: 16px;
    color: #999;
    cursor: pointer;
  }
  // 选中状态
  .current {
    border-bottom: 2px solid #333;
    background: #fff;
    color: #333;
  }
  .new-tap {
    display: inline-block;
    padding: 14px 0;
    margin-right: 58px;
    font-size: 16px;
    color: #999;
  }
}

.job-list-wrapper {
  .job-list {
    position: relative;
    clear: both;
    .hot-list {
      height: 520px;
      .hot-tips {
        height: 18px;
        line-height: 18px;
        margin-top: 14px;
        margin-bottom: 2px;
        overflow: hidden;
        .tips-icon {
          display: block;
          width: 18px;
          height: 18px;
          background-color: #e6e6e6;
          border-radius: 50%;
          text-align: center;
          line-height: 18px;
          margin-right: 10px;
          float: left;
          i {
            color: white;
          }
        }

        div {
          float: left;
          display: inline-block;
          margin-right: 8px;
          color: #999;
        }
        .tips {
          float: left;

          color: #00b38a;
          padding-right: 12px;
          padding-left: 10px;
          font-size: 14px;
          line-height: 18px;
        }
      }

      .job-item {
        width: 1216px;
        clear: both;
        .job-wrapper {
          float: left;
          box-sizing: border-box;
          position: relative;
          width: 389px;
          height: 200px;
          margin: 16px 16px 0 0;
          padding: 20px 18px 0;
          border: 1px solid #eaeeed;
          background-color: #fff;
          .top-icon {
            position: absolute;
            top: -1px;
            left: -1px;
            width: 40px;
            height: 40px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 40px 40px;
          }
          // .director-icon {
          //   background-image: url('./images/direct-recruit@2x_0d49da5.png');
          // }
          // .school-icon {
          //   background-image: url('./images/school-recruitment_ae314a6.png');
          //   display: none;
          // }
          .pli-top {
            position: relative;
            clear: both;
            .pli-head {
              width: 351px;
              display: flex;
              justify-content: space-between;
              position: absolute;
              top: 4px;
              left: 0;
              .pli-name {
                float: left;
                height: 22px;
                font-size: 0;
                max-width: 290px;
                h2 {
                  float: left;
                }
                .dib {
                  display: inline-block;
                  vertical-align: middle;
                  a {
                    float: left;
                    color: #333;
                    max-width: 107px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    word-wrap: normal;
                  }
                }
                .create-item {
                  float: left;

                  color: #999;
                  font-size: 14px;
                }
                .chat-me {
                  float: left;
                  position: relative;
                  img {
                    width: 16px;
                    height: 16px;
                    cursor: pointer;
                    margin: 1px 5px 0;
                  }
                  .chat-pop {
                    display: none;
                    position: absolute;
                    top: -30px;
                    left: 30px;
                    width: 312px;
                    height: 132px;
                    padding: 16px;
                    background: #fff;
                    z-index: 1001;
                    border-radius: 3px;
                    border: 1px solid #dce4e6;
                    box-shadow: 1px 1px 2px #f2f2f2;
                    user-select: none;
                    .arrow {
                      position: absolute;
                      left: -8px;
                      top: 33px;
                      width: 14px;
                      height: 14px;
                      margin: 0 !important;
                      background-color: #fff;
                      border-left: 1px solid #dce4e6;
                      border-top: 1px solid #dce4e6;
                    }
                    .chat-main {
                      & > dt {
                        width: 116px;
                        height: 116px;
                        float: right;
                        border: 1px solid #eee;
                        margin-top: 6px;
                        padding: 0;
                        img {
                          width: 116px;
                          height: 116px;
                        }
                      }
                      dd {
                        min-height: auto;
                        clear: none;
                        padding: 0;
                        .chat-head {
                          dt {
                            width: 62px;
                            height: auto;
                            float: left;
                            margin: 0 14px 10px 0;
                            background: 0 0;
                            border: 0;
                            padding: 0;
                            .hr-pic {
                              width: 62px;
                              height: 62px;
                              border-radius: 50%;
                              overflow: hidden;
                              font-size: 22px;
                              font-weight: 700;
                              line-height: 62px;
                              text-align: center;
                            }
                          }
                          dd {
                            min-height: 64px;
                            color: #333;
                            line-height: 22px;
                            .hr-name {
                              margin: 0;
                              font-size: 18px;
                              line-height: 30px;
                              color: #333;
                              overflow: hidden;
                              text-overflow: ellipsis;
                              white-space: nowrap;
                              word-wrap: normal;
                            }
                            .hr-position {
                              font-size: 14px;
                              line-height: 24px;
                              color: #666;
                              overflow: hidden;
                              text-overflow: ellipsis;
                              white-space: nowrap;
                              word-wrap: normal;
                            }
                          }
                          .tip-text {
                            clear: left;
                            font-size: 14px;
                          }
                        }
                      }
                    }
                  }
                  .hr {
                    display: block;
                  }
                }
              }
              .salary {
                // margin-left: 80px;
                float: right;
                font-size: 16px;
                color: #fa6041;
              }
            }
            .pli-midle {
              position: absolute;
              top: 30px;
              left: 0px;
              width: 150px;
              height: 30px;
              line-height: 30px;
              color: #777;
              display: inline-block;
              float: left;
              .benke {
                &::before {
                  content: ' / ';
                }
              }
            }
            .pli-foot {
              position: absolute;
              top: 60px;
              left: 0;
              margin-top: 5px;
              .pli-btm {
                margin-right: 20px;
                height: 30px;
                line-height: 30px;
                overflow: hidden;
                span {
                  display: inline-block;
                  width: 61px;
                  height: 26px;
                  padding: 0 5px;
                  font-size: 12px;
                  line-height: 26px;
                  color: #999;
                  border: 1px solid #f0f0f0;
                  border-radius: 3px;
                  text-align: center;
                }
                .wordCut {
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  word-wrap: normal;
                }
              }
            }
          }
          .pli-gongsi {
            .xuxian {
              position: absolute;
              top: 120px;
              width: 340px;
              left: 0;
              margin: 18px 10px 0 20px;
              padding-top: 18px;
              border-top: 1px dashed #e0e0e0;
            }
            a {
              img {
                position: absolute;
                bottom: 10px;
                width: 40px;
                height: 40px;
                vertical-align: top;
                display: inline-block;
              }
            }
            .bottom-right {
              margin-left: 54px;
              position: absolute;
              top: 150px;
              .company_name {
                margin: 0;
                font-size: 14px;
                color: #333;
                display: flex;
                align-items: center;
              }
              .industry {
                height: 20px;
                line-height: 20px;
                color: #999;
                margin: 0;
                font-size: 14px;
                .qianzhui {
                  &::before {
                    content: ' / ';
                  }
                }
              }
            }
          }
        }
      }
      .list-more {
        position: absolute;
        bottom: 0;
        left: 406px;
        display: block;
        width: 387px;
        height: 42px;
        line-height: 42px;
        margin: 16px auto 0;
        background: #fff;
        border: 1px solid #00b38a;
        font-size: 16px;
        color: #00b38a;
        text-align: center;
      }
    }
    /* 公司列表 star */

    .companyList-container {
      padding-top: 4px;
    }

    .companyList-container ul {
      width: 1216px;
      zoom: 1;
    }

    .companyList-container ul li {
      box-sizing: border-box;
      float: left;
      width: 288px;
      height: 270px;
      margin-top: 16px;
      margin-right: 16px;
      border: 1px solid #eee;
    }
    .job-list-wrapper .hot-tips .list-more2 {
      left: 406px;
      display: block;
      width: 387px;
      height: 42px;
      line-height: 42px;
      margin: 16px auto 0;
      background: #fff;
      border: 1px solid #00b38a;
      font-size: 16px;
      color: #00b38a;
      text-align: center;
      margin-top: 20px;
    }

    .companyList-container ul li:hover {
      box-shadow: 0 0 10px 0 rgba(56, 81, 76, 0.12);
    }

    /* 企业LOGO 上 */

    .companyList-top {
      margin: 0 13px;
      padding: 20px 0 14px;
      text-align: center;
      border-bottom: 1px dashed #e0e0e0;
      position: relative;
    }

    .companyList-top p {
      line-height: 22px;
    }

    .companyList-top p img {
      width: 80px;
      height: 80px;
    }

    .companyList-top h3 {
      margin-top: 13px;
      font-size: 16px;
      color: #555;
      font-weight: normal;
    }

    .companyList-top-one {
      margin: 3px auto 0;
      color: #999;
      font-size: 14px;
    }

    .companyList-top-two {
      color: #333;
      max-width: 168px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: 5px auto 0;
      color: #555;
    }

    .companyList-bottom a {
      width: 90px;
      position: relative;
      display: block;
      margin-top: 17px;
      text-align: center;
      float: left;
    }

    .companyList-green {
      color: #00b38a;
    }

    /* 线 */

    .companyList-line {
      position: relative;
    }

    .companyList-line::after {
      position: absolute;
      top: -10px;
      right: 0;
      content: '';
      height: 30px;
      width: 1px;
      background: #ededed;
    }

    /* 公司列表 end */
  }
}

.list-more2 {
  position: absolute;
  bottom: -132px;
  left: 406px;
  display: block;
  width: 387px;
  height: 42px;
  line-height: 42px;
  margin: 16px auto 0;
  background: #fff;
  border: 1px solid #00b38a;
  font-size: 16px;
  color: #00b38a;
  text-align: center;
  margin-top: 20px;
}
</style>