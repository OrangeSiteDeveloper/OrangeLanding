<template>
  <v-app>
    <v-main>
      <Navigation-Bar></Navigation-Bar>

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
    name: "app",
  }),
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
