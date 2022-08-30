<template>
  <div class="gradient" :style="type">
    <p class="gradient-word">{{ word }}</p>
    <p class="gradient-mini-word">sessions</p>
    <br />
    <n-button :color="color" dashed>learn more</n-button>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";

const props = defineProps(["value"]);
const { type, word, color } = props.value;
</script>

<style>
.gradient {
  border-radius: 10px;
  padding-top: 1vw;
  padding-bottom: 1vw;
  padding-left: 1vw;
}
.gradient-word {
  font-size: 1vw;
}
.gradient-mini-word {
  font-size: 0.8vw;
}
.n-button {
  font-size: 0.6vw;
  line-height: 4em;
}
</style>
