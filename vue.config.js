module.exports = {
  lintOnSave: false, // 干掉eslint语法检查
  devServer: {
    proxy: {
<<<<<<< HEAD
      "/": {
        target: "http://192.168.16.52:7777", // 服务器地址
=======
      '/api': {
        target: 'http://192.168.16.52:7777', // 服务器地址
>>>>>>> dff1b239c49eefbd540c6e2fd68c034a4aa47bfc
        changeOrigin: true, // 是否跨域
      },
    },
  },
};
