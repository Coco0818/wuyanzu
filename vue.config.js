module.exports = {
  lintOnSave: false, //关闭语法检查
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.16.52:7777", //服务器地址
        changeOrigin: true, //跨域
      },
    },
  },
};
