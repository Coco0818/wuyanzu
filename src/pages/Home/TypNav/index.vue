<template>
  <!-- 三级分类 -->
  <div class="container-list">
    <div class="sidebar" @mouseleave="currentIndex = -1">
      <div class="main-nav">
        <div
          class="menu-box"
          v-for="(category1, index) in categoryList"
          :key="category1._id"
        >
          <div class="menu-main" @mouseenter="showFirst(index)">
            <div class="category-list">
              <h2>{{ category1.category1Title }}</h2>
              <!-- 显示部分三级分类 -->
              <a
                href="##"
                v-for="(v, index) in category1.categorymini"
                :key="index"
              >
                <h3>{{ v }}</h3>
              </a>
              <i class="arrow"></i>
            </div>
          </div>
          <!-- active控制显示隐藏 -->
          <div
            class="menu-sub"
            :class="{ active: currentIndex === index }"
            @mouseleave="hideFirst"
          >
            <dl
              v-for="category2 in category1.category2"
              :key="category2.category2Id"
            >
              <dt>
                <span>{{ category2.category2Title }}</span>
              </dt>
              <dd>
                <a
                  href="##"
                  v-for="category3 in category2.category3"
                  :key="category3.category3Id"
                >
                  <h3>{{ category3.title }}</h3>
                </a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reqCateGorys } from '@/api'
export default {
  name: 'TypNav',
  data() {
    return {
      isShow: true, // 三级列表显示隐藏
      categoryList: [], // 三级分类
      currentIndex: -1, // 显示隐藏三级标题
      category3: [], // 部分三级分类
    }
  },
  async mounted() {
    //三级分类
    const result = await reqCateGorys()
    // console.log(result.data)
    this.categoryList = result.data
  },
  methods: {
    showFirst(index) {
      this.isShow = true
      this.currentIndex = index
    },
    hideFirst() {
      this.currentIndex = -1
    },
  },
}
</script>
<style lang='less' scoped>
.container-list {
  // clear: both;

  .sidebar {
    float: left;
    position: relative;
    width: 321px;
    margin-left: -15px;
    margin-top: -24px;
    .main-nav {
      margin-top: 7px;
      .menu-box {
        position: relative;
        .menu-main {
          position: relative;
          padding: 13px 0 14px;
          .category-list {
            position: relative;
            height: 20px;
            line-height: 20px;
            overflow: hidden;
            border-right: 0;

            h2 {
              display: inline-block;
              padding-left: 15px;
              margin: 0;
              font-size: 18px;
              font-weight: 500;
            }
            a {
              margin: 0 5px 5px 0;
              padding: 0 8px;
              white-space: nowrap;
              h3 {
                margin: 0;
                display: inline;
                font-size: 14px;
              }
            }
            i {
              position: absolute;
              right: 0;
              top: 6px;
              width: 6px;
              height: 11px;
              margin-right: 8px;
              background: url('./images/right.png') 0 0 no-repeat;
            }
          }
        }
        .menu-sub {
          display: none;
          position: absolute;
          left: 321px;
          top: 0;
          width: 600px;
          padding: 16px 10px 0 12px;
          z-index: 10;
          background: #fff;
          box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.09);
          border-radius: 2px;
          border-top-left-radius: 0;

          dl {
            margin: 0 0 17px;
            dt {
              position: relative;
              width: 70px;
              margin: 0;
              padding-left: 10px;
              font-size: 14px;
              line-height: 20px;
              margin-bottom: 6px;
              span {
                position: relative;
                display: inline-block;
                padding: 0;
                color: #333;
              }
            }
            dd {
              color: #555;
              font-size: 0;
              overflow: hidden;
              a {
                display: inline-block;
                position: relative;
                margin-left: -1px;
                padding: 0 11px;
                font-size: 14px;
                line-height: 28px;
                color: #777;
                white-space: nowrap;
                h3 {
                  margin: 0;
                  font-size: 14px;
                }
              }
            }
          }
        }
        .active {
          display: block;
        }
      }
    }
  }
}
</style>