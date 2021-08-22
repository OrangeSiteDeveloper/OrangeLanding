module.exports = {
  lang: "zh-CN",
  title: "Orange Studio",
  description: "橙果工作室网站组开发日志",
  base: "/",

  themeConfig: {
    logo: "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/DZJFMt.png",
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: "开发文档",
        children: [
          "/guide/开发文档/前端相关.md",
          "/guide/开发文档/git相关.md",
          "/guide/开发文档/需求.md",
        ],
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
