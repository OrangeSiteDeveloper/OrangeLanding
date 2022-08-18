<template>
  <div>
    <navigation-bar></navigation-bar>
    <NuxtPage />
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
const { data: resDataSuccess } = await useFetch("/api/test", {
  method: "post",
  body: {
    name: "zzb",
    age: "19",
    text: "大家好",
  },
});
const { data: resData } = await useFetch("/api/test", {
  method: "get",
});
</script>
