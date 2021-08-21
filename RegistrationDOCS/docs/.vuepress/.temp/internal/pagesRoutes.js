import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","主页",["/index.html","/README.md"]],
  ["v-23ce238a","/guide/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/%E8%AF%B4%E6%98%8E.html","Orange Studio纳新系统开发文档",["/guide/开发文档/说明.html","/guide/开发文档/说明.md","/guide/%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/%E8%AF%B4%E6%98%8E.md"]],
  ["v-775cc22e","/guide/%E7%BB%B4%E6%8A%A4%E6%96%87%E6%A1%A3/%E8%AF%B4%E6%98%8E.html","Orange Studio纳新系统开发文档",["/guide/维护文档/说明.html","/guide/维护文档/说明.md","/guide/%E7%BB%B4%E6%8A%A4%E6%96%87%E6%A1%A3/%E8%AF%B4%E6%98%8E.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
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
