<template>
  <!-- content -->
  <n-grid :cols="8">
    <n-gi :offset="1" :span="6">
      <!-- 大图 -->
      <n-card size="small" hoverable>
        <div class="view-box">
          <img
            src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/aqccb-itej1.webp?x-oss-process=image/interlace,1"
          />
          <div class="view-word-container">
            <n-gradient-text
              gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
            >
              欢迎你们——未来的“小橙子~”
            </n-gradient-text>
            <p class="mini-word">OrangeStudio~</p>
            <p v-for="item in viewWordArr" class="view-word">{{ item }}</p>
            <br />
            <n-button type="error" dashed> 现在，我将告诉你答案——橙果工作室。 </n-button>
          </div>
        </div>
      </n-card>
      <br />
      <!-- 小卡片 -->
      <n-grid :x-gap="12" :y-gap="12" :cols="2">
        <!-- 左列 -->
        <n-gi :span="1">
          <n-grid :y-gap="12" :cols="1">
            <n-gi :span="1">
              <n-card size="huge" hoverable>
                <TextCardVue :value="propsTextCard.propsGroup" />
                <br />
                <br />
                <img
                  src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/ooy-_2__1_.webp?x-oss-process=image/format,jpg/interlace,1"
                />
                <br />
                <TextCardVue :value="propsTextCard.propsDepartment" />
              </n-card>
            </n-gi>
            <n-gi :span="1">
              <n-card size="huge" hoverable>
                <TextCardVue :value="propsTextCard.propsAchievement" />
              </n-card>
            </n-gi>
            <n-gi :span="1">
              <n-card size="huge" hoverable>
                <TextCardVue :value="propsTextCard.propsPlan" />
                <GradientBlock :value="propsColorBlock.propsColorBlockBlue" />
                <br />
                <GradientBlock :value="propsColorBlock.propsColorBlockRed" />
              </n-card>
            </n-gi>
          </n-grid>
        </n-gi>
        <!-- 右列 -->
        <n-gi :span="1">
          <n-grid :y-gap="12" :cols="1">
            <n-gi :span="1">
              <n-card size="huge" hoverable>
                <img v-for="item in logoPeopleArr" :src="item" />
              </n-card>
            </n-gi>
            <n-gi :span="1">
              <n-card size="huge" hoverable>
                <TextCardVue :value="propsTextCard.propsArea" />
                <n-carousel autoplay>
                  <img v-for="item in carouselImgsArr" class="carousel-img" :src="item" />
                </n-carousel>
              </n-card>
            </n-gi>
            <n-gi :span="1">
              <n-card size="huge" hoverable>
                <n-space vertical :size="16">
                  <n-config-provider :hljs="hljs">
                    <n-code :code="code" language="javascript" />
                  </n-config-provider>
                </n-space>
              </n-card>
            </n-gi>
          </n-grid>
        </n-gi>
      </n-grid>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  NGrid,
  NGi,
  NCard,
  NGradientText,
  NButton,
  NCarousel,
  NCode,
  NSpace,
  NConfigProvider,
} from "naive-ui";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import TextCardVue from "@/components/TextCard.vue";
import GradientBlock from "@/components/GradientBlock.vue";

hljs.registerLanguage("javascript", javascript);

const code = `
// 这是一道经典算法题，翻转二叉树
// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
// 此为JavaScript代码实现
var invertTree = function (root) {
  if (root === null) return root;
  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    while (len > 0) {
      const node = queue.shift();

      let tmp = node.right;
      node.right = node.left;
      node.left = tmp;

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      len--;
    }
  }

  return root;
};
`;

const viewWordArr = ref([
  "初入工大，还未领略图书馆的庄严肃穆，宿舍楼的温暖安详，",
  "实验北和机电A也还是未知之地、神秘之所。",
  "此刻，你或许坐在椅上，激战峡谷；",
  "或许躺在床上，追随月光……",
  "有时就着漫天朝霞，憧憬未来的大学时光，却不由想起五月的阳光，黯然神伤。",
  "我们，总是贪恋舒适区的安详，当思绪飞到陌生的土地上方，对自己无数疑问便爬到心上。",
  "来工大做什么？毕业之后将成为什么样的人？",
  "其实更想知道，M78星云的光是否曾照耀远方~",
  "其实更想知道的是，进入大学后的我，此刻，到底最需要的是什么？",
]);

const carouselImgsArr = ref([
  "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_20210905_153521(1)%20(1)(1).webp?x-oss-process=image/interlace,1",
  "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_011%20(1)(1).webp?x-oss-process=image/interlace,1",
  "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_20210905_153855(1)%20(1)(1).webp?x-oss-process=image/interlace,1",
  "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_013%20(1)(1).webp?x-oss-process=image/interlace,1",
]);
const logoPeopleArr = ref([
  "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/1.2-_1__1_.webp?x-oss-process=image/interlace,1",
  "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/1.1-_1__1_%20(1).webp?x-oss-process=image/interlace,1",
  "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/1.3-_1__1_.webp?x-oss-process=image/interlace,1",
]);

const propsTextCard = {
  propsGroup: reactive({
    title: "Group",
    mini: "Group Introduction",
    btnText: "加入学习小组",
    btnColor: "#8a2be2",
    arr: [
      "硬件组，学习硬件知识，打通底层逻辑；",
      "嵌入式组，赋能传统装备，万物皆可智能；",
      "网站组，寥寥数行代码，页面千变万化；",
      "大数据组，分析数据变化，决胜数据时代；",
      "程序设计组，大道至简，行稳致远。",
    ],
  }),
  propsDepartment: reactive({
    title: "Department",
    mini: "Department Introduction",
    btnText: "加入管理部门",
    btnColor: "#00bfa5",
    arr: [
      "学习部、秘书部、宣传部、外联部，作为社团运行中枢，统筹负责工作室的日常运营。包括各种活动的筹备和举办、成员学习进度的督导、资源的协调和调配，大小会议室的使用（工作室设有专门的会议室当作自习室向同学们开放，干净整洁、安静、配备空调和热水!）",
    ],
  }),
  propsAchievement: reactive({
    title: "Achievement",
    mini: "Achievement Introduction",
    btnText: "我的橙果，分你一半~",
    btnColor: "rgb(255,191,40)",
    arr: [
      "制作和维护学校以及学院官网以及工作室官网。",
      "搭建和维护大学城融创云平台。",
      "作为电脑义诊的主力服务师生。",
      " 参加电子设计大赛、机器人竞赛等大型竞赛。",
      "对社团成员以及广大师生开展信息化科普，提高我校信息化素质。",
      "设计制作新生返校数据之大屏展示。",
    ],
  }),
  propsArea: reactive({
    title: "Area",
    mini: "Area Introduction",
    btnText: false,
    btnColor: "#000000",
    arr: [
      "社团主要活动场所位于图书馆一楼东南部的网络信息中心，共包括：大会议室，小会议室，研发小屋，维修仓库，社团办公室等部分。其中大会议室除用于举办社团活动之外作为24小时自习室开放，为同学们提供干净整洁、安静的学习环境。小会议室在必要时刻亦可用于自习。此外，我们将提供二十余个工位给有需求的同学使用，以支持他的学习和实践活动。",
    ],
  }),
  propsPlan: reactive({
    title: "Plan",
    mini: "Plan Introduction",
    btnText: false,
    btnColor: "#000000",
    arr: [
      "全方位了解计算机领域知识同时，按照各组研究方向展开进一步学习和实践活动。“导师制”助力大学生涯不迷茫。 “项目制”让你学有所练，练有所得。",
    ],
  }),
};

const propsColorBlock = {
  propsColorBlockBlue: {
    type: "background: linear-gradient(to right, #d8eddd, #c3e4e5, #a5d7f1)",
    word: "导师计划",
    color: "rgb(246,82,80)",
  },
  propsColorBlockRed: {
    type:
      "background: linear-gradient(to right, rgb(242, 57, 101), rgb(248, 99, 66), rgb(253, 132, 41));",
    word: "项目驱动",
    color: "rgb(86,223,223)",
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.view-box {
  position: relative;
}

.view-word-container {
  position: absolute;
  top: 3vw;
  left: 5vw;
}
.n-gradient-text {
  font-size: 1.6vw;
}

.view-word {
  font-size: 1vw;
  line-height: 2em;
}
.carousel-img {
  object-fit: cover;
}

.mini-word {
  font-size: 0.8vw;
  line-height: 3em;
  color: grey;
}

.n-button {
  font-size: 0.6vw;
  line-height: 4em;
}
.n-code {
  font-size: 0.81vw;
}
</style>
