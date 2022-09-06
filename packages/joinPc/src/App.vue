<template>
  <HeaderVue />
  <RouterView />
  <FooterVue />
</template>

<script lang="ts">
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue"; 
export default {
  components: { HeaderVue, FooterVue }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 楷体;
}

.n-card {
  border-radius: 8px;
}
</style>
