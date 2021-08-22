<template>
  <div>
    <!-- 导航栏 -->
    <v-toolbar
      dark
      prominent
      class="back"
      src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210822202535.png"
      style="background-position: center 0%"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Orange Studio</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- 侧边抽屉 -->
    <v-navigation-drawer
      bottom
      v-model="drawer"
      absolute
      temporary
      src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/ING_1901.png"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Orange Part</v-list-item-title>
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
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      { title: "我要报名", icon: "mdi-hand", link: "/registration" },
      { title: "查看录取进度", icon: "mdi-loading", link: "/status" },
    ],
  }),
  methods: {},
};
</script>

<style scoped>
</style>
