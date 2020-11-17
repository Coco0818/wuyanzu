<template>
  <div>
        <!-- 回到顶部 -->
    <BackTop />
    <Header />
      <Company />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// 公司页面
import Company from './pages/Company/Company'
// 回到顶部
import BackTop from './components/BackTop'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Company,
    BackTop
  }
}
</script>

<style>

</style>
