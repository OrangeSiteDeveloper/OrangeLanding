<template>
  <div class="gradient" :style="type">
    <p class="gradient-word">{{ word }}</p>
    <p class="gradient-mini-word">sessions</p>
    <br />
    <n-button :color="color" dashed @click="openUrl(link)">learn more</n-button>
  </div>
</template>

<script setup lang="ts">
  import { NButton } from "naive-ui";
  
  const props = defineProps(["value"]);
  const { type, word, color, link } = props.value;
  
  function openUrl(url: string) {
    window.open(url, "_self");
    //_blank : 在新窗口打开
    //_self : 在当前窗口打开
  
    //window.location.href = url : 当前页面重定向
  
  }
</script>

<style scoped>
.gradient {
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}
</style>
