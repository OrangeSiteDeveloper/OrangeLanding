<template>
  <div class="continer">
    <!-- 纳新状态查询 -->
    <n-card>
      <div class="cur-status">
        <n-button strong secondary round @click="showModal = true">
          点击这里查询状态
        </n-button>
        <template v-for="(item, index) in step" :key="index">
          <template v-if="item.status === '1'">
            <p>{{ item.curDescribe }}</p>
            <p>{{ item.count }}</p>
            <h1>{{ item.title }}</h1>
            <template v-if="item.btn">
              <n-button v-for="(btn, index) in item.btn" :key="index" :disabled="btn.disable" dashed>
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
      <n-modal v-model:show="showModal">
        <n-card style="width: 600px" title="面试状态查询" :bordered="false" size="huge" role="dialog" aria-modal="true">
          <template #header-extra> 噢！ </template>
          假装是个查询input
          <template #footer>
            <n-button strong secondary round @click="showModal = false">好了, 我知道了</n-button>
          </template>
        </n-card>
      </n-modal>
    </n-card>
    <!-- 纳新步骤介绍 -->
    <n-card v-for="(item, index) in stepWord" :key="index">
      <p v-if="index === 0">这里可以查看面试过程！</p>
      <n-progress type="line" :percentage="item.progess" :indicator-placement="'inside'" :color="item.color"
        :rail-color="item.railColor" processing />
      <br />
      <h2>{{ item.title }}</h2>
      <p v-for="(word, index) in item.words" :key="index">{{ word }}</p>
      <br />
    </n-card>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
import { NCard, NProgress, useThemeVars, NButton, NModal } from "naive-ui";

// TODO: 这一大段逻辑其实都应该放到后端，减少客户端计算压力
// 纳新状态查询
interface Step {
  status: string;
  curDescribe: string;
  count: string;
  title: string;
  statusDescribe: string;
  disable: boolean;
  btn?: {
    disable: boolean;
    describe: string;
  }[];
}
const step: Ref<Step[]> = ref([
  {
    status: '1', // 0指已结束
    curDescribe: "未开始",
    count: "第一步",
    title: "hello,小橙子 ,恭喜你报名成功",
    statusDescribe: "请关注录取进程",
    disable: false,
  },
  {
    status: '2', // 1指正在进行
    curDescribe: "未开始",
    count: "第二步",
    title: "初试进行",
    statusDescribe: "通过/淘汰",
    disable: true,
  },
  {
    status: '2', // 2指未开始
    curDescribe: "未开始",
    count: "第三步",
    title: "复试进行",
    statusDescribe: "通过/淘汰",
    disable: true,
  },
  {
    status: '2',
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
const showModal: Ref<boolean> = ref(false);
const sId: Ref<string> = ref("")
// 提交学号查询状态
const submitSId = function (): void {
  const id: string = "1"
  const isUpdate: Ref<boolean> = ref(false);
  for (let i = 0; i < step.value.length; i++) {
    if (isUpdate.value === false) {
      if (i + 1 === parseInt(id)) {
        switch (id) {
          case '2.1':
          case '3.1':
            statusUpdate(step.value[i], '1', "到这儿了", false, true, '通过');
            break;
          case '2.2':
          case '3.2':
            statusUpdate(step.value[i], '1', "到这儿了", false, true, '淘汰');
            break;
          case '4':
            statusUpdate(step.value[i], '1', "到这儿了", false, false);
            break;
          case '4.1':
            statusUpdate(step.value[i], '1', "到这儿了", false, true, '恭喜加入橙果工作室！');
            break;
          case '4.2':
            statusUpdate(step.value[i], '1', "到这儿了", false, true, '感谢您的参与！');
            break;
          default:
            statusUpdate(step.value[i], '1', "到这儿了", false, true,);
            break;
        }

        isUpdate.value = true;
      } else {
        statusUpdate(step.value[i], '0', '已结束', true, true)
      }
    } else {
      statusUpdate(step.value[i], '2', '未开始', true, true,)
    }
    showModal.value = false;
    sId.value = "";
  }
}
// step赋值逻辑抽离
const statusUpdate = function (
  item: Step,
  status: string,
  curDescribe: string,
  disable: boolean,
  isBtn: boolean,
  statusDescribe?: string,
): void {
  item.status = status;
  item.curDescribe = curDescribe;
  item.disable = disable;
  item.btn?.forEach(item => {
    item.disable = isBtn;
  })
  if (statusDescribe) {
    item.statusDescribe = statusDescribe;
  }
}


// 纳新流程介绍
interface StepWord {
  title: string;
  words: string[];
  progess: number;
  color: string;
  railColor: string;
}
const stepWord: Ref<StepWord[]> = ref([
  {
    title: "报名成功/未报名",
    words: [
      "一只满怀好奇的小橙子在“橙果工作室”的门口看了看。报名呢？还是不报名呢？",
      "emmm。。。报名的话会找到一群志同道合的人, 一起完成心中的梦想, 会收获温馨、热爱、友谊……好多好多~冲鸭!",
    ],
    progess: 25,
    color: "rgb(32,128,240)",
    railColor: "rgb(210,230,252)",
  },
  {
    title: "初试通过/未通过",
    words: [
      "来了来了了, “无情的“的第一次面试~",
      "初试考察的是“第一印象”, 大家通过自我介绍来向面试官展示自己个性和优势。可以说专业知识, 也可以说人格修养、兴趣爱好等等。内容不限。面试时长为3min/人。",
    ],
    progess: 50,
    color: "rgb(24,160,88)",
    railColor: "rgb(209,236,222)",
  },
  {
    title: "复试通过/未通过",
    words: [
      "经过”无情的“第一次面试同学将迎来一次长跑——第二次面试。",
      "面试为期一周左右, 大家会收到由小组发出的学习任务, 经行为期一周的自学之后会对大家学习内容进行一次考核以检验大家的学习能力。",
    ],
    progess: 75,
    color: "rgb(208,48,80)",
    railColor: "rgb(246,214,220)",
  },
  {
    title: "确认加入",
    words: [
      "到此, 大家已经通过了全部面试, 你的学识和能力已经得到了我们的认可, 满足加入橙果工作室的全部要求。",
      "在剩余时间内随时可以选择加入, 当然也可以选择拒绝。It's up to you.敬候佳音~",
    ],
    progess: 100,
    color: "rgb(240,160,32)",
    railColor: "rgb(240,160,32)",
  },
]);
</script>

<style scoped>
.container {
  width: 95%;
  margin: 0 auto;
}

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
