<template>
  <div>
    <JobDetail />
  </div>
</template>
<script>
import JobDetail from "@/pages/JobDetail/Detail";
import axios from "axios";
//引入接口函数
import {reqPositions} from '@/api'
export default {
  name: "App",
  components: {
    JobDetail,
  },
  mounted(){
   this.$store.dispatch('getPositions')
  }
};
</script>
<style scoped></style>
