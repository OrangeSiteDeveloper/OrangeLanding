<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 楷体;
}
img {
  width: 100%;
}
</style>
