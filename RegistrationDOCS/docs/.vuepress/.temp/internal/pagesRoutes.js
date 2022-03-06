import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"主页"},["/index.html","/README.md"]],
  ["v-b993479c","/guide/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/git%E7%9B%B8%E5%85%B3.html",{"title":"git相关"},["/guide/开发文档/git相关.html","/guide/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/git%E7%9B%B8%E5%85%B3","/guide/开发文档/git相关.md","/guide/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/git%E7%9B%B8%E5%85%B3.md"]],
  ["v-57a25189","/guide/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/%E5%89%8D%E7%AB%AF%E7%9B%B8%E5%85%B3.html",{"title":"前端相关"},["/guide/开发文档/前端相关.html","/guide/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/%E5%89%8D%E7%AB%AF%E7%9B%B8%E5%85%B3","/guide/开发文档/前端相关.md","/guide/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/%E5%89%8D%E7%AB%AF%E7%9B%B8%E5%85%B3.md"]],
  ["v-b2f023a2","/guide/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/%E9%9C%80%E6%B1%82.html",{"title":"需求"},["/guide/开发文档/需求.html","/guide/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/%E9%9C%80%E6%B1%82","/guide/开发文档/需求.md","/guide/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/%E9%9C%80%E6%B1%82.md"]],
  ["v-775cc22e","/guide/%E7%BB%B4%E6%8A%A4%E6%96%87%E6%A1%A3/%E8%AF%B4%E6%98%8E.html",{"title":"Orange Studio纳新系统开发文档"},["/guide/维护文档/说明.html","/guide/%E7%BB%B4%E6%8A%A4%E6%96%87%E6%A1%A3/%E8%AF%B4%E6%98%8E","/guide/维护文档/说明.md","/guide/%E7%BB%B4%E6%8A%A4%E6%96%87%E6%A1%A3/%E8%AF%B4%E6%98%8E.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
