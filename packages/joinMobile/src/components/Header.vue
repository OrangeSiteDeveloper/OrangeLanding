<template>
  <div class="bg">
    <img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/m-2.png" />
    <div class="router-container">
      <router-link to="/">主页 </router-link>
      <router-link to="/about">关于我们 </router-link>
      <router-link to="/registration">报名页面 </router-link>
      <router-link to="/status">状态查询 </router-link>
    </div>
  </div>
</template>

<style scoped>
.bg {
  position: relative;
}

.router-container {
  position: absolute;
  bottom: 1em;
}

a {
  text-decoration: none;
  font-size: 5vw;
  color: black;
  margin-left: 1em;
  margin-left: 1em;
}
</style>
