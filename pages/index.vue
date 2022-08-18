<template>
  <div>
    <n-space>
      <n-button strong secondary> Default </n-button>
      <n-button strong secondary type="tertiary"> Tertiary </n-button>
      <n-button strong secondary type="primary"> Primary </n-button>
      <n-button strong secondary type="info"> Info </n-button>
      <n-button strong secondary type="success"> Success </n-button>
      <n-button strong secondary type="warning"> Warning </n-button>
      <n-button strong secondary type="error"> Error </n-button>
      <n-button strong secondary round> Default </n-button>
      <n-button strong secondary round type="primary"> Primary </n-button>
      <n-button strong secondary round type="info"> Info </n-button>
      <n-button strong secondary round type="success"> Success </n-button>
      <n-button strong secondary round type="warning"> Warning </n-button>
      <n-button strong secondary round type="error"> Error </n-button>
      <n-button strong secondary circle>
        <template #icon>
          <n-icon><cash /></n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="primary">
        <template #icon>
          <n-icon><cash /></n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="info">
        <template #icon>
          <n-icon><cash /></n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="success">
        <template #icon>
          <n-icon><cash /></n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="warning">
        <template #icon>
          <n-icon><cash /></n-icon>
        </template>
      </n-button>
      <n-button strong secondary circle type="error">
        <template #icon>
          <n-icon><cash /></n-icon>
        </template>
      </n-button>
    </n-space>
  </div>
</template>

<script setup>
import { NButton, NSpace, NIcon } from "naive-ui";
import { Cash } from "@vicons/ionicons5";
</script>

<style scoped>
.overlays-box {
  width: 300px;
  display: none;
}
</style>
