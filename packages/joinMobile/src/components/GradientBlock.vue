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

<style scoped>
.gradient {
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}
</style>
