export const data = {
  "key": "v-43ddb430",
  "path": "/guide/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/foo.html",
  "title": "fe",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "fe",
    "description": "hello fe"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/前端开发/foo.md",
  "git": {}
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
