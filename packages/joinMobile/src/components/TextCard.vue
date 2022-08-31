<template>
  <h1 class="title-word">{{ title }}</h1>
  <p class="mini-word">{{ mini }}</p>
  <p class="card-word" v-for="item in arr">{{ item }}</p>
  <br />
  <n-button :color="btnColor" v-if="!!btnText" dashed>{{ btnText }}</n-button>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";

const props = defineProps(["value"]);

const { title, mini, btnText, btnColor, arr } = props.value;
</script>

<style scoped></style>
