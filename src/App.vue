<template>
  <div>
    <!-- <Register /> -->
    <Login />
  </div>
</template>
<script>
// 引入注册组件
// import Register from "./pages/Register"
// 引入登录组件
import Login from "./pages/Login";
export default {
  name: "APP",
  components: {
    Login,
    // Register,
  },
};
</script>
<style rel="stylesheet" scoped></style>
