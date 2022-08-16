<template>
  <div class="box">
    <p>姓名</p>
    <p>学号</p>
    <p>性别</p>
    <p>专业</p>
    <p>手机号码</p>
    <p>QQ</p>
    <p>电子邮箱</p>
    <p>意向小组</p>
    <p>意向部门（可选）</p>
    <p>用一段简短的文字介绍你自己！--说点儿什么，有主意我们更好的了解你</p>

    <img
      height="911"
      lazy-src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E8%A1%A8%E5%8D%95lazy(1).webp?x-oss-process=image/interlace,1"
      src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E8%A1%A8%E5%8D%95%20(1)(1).webp?x-oss-process=image/interlace,1"
    />
  </div>
</template>

<script>
export default {
  name: "Registration",
  data: () => ({
    studentIdRules: [
      (v) => !!v || "学号不能为空！",
      (v) => (v && v.length <= 12) || "学号不能超过12个数字",
    ],
    nameRules: [
      (v) => !!v || "姓名不能为空！",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    genders: ["男", "女"],
    // checkbox: false,
    facultyRules: [(v) => !!v || "专业不能为空！"],
    mobileRules: [
      (v) => !!v || "手机号码不能为空！",
      (v) => (v && v.length <= 11) || "手机号码不能超过11个数字",
    ],
    qqRules: [(v) => !!v || "qq不能为空！"],
    emailRules: [
      (v) => !!v || "邮箱不能为空！",
      (v) => /.+@.+\..+/.test(v) || "邮箱格式不正确",
    ],
    groups: ["网站组", "程序设计组", "嵌入式组", "大数据组", "硬件组"],
    checkbox: false,
    departments: ["无", "秘书部", "宣传部", "外联部", "学习部"],
    // checkbox: false,
    introRules: [(v) => !!v || "自我介绍不能为空！"],
  }),
};
</script>
