<template>
  <div>
    <Header v-if="isShow" />
    <!-- <MyOffer /> -->
    <keep-alive include="MyOffer,Education">
      <router-view />
    </keep-alive>
    <Footer v-if="isShow" />
  </div>
</template>

<script>
import Education from './pages/Education'
import MyOffer from './pages/MyOffer'

export default {
  name: 'App',
  components: {
    Education,
    MyOffer,
  },
  data() {
    return {
      isShow: true,
    }
  },
  watch: {
    $route: 'changeState',
  },
  methods: {
    changeState() {
      if (
        this.$route.path === '/myoffer' ||
        this.$route.path === '/education'
      ) {
        this.isShow = false
      } else {
        this.isShow = true
      }
      // console.log(this.$route.path)
    },
  },
}
</script>
<style scoped>
</style>
