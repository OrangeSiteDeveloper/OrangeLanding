<template>
  <p class="title-word">{{ title }}</p>
  <p class="mini-word">{{ mini }}</p>
  <p class="card-word" v-for="(item, index) in arr" :key="index">{{ item }}</p>
  <br />
  <router-link :to="btnLink" class="routerLink">
    <n-button :color="btnColor" v-if="!!btnText" dashed>{{ btnText }}</n-button>
  </router-link>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";

const props = defineProps(["value"]);

const { title, mini, btnText, btnLink, btnColor, arr } = props.value;
</script>

<style scoped>
.title-word {
  font-size: 2vw;
}
.card-word {
  font-size: 1vw;
  line-height: 2em;
}
.mini-word {
  font-size: 0.8vw;
  line-height: 3em;
  color: grey;
}
.n-button {
  font-size: 0.6vw;
  line-height: 4em;
}

.routerLink {
  text-decoration: none;
}
</style>
