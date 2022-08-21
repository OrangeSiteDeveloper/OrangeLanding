<template>
  <div>
    <navigation-bar></navigation-bar>
    <NuxtPage />
    {{ resDataSuccess }}
    {{ resData }}
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
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
