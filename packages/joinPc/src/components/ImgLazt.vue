<template>
  <img ref="image" :src="tmp.src" :date-src="tmp.data_src">
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps(["value"]);
let tmp = ref(props.value);



const image = ref()
function throttle(fn: { (): void; (): void; }, delay: number | undefined) {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    const timer = setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
}


onMounted(() => {
  let img = image.value;

  (() => {
    const imageTop = img.getBoundingClientRect().top;
    if (imageTop < window.innerHeight) {
      tmp.value.src = tmp.value.data_src;
    }
    console.log(11)
  })()
  window.addEventListener(
    "scroll",
    throttle(() => {
      const imageTop = img.getBoundingClientRect().top;
      if (imageTop < window.innerHeight) {
        tmp.value.src = tmp.value.data_src;
      }
    }, 1000)
  );
})
</script>