<template>
  <div style="width: 95%; margin: 0 auto">
    <n-card>
      <div class="cur-status">
        <n-button strong secondary round @click="showModal = true">
          点击这里查询状态
        </n-button>
        <template v-for="item in step">
          <template v-if="item.status === 1">
            <p>{{ item.curDescribe }}</p>
            <p>{{ item.count }}</p>
            <h1>{{ item.title }}</h1>
            <template v-if="item.btn">
              <n-button v-for="btn in item.btn" :disabled="btn.disable" dashed>
                {{ btn.describe }}
              </n-button>
            </template>
            <p>{{ item.statusDescribe }}</p>
          </template>
        </template>
      </div>
      <div class="cur-status">
        <n-progress type="circle" :percentage="50" :offset-degree="120" color="black" rail-color="rgb(206 210 214)" />
      </div>
    </n-card>

    <n-card v-for="(item, index) in stepWord">
      <p v-if="index === 0">这里可以查看面试过程！</p>
      <n-progress type="line" :percentage="item.progess" :indicator-placement="'inside'" :color="item.color"
        :rail-color="item.railColor" processing />
      <br />
      <h2>{{ item.title }}</h2>
      <p v-for="word in item.words">{{ word }}</p>
      <br />
    </n-card>
  </div>
  <n-modal v-model:show="showModal">
    <n-card style="width: 600px" title="面试状态查询" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <template #header-extra> 噢！ </template>
      假装是个查询input
      <template #footer>
        <n-button strong secondary round @click="showModal = false">好了，我知道了</n-button>
      </template>
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NCard, NProgress, useThemeVars, NButton, NModal } from "naive-ui";

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
    progess: 25,
    color: "rgb(32,128,240)",
    railColor: "rgb(210,230,252)",
  },
  {
    title: "初试通过/未通过",
    words: [
      "来了来了了，“无情的“的第一次面试~",
      "初试考察的是“第一印象”，大家通过自我介绍来向面试官展示自己个性和优势。可以说专业知识，也可以说人格修养、兴趣爱好等等。内容不限。面试时长为3min/人。",
    ],
    progess: 50,
    color: "rgb(24,160,88)",
    railColor: "rgb(209,236,222)",
  },
  {
    title: "复试通过/未通过",
    words: [
      "经过”无情的“第一次面试同学将迎来一次长跑——第二次面试。",
      "面试为期一周左右，大家会收到由小组发出的学习任务，经行为期一周的自学之后会对大家学习内容进行一次考核以检验大家的学习能力。",
    ],
    progess: 75,
    color: "rgb(208,48,80)",
    railColor: "rgb(246,214,220)",
  },
  {
    title: "确认加入",
    words: [
      "到此，大家已经通过了全部面试，你的学识和能力已经得到了我们的认可，满足加入橙果工作室的全部要求。",
      "在剩余时间内随时可以选择加入，当然也可以选择拒绝。It's up to you.敬候佳音~",
    ],
    progess: 100,
    color: "rgb(240,160,32)",
    railColor: "rgb(240,160,32)",
  },
]);
</script>

<style scoped>
.n-card {
  box-shadow: 0px 0px 42px #d6cfcf;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 10px;
}

.cur-status {
  width: 50%;
  display: inline-block;
}
</style>
