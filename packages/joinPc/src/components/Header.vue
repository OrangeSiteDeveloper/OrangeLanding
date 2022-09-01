<template>
  <div class="bg">
    <div class="router-container">
      <router-link to="/">
        <n-button quaternary round> 主页 </n-button>
      </router-link>
      <router-link to="/about">
        <n-button quaternary round>关于我们</n-button>
      </router-link>
      <router-link to="/registration">
        <n-button quaternary round>报名页面</n-button>
      </router-link>
      <router-link to="/status">
        <n-button quaternary round>状态查询</n-button>
      </router-link>
    </div>
  </div>
  <br />
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 1.2vw;
  margin-right: 30px;
  color: black;
}

.bg {
  background: url("https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/header.webp");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  height: 10vw;
}

p {
  font-size: 1.3vw;
}

.n-button {
  font-size: 1.3vw;
}

.router-container {
  position: absolute;
  bottom: 1vw;
  left: 3vw;
}
</style>
