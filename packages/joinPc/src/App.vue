<template>
  <router-link to="/">home --- </router-link>
  <router-link to="/about">about --- </router-link>
  <router-link to="/registration">registration --- </router-link>
  <router-link to="/status">status --- </router-link>

  <RouterView />
</template>

<script setup lang="ts"></script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 楷体;
}
</style>
