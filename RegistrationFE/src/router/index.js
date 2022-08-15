import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/registration",
      name: "Registration",
      component: () => import("../views/Registration.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/status",
      name: "Status",
      component: () => import("../views/Status.vue"),
    },
  ],
});

export default router;
