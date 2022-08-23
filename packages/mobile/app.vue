<template>
  <div>
    <NuxtPage />
    {{ resDataSuccess }}
    {{ resData }}
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
