<template>
  <div>
    <!-- 导航栏 -->
    <v-toolbar
      dark
      prominent
      class="back"
      src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210822202535.png?x-oss-process=image/format,jpg/interlace,1"
      style="background-position: center 0%"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Orange Studio </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!-- 侧边抽屉 -->
    <v-navigation-drawer
      app
      bottom
      v-model="drawer"
      temporary
      src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/ING_1901.png?x-oss-process=image/format,jpg/interlace,1"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/6.6.png?x-oss-process=image/format,jpg/interlace,1"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title style="color: white">Orange Studio</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          @click="drawer = false"
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon style="color: white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color: white">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavigationBarHead",
  data: () => ({
    drawer: false,
    items: [
      { title: "主页", icon: "mdi-view-dashboard", link: "/" },
      { title: "关于橙果", icon: "mdi-forum", link: "/about" },
      { title: "我要报名", icon: "mdi-hand-back-right-outline", link: "/registration" },
      { title: "查看录取进度", icon: "mdi-loading", link: "/status" },
    ],
  }),
  methods: {},
  created() {},
};
</script>

<style scoped></style>
