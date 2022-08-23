<template>
  <div>
    <navigation-bar></navigation-bar>
    <NuxtPage />
    <n-button tertiary type="info"> Info </n-button>
    <br />
    {{ resDataSuccess }}
    {{ resData }}
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
const { data: resDataSuccess } = await useFetch("/api/test", {
  method: "post",
  body: {
    name: "zzb",
    age: "19",
    text: new Date(),
  },
});
const { data: resData } = await useFetch("/api/test", {
  method: "get",
});
</script>
