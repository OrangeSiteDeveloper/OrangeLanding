<template>
  <v-container> 
    <img class="logo" src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/DZJFMt.png" alt="">
     <v-alert
      border="top"
      color="red lighten-2"
      dark
    >
      I'm an alert with a top border and red color
    </v-alert>
    <v-alert
      border="right"
      color="blue-grey"
      dark
    >
      I'm an alert with a right border and blue-grey color
    </v-alert>
    <v-alert
      border="bottom"
      color="pink darken-1"
      dark
    >
      I'm an alert with a bottom border and pink color
    </v-alert>
    <v-alert
      border="left"
      color="indigo"
      dark
    >
      I'm an alert with a border left type info
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped>
  .logo {
    width: 30%;
  }
</style>
