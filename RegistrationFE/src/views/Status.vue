<template>
  <div>
    <!-- 进度 -->
    <div>
      {{ step }}
    </div>

    <!-- 日程 -->
    <div>
      <h2>报名成功/未报名</h2>
      <p>
        一只满怀好奇的小橙子在“橙果工作室”的门口看了看。报名呢？还是不报名呢？
        <br />emmm。。。报名的话会找到一群志同道合的人，一起完成心中的梦想，会收获温馨、热爱、友谊……好多好多~冲鸭!
      </p>
    </div>
    <div>
      <h2>初试通过/未通过</h2>
      <p>
        >来了来了了，“无情的“的第一次面试~
        <br />初试考察的是“第一印象”，大家通过自我介绍来向面试官展示自己个性和优势。可以说专业知识，也可以说人格修养、兴趣爱好等等。内容不限。面试时长为3min/人。
      </p>
    </div>
    <div>
      <h2>复试通过/未通过</h2>
      <p>
        经过”无情的“第一次面试同学将迎来一次长跑——第二次面试。
        <br />面试为期一周左右，大家会收到由小组发出的学习任务，经行为期一周的自学之后会对大家学习内容进行一次考核以检验大家的学习能力。
      </p>
    </div>
    <div>
      <h2>确认加入</h2>
      <p>
        到此，大家已经通过了全部面试，你的学识和能力已经得到了我们的认可，满足加入橙果工作室的全部要求。
        <br />在剩余时间内随时可以选择加入，当然也可以选择拒绝。It's up to you.敬候佳音~
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Status",
  data: () => ({
    step: {
      contentStep1: "hello小橙子,恭喜你报名成功.",
      contentStep2: "初试进行",
      contentStep3: "复试进行",
      contentStep4: "确认是否加入",
      img1: [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%81%AD%E5%96%9C%E6%8A%A5%E5%90%8D%E6%88%90%E5%8A%9Flazy(1).webp?x-oss-process=image/interlace,1",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%81%AD%E5%96%9C%E6%8A%A5%E5%90%8D%E6%88%90%E5%8A%9F%20(1)(1).webp?x-oss-process=image/interlace,1",
      ],
      img2: [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%88%9D%E8%AF%95%E7%BB%93%E6%9D%9Flazy(1).webp?x-oss-process=image/interlace,1",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%88%9D%E8%AF%95%E7%BB%93%E6%9D%9F%20(1)(1).webp?x-oss-process=image/interlace,1",
      ],
      img3: [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%A4%8D%E8%AF%95%E7%BB%93%E6%9D%9Flazy%20(1)(1).webp?x-oss-process=image/interlace,1",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%A4%8D%E8%AF%95%E7%BB%93%E6%9D%9F%20(1)(1)%20(1).webp?x-oss-process=image/interlace,1",
      ],
      img4: [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%98%AF%E5%90%A6%E7%A1%AE%E5%AE%9A%E5%8A%A0%E5%85%A5lazy(1)%20(1).webp?x-oss-process=image/interlace,1",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%98%AF%E5%90%A6%E7%A1%AE%E5%AE%9A%E5%8A%A0%E5%85%A5%20(1)(1).webp?x-oss-process=image/interlace,1",
      ],
    },
  }),
};
</script>
