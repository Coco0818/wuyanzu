module.exports = {
  lintOnSave: false, // 关闭eslint语法检查
  devServer: {
    proxy: {
      '/': {
        target: 'http://192.168.16.52:8080', // 服务器地址
        changeOrigin: true, // 是否跨域
      },
    },
  },
}
