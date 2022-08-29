<template>
  <n-grid :cols="16" :y-gap="12">
    <n-gi :offset="2" :span="12">
      <n-card size="huge" hoverable>
        这里可以查询面试进展
        <n-grid :cols="4" :x-gap="12">
          <n-gi :span="1">
            <div style="color: rgb(199 199 199)">
              <p>已结束</p>
              <p>第一步</p>
              <h1>hello,小橙子 ,恭喜你报名成功.</h1>
              <p>请关注录取进程</p>
            </div>
          </n-gi>
          <n-gi :span="1">
            <div class="cur">
              <p>你到了这一步</p>
              <p>第二步</p>
              <h1>初试进行</h1>
              <p>这里写状态 通过/淘汰</p>
            </div>
          </n-gi>
          <n-gi :span="1">
            <div style="color: rgb(199 199 199)">
              <p>未开始</p>
              <p>第三步</p>
              <h1>复试进行</h1>
              <p>这里写状态 通过/淘汰</p>
            </div>
          </n-gi>
          <n-gi :span="1">
            <div style="color: rgb(199 199 199)">
              <p>未开始</p>
              <p>第四步</p>
              <h1>确认是否加入</h1>
              <n-button disabled dashed> 加入 </n-button>
              <n-button disabled dashed> 不加入 </n-button>
              <p>欢迎你的到来</p>
            </div></n-gi
          >
        </n-grid>
      </n-card>
    </n-gi>

    <n-gi :offset="2" :span="12">
      <div class="bg" style="position: relative">
        <p>这里让大家熟悉纳新流程</p>
        <br />
        <h1>报名成功/未报名</h1>
        <p>一只满怀好奇的小橙子在“橙果工作室”的门口看了看。报名呢？还是不报名呢？</p>
        <p>
          emmm。。。报名的话会找到一群志同道合的人，一起完成心中的梦想，会收获温馨、热爱、友谊……好多好多~冲鸭!
        </p>
        <br />
        <br />
        <h1>初试通过/未通过</h1>
        <p>来了来了了，“无情的“的第一次面试~</p>
        <p>
          初试考察的是“第一印象”，大家通过自我介绍来向面试官展示自己个性和优势。可以说专业知识，也可以说人格修养、兴趣爱好等等。内容不限。面试时长为3min/人。
        </p>
        <br />
        <br />
        <h1>复试通过/未通过</h1>
        <p>经过”无情的“第一次面试同学将迎来一次长跑——第二次面试。</p>
        <p>
          面试为期一周左右，大家会收到由小组发出的学习任务，经行为期一周的自学之后会对大家学习内容进行一次考核以检验大家的学习能力。
        </p>
        <br />
        <br />
        <h1>确认加入</h1>
        <p>
          到此，大家已经通过了全部面试，你的学识和能力已经得到了我们的认可，满足加入橙果工作室的全部要求。
        </p>
        <p>在剩余时间内随时可以选择加入，当然也可以选择拒绝。It's up to you.敬候佳音~</p>
      </div>
      <br />
    </n-gi>
  </n-grid>
</template>
<script setup lang="ts">
import { NGrid, NGi, NCard, NButton } from "naive-ui";
</script>

<style scoped>
.n-timeline {
  width: 100vw;
}
h1 {
  font-size: 1.4vw;
}
p {
  font-size: 1vw;
}
.bg {
  border: 1px solid rgb(239, 239, 245);
  background: url(https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/B1.png);
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: 1.3vw;
  padding-left: 2vw;
  padding-bottom: 1vw;
}
.cur {
}
</style>
