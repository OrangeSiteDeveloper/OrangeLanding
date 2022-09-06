<template>
  <n-grid :cols="8">
    <n-gi :offset="1" :span="6">
      <n-card size="small" hoverable>
        <n-grid :x-gap="12" :y-gap="12" :cols="4">
          <!-- 上半部分 -->
          <n-gi :span="2">
            <img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/menbers.webp" />
          </n-gi>
          <n-gi :span="1">
            <div class="text-box">
              <h1>{{ activities.title }}</h1>
              <p v-for="(word, index) in activities.words" :key="index">
                {{ word }}
              </p>
              <br />
            </div>
          </n-gi>
          <n-gi :span="1">
            <img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%8B%BC%E5%90%881-_3_.webp" />
          </n-gi>
          <!-- 下半部分 -->
          <n-gi :span="2">
            <n-grid :x-gap="12" :y-gap="12" :cols="2">
              <n-gi :span="1">
                <div class="text-box">
                  <img
                    src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/A3DB8F73D9F0BC8748CB2BEBB859782F-_1_.webp"
                    alt="" />
                  <h1>{{ comDiagnosis.title }}</h1>
                  <p v-for="(word, index) in comDiagnosis.words" :key="index">
                    {{ word }}
                  </p>
                </div>
              </n-gi>
              <n-gi :span="1">
                <n-grid :y-gap="12" :cols="1">
                  <n-gi :span="1">
                    <img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/tent.webp" />
                  </n-gi>
                  <n-gi :span="1">
                    <img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/conventionhall.webp" />
                  </n-gi>
                </n-grid>
              </n-gi>
            </n-grid>
          </n-gi>
          <n-gi :span="2">
            <div class="text-box">
              <n-gradient-text gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
                <p style="font-size: 1.5vw">历届学长、学姐收获Offer</p>
              </n-gradient-text>
              <img src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/work(1)%20(%E5%A4%8D%E5%88%B6).webp" />
            </div>
          </n-gi>
        </n-grid>
      </n-card>
    </n-gi>
  </n-grid>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NGrid, NGi, NCard, NGradientText } from "naive-ui";

const activities = ref({
  title: "小组活动",
  words: [
    "学习知识、经验分享、头脑风暴为主要组成的小组活动是橙果er日常活动的主要形式。",
    "在这里，学长和学姐会带领大家推开信息世界遮掩许久的门户，走入广阔无垠的互联网世界，开启“程序人生”。同时这里也是沟通交流的平台，无数奇思妙想在这里生发，头脑风暴在这里酝酿。",
    "用知识去创造，用热爱去碰撞下个“风口”，或许就将由你来创造！",
  ],
});

const comDiagnosis = ref({
  title: "电脑义诊",
  words: [
    "电脑服务日是橙果er的传统活动，由两大部分组成。最初呢，主要活动为电脑义诊，旨在帮助师生解决一些不太复杂的的软硬件问题，为广大师生做一些力所能及的事情。",
    "在2020年伊始，我们加入了“信息化科普”活动，作为信息化科普的全新阵地。两大活动同组成了现在的“电脑服务日”活动，从而更好地普及知识，服务师生。",
  ],
});
</script>

<style scoped>
img {
  width: 100%;
}

p {
  font-size: 1vw;
}

.text-box {
  height: 31.1vw;
  overflow-y: auto;
}
</style>
