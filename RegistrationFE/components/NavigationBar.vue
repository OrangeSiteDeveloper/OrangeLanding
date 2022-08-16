<template>
  <div class="box">
    <NuxtLink v-for="item in items" :to="item.link">{{ item.title }}--</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "NavigationBarHead",
  data: () => ({
    items: [
      { title: "主页", icon: "mdi-view-dashboard", link: "/home" },
      { title: "关于橙果", icon: "mdi-forum", link: "/about" },
      { title: "我要报名", icon: "mdi-hand-back-right-outline", link: "/registration" },
      { title: "查看录取进度", icon: "mdi-loading", link: "/status" },
    ],
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
}

.box {
  border: 1px solid black;
}
</style>
