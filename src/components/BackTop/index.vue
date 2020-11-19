<template>
  <div>
    <!-- 回到顶部 -->
    <div class="backtop" v-if="btnFlag" @click="backTop"></div>
  </div>
</template>
<script>
export default {
  name: 'BackTop',
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },

    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 10)
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 1000 / 60)
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 30) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    },
  },
  data() {
    return {
      btnFlag: true,
    }
  },
}
</script>
<style lang='less' rel='stylesheet/less' scoped>
/* 回到顶部 */
.backtop {
  display: block;
  background: url('./images/回到顶部.png') left top no-repeat;
  width: 28px;
  height: 46px;
  position: fixed;
  left: 50%;
  bottom: 88px;
  margin-left: 548px;
  cursor: pointer;
  z-index: 1002;
  margin-left: 631px;
}

.backtop:hover {
  background-position: right top !important;
}
</style>