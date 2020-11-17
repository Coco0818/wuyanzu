<template>
  <div class="search-keyword">
    <input
      type="text"
      placeholder="搜索职位、公司或地点"
      class="search-input"
    />
    <button class="search-button">搜索</button>
  </div>
</template>

<script>
export default {
  name: "searchkeyword",
  data() {
    return {};
  },
};
</script>

<style scoped>
.search-keyword {
  display: flex;
}
.search-input {
  display: inline-block;
  padding: 12px 15px;
  width: 791px;
  height: 20px;
  line-height: 20px;
  border-color: #fff;
  border: 1px solid #E8E8E8;
  border-right: 0;
}
.search-input:focus {
  outline: none;
  border: 1px solid #00b38a;
  border-right: none;
}
.search-button {
  background-color: #00b38a;
  color: #fff;
  width: 142px;
  height: 46px;
  padding: 15px 55px;
  border: 0;
}
.search-button:hover {
  background-color: #00a58a;
}
</style>
