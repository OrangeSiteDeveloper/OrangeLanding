// const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  // nginx已经开启gzip压缩
  // configureWebpack: {
  //   plugins: [
  //     new CompressionPlugin({
  //       filename: "[path].gz",
  //压缩算法
  //       algorithm: "gzip",
  //匹配文件
  //       test: /\.js$|\.css$|\.html$/,
  //压缩超过此大小的文件,以字节为单位
  //       threshold: 10240,
  //       minRatio: 0.8,
  //删除原始文件只保留压缩后的文件
  //       deleteOriginalAssets: false,
  //     }),
  //   ],
  // },
  transpileDependencies: ["vuetify"],
  productionSourceMap: false,
};
