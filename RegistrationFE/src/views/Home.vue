<template>
  <div class="home">
    <img class="logo" alt="Orange logo" src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/DZJFMt.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scroped>
  .logo {
    width: 30%;
  }
</style>
