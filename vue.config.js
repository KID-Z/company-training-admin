/*
 * @Author: your name
 * @Date: 2021-06-03 10:14:02
 * @LastEditTime: 2021-07-30 18:01:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /company-training-admin/vue.config.js
 */
// 10.1.17.83:8099/
module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://handongvip.frpgz1.idcfengye.com/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    },
  },
};
