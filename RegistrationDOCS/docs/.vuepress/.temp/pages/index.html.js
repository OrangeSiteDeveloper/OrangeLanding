export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "主页",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "主页",
    "description": "Orange Studio",
    "home": true,
    "heroImage": "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/DZJFMt.png",
    "heroText": "主页",
    "tagline": "Homepage",
    "actionText": null,
    "actionLink": "/tech/interview/",
    "features": [
      {
        "title": "简洁至上",
        "details": "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"
      },
      {
        "title": "Vue驱动",
        "details": "享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。"
      },
      {
        "title": "高性能",
        "details": "VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。"
      }
    ],
    "footer": "Orange Studio纳新系统开发文档"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1629543295000,
    "contributors": [
      {
        "name": "zhangzhibang0309",
        "email": "295854713@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
