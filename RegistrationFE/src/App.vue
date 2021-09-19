<template>
  <v-app>
    <v-main>
      <Navigation-Bar></Navigation-Bar>
      <!-- overlays -->
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2"> Privacy Policy </v-card-title>

            <v-card-text>
              欢迎来到橙果工作室纳新系统,进行报名之前请先扫描二维码加入我们的官方qq群.
              <v-img
                style="width: 50%"
                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%A9%99%E6%9E%9C%E5%B7%A5%E4%BD%9C%E5%AE%A421%E7%BA%A7%E6%96%B0%E7%94%9F%E4%BA%A4%E6%B5%81%E7%BE%A4%E7%BE%A4%E8%81%8A%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
              >
              </v-img>
              下面介绍该系统使用方法,本页面是首页,提供给同学们进一步了解我们工作室.
              <br />若想报名,请点击页面左上角≡按钮,点击"我要报名"进行报名,点击"查询报名进度",查看自己的面试状态.
            </v-card-text>
            <!-- radio -->
            <v-container class="px-0" fluid>
              <v-switch v-model="switch1" label="下次不再提示"></v-switch>
            </v-container>
            <!--  -->
            <v-divider></v-divider>
            <!--  -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="closeDialog"> I accept </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <router-view />

      <Footer> </Footer>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "./components/app/NavigationBar";
import Footer from "./components/app/Footer";

export default {
  name: "App",
  // 注册组件
  components: {
    NavigationBar,
    Footer,
  },
  data: () => ({
    name: "aaa",
    screenWidth: document.body.clientWidth,
    dialog: true,
    switch1: false,
  }),
  methods: {
    closeDialog() {
      this.dialog = false;
      localStorage.setItem("flag", this.switch1);
      console.log(localStorage.getItem("flag"));
    },
  },
  created() {
    if (localStorage.getItem("flag") == "true") {
      console.log(localStorage.getItem("flag"));
      this.dialog = false;
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0px 3px 4px -2px rgb(0 0 0 / 20%), 0px 12px 31px 0px rgb(0 0 0 / 14%),
    0px 1px 22px 0px rgb(0 0 0 / 12%) !important;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  background-color: white;
}
</style>
