<template>
  <n-grid :cols="8" :y-gap="12">
    <!-- 进度查询 -->
    <n-gi :offset="1" :span="6">
      <n-card size="huge" hoverable>
        <n-button strong secondary round @click="showModal = true">
          <p>点击查询面试进展</p>
        </n-button>
        <n-grid :cols="4" :x-gap="12">
          <n-gi v-for="item in step" :span="1">
            <div :class="{ disable: item.disable }">
              <p>{{ item.curDescribe }}</p>
              <p>{{ item.count }}</p>
              <h1>{{ item.title }}</h1>
              <v-template v-if="item.btn">
                <n-button v-for="btn in item.btn" :disabled="btn.disable" dashed>
                  {{ btn.describe }}
                </n-button>
              </v-template>
              <p>{{ item.statusDescribe }}</p>
            </div>
          </n-gi>
        </n-grid>
      </n-card>
    </n-gi>
    <!-- 纳新流程介绍 -->
    <n-gi :offset="1" :span="6">
      <div class="bg" style="position: relative">
        <p>这里让大家熟悉纳新流程</p>
        <div v-for="item in stepWord">
          <br />
          <h1>{{ item.title }}</h1>
          <p v-for="word in item.words">{{ word }}</p>
          <br />
        </div>
      </div>
      <br />
    </n-gi>
  </n-grid>
  <!-- 查询进度模态框 -->
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="面试状态查询"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra> 噢！ </template>
      假装是个查询input
      <template #footer>
        <n-button strong secondary round @click="showModal = false"
          >好了，我知道了</n-button
        >
      </template>
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NGrid, NGi, NCard, NButton, NModal } from "naive-ui";

let showModal = ref(false);

const step = ref([
  {
    status: 0, // 0指已结束
    curDescribe: "已结束",
    count: "第一步",
    title: "hello,小橙子 ,恭喜你报名成功",
    statusDescribe: "请关注录取进程",
    disable: true,
  },
  {
    status: 1, // 1指正在进行
    curDescribe: "你到了这一步",
    count: "第二步",
    title: "初试进行",
    statusDescribe: "这里写状态 通过/淘汰",
    disable: false,
  },
  {
    status: 2, // 2指未开始
    curDescribe: "未开始",
    count: "第三步",
    title: "复试进行",
    statusDescribe: "这里写状态 通过/淘汰",
    disable: true,
  },
  {
    status: 2,
    curDescribe: "未开始",
    count: "第四步",
    title: "确认是否加入",
    statusDescribe: "欢迎你的到来",
    btn: [
      {
        disable: true,
        describe: "加入",
      },
      {
        disable: true,
        describe: "不加入",
      },
    ],
    disable: true,
  },
]);

const stepWord = ref([
  {
    title: "报名成功/未报名",
    words: [
      "一只满怀好奇的小橙子在“橙果工作室”的门口看了看。报名呢？还是不报名呢？",
      "emmm。。。报名的话会找到一群志同道合的人，一起完成心中的梦想，会收获温馨、热爱、友谊……好多好多~冲鸭!",
    ],
  },
  {
    title: "初试通过/未通过",
    words: [
      "来了来了了，“无情的“的第一次面试~",
      "初试考察的是“第一印象”，大家通过自我介绍来向面试官展示自己个性和优势。可以说专业知识，也可以说人格修养、兴趣爱好等等。内容不限。面试时长为3min/人。",
    ],
  },
  {
    title: "复试通过/未通过",
    words: [
      "经过”无情的“第一次面试同学将迎来一次长跑——第二次面试。",
      "面试为期一周左右，大家会收到由小组发出的学习任务，经行为期一周的自学之后会对大家学习内容进行一次考核以检验大家的学习能力。",
    ],
  },
  {
    title: "确认加入",
    words: [
      "到此，大家已经通过了全部面试，你的学识和能力已经得到了我们的认可，满足加入橙果工作室的全部要求。",
      "在剩余时间内随时可以选择加入，当然也可以选择拒绝。It's up to you.敬候佳音~",
    ],
  },
]);
</script>

<style scoped>
h1 {
  font-size: 1.4vw;
}
p {
  font-size: 1vw;
}
.bg {
  border: 1px solid rgb(239, 239, 245);
  border-radius: 8px;
  background: url("https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/B1%20(%E5%A4%8D%E5%88%B6).webp");
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 1.3vw 0 1vw 2vw;
}
.bg:hover {
  box-shadow: 0px 0px 12px #b0afaf87;
}

.disable {
  color: rgb(199 199 199);
}
</style>
