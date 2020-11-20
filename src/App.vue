<template>
  <div>
    <JobDetail />
  </div>
</template>
<script>
import JobDetail from "@/pages/JobDetail/Detail";
import axios from "axios";
//引入接口函数
import { reqDetail } from "@/api";
import { reqPositions } from "@/api";
// import {reqCategorys} from '@/api'
// import {reqCompanys} from '@/api'
// import {reqFilters} from '@/api'
export default {
  name: "App",
  components: {
    JobDetail,
  },
  async mounted() {
    this.$store.dispatch("getDetail", "5fb23ef53c41721b2068e7a1");
    this.$store.dispatch("getPositions");
    this.$store.dispatch("getCateGorys");
    this.$sotre.dispatch("getCompanys");
    //  this.$store.dispatch('getCategorys')
    //  this.$store.dispatch('getCompanys')
    //  this.$store.dispatch('getFilters')
  },
};
</script>
<style scoped></style>
