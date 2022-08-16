<template>
  <div>
    {{ a }}
  </div>
</template>

<script setup>
import { ref } from "vue";

let a = ref(1);
</script>

<style scoped>
.overlays-box {
  width: 300px;
  display: none;
}
</style>
