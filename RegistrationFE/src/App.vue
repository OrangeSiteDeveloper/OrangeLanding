<template>
  <v-app>
    <v-main>
      <navigation-bar></navigation-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
  data: () => ({
    name: "aaa",
  }),
  methods: {},
};
</script>

<style>
</style>
