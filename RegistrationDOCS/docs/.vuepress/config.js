module.exports = {
  lang: "zh-CN",
  title: "Orange Studio",
  description: "这是我的第一个 VuePress 站点",
  base: "/",

  themeConfig: {
    logo: "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/DZJFMt.png",
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: "开发文档",
        children: ["/guide/开发文档/说明.md"],
        // 嵌套示例
        // children: [
        //   {
        //     text: "Linux基础",
        //     children: ["/guide/运维&云计算/Linux基础/文件管理.md"],
        //   },
        // ],
      },
      {
        text: "维护文档",
        children: ["/guide/维护文档/说明.md"],
      },
    ],
    smoothScroll: true,
  },
};
