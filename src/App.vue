<template>
  <div>
    <Header />
    <Company />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Company from './pages/Company/Company'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Company
  }
}
</script>

<style>

</style>
