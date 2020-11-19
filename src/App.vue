<template>
  <div>
    <Header/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Home from '@/pages/Home'
export default {
  name: 'App',

  components: {
    Home,
  },
}

</script>
<style scoped>
</style>