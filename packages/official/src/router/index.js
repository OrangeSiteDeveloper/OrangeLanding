import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HomePage from "../views/HomePage.vue";
import Join from "../views/Join.vue";
import Success from "../views/Success.vue";
import Failure from "../views/Failure.vue";
import Check from "../views/Check.vue";
import study from "../views/departments/study.vue";
import secretary from "../views/departments/secretary.vue";
import propaganda from "../views/departments/propaganda.vue";
import communication from "../views/departments/communication.vue";
import website from "../views/groups/website.vue";
import bigdata from "../views/groups/bigdata.vue";
import embed from "../views/groups/embed.vue";
import hardware from "../views/groups/hardware.vue";
import programming from "../views/groups/programming.vue";
import MicroCourse from "../views/pages/MicroCourse.vue";
import Gallery from "../views/pages/Gallery.vue";
import GeekOrange from "../views/pages/GeekOrange.vue";
import News from "../views/pages/News.vue";
import Recommend from "../views/pages/Recommend.vue";
import Techs from "../views/pages/Techs.vue";
// 静态文件直接部署到github无法用懒加载 所以就出现了上面一堆
//import  store from '@/store/index'

Vue.use(VueRouter);

//是否开启路由守卫进行登录检测
// var CtrlSwitch = false

const routes = [
  {
    path: "/",
    name: "",
    component: Home,
    children: [
      {
        path: "/",
        name: "homepage",
        component: HomePage,
        meta: {
          title: "橙果工作室",
        },
      },
      {
        path: "/join-us",
        name: "join-us",
        component: Join,
        meta: {
          title: "加入橙果工作室",
        },
      },
      {
        path: "/success",
        name: "success",
        component: Success,
        meta: {
          title: "成功提交报名表",
        },
      },
      {
        path: "/failure",
        name: "failure",
        component: Failure,
        meta: {
          title: "啊这，出了点问题",
        },
      },
      {
        path: "/check",
        name: "check",
        component: Check,
        meta: {
          title: "查询报名状态",
        },
      },
      {
        path: "/study",
        name: "study",
        component: study,
        meta: {
          title: "橙果工作室学习部",
        },
      },
      {
        path: "/secretary",
        name: "secretary",
        component: secretary,
        meta: {
          title: "橙果工作室秘书部",
        },
      },
      {
        path: "/propaganda",
        name: "propaganda",
        component: propaganda,
        meta: {
          title: "橙果工作室宣传部",
        },
      },
      {
        path: "/communication",
        name: "communication",
        component: communication,
        meta: {
          title: "橙果工作室外联部",
        },
      },
      {
        path: "/website",
        name: "website",
        component: website,
        meta: {
          title: "橙果工作室网站组",
        },
      },
      {
        path: "/bigdata",
        name: "bigdata",
        component: bigdata,
        meta: {
          title: "橙果工作室大数据组",
        },
      },
      {
        path: "/embed",
        name: "embed",
        component: embed,
        meta: {
          title: "橙果工作室嵌入式组",
        },
      },
      {
        path: "/hardware",
        name: "hardware",
        component: hardware,
        meta: {
          title: "橙果工作室硬件组",
        },
      },
      {
        path: "/programming",
        name: "programming",
        component: programming,
        meta: {
          title: "橙果工作室程序设计组",
        },
      },
    //   {
    //     path: "/callnum102",
    //     name: "callnum102",
    //     component: () => import("@/views/CallNum102.vue"),
    //     meta: {
    //       title: "1教JT102面试",
    //     },
    //   },
    //   {
    //     path: "/callnum104",
    //     name: "callnum104",
    //     component: () => import("@/views/CallNum104.vue"),
    //     meta: {
    //       title: "1教JT104面试",
    //     },
    //   },
      {
        path: "/microcourse",
        name: "microcourse",
        component: MicroCourse,
        meta: {
          title: "橙果微课",
        },
      },
      {
        path: "/gallery",
        name: "gallery",
        component: Gallery,
        meta: {
          title: "活动剪影",
        },
      },
      {
        path: "/geekorange",
        name: "geekorange",
        component: GeekOrange,
        meta: {
          title: "极橙大后台",
        },
      },
      {
        path: "/news",
        name: "news",
        component: News,
        meta: {
          title: "橙果新闻",
        },
      },
      {
        path: "/recommend",
        name: "recommend",
        component: Recommend,
        meta: {
          title: "选购推荐",
        },
      },
      {
        path: "/techs",
        name: "techs",
        component: Techs,
        meta: {
          title: "技术分享",
        },
      },
    ],
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('@/views/Login.vue')
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
