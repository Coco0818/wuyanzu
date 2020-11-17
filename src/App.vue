<template>
  <div>
    <!-- <Register /> -->
    <!-- <Login /> -->
    <Detail />
  </div>
</template>
<script>
// 引入注册组件
// import Register from "./pages/Register"
// 引入登录组件
// import Login from "./pages/Login";
// 引入详情页组件
import Detail from "./pages/Detail"

export default {
  name: "App",
  components: {
    // Login,
    // Register,
    Detail
  },
};
</script>
<style rel="stylesheet" scoped></style>
