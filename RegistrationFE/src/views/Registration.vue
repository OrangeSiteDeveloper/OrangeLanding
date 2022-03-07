<template>
  <div class="box">
    <v-container>
      <v-row>
        <!-- left -->
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="mx-auto">
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <!-- 学号 -->
                <v-text-field
                  v-model="form.student_id"
                  :counter="12"
                  :rules="studentIdRules"
                  label="学号"
                  required
                  placeholder="学号将会是您的唯一标识，请不要填错"
                ></v-text-field>
                <!-- 姓名 -->
                <v-text-field
                  v-model="form.user_name"
                  :counter="6"
                  :rules="nameRules"
                  label="姓名"
                  required
                ></v-text-field>
                <!-- 性别 -->
                <v-select
                  v-model="form.gender"
                  :items="genders"
                  :rules="[(v) => !!v || '性别不能为空！']"
                  label="性别"
                  required
                ></v-select>
                <!-- 专业 -->
                <v-text-field
                  v-model="form.major"
                  :rules="facultyRules"
                  label="专业"
                  required
                  placeholder="例：计科19-3"
                ></v-text-field>
                <!-- 手机 -->
                <v-text-field
                  v-model="form.phone"
                  :counter="11"
                  :rules="mobileRules"
                  label="手机号码"
                  required
                  placeholder="手机号码将被用来让我们找到你 请谨慎填写"
                ></v-text-field>
                <!-- QQ -->
                <v-text-field
                  v-model="form.qq"
                  :rules="qqRules"
                  label="QQ"
                  required
                ></v-text-field>
                <!-- 邮箱 -->
                <v-text-field
                  v-model="form.email"
                  :rules="emailRules"
                  label="电子邮箱"
                  required
                  placeholder="电子邮箱将被用来用来通知面试结果"
                ></v-text-field>
                <!-- 小组 -->
                <v-select
                  v-model="form.group"
                  :items="groups"
                  :rules="[(v) => !!v || '小组不能为空！']"
                  label="意向小组"
                  required
                ></v-select>
                <!-- 部门 -->
                <v-select
                  v-model="form.department"
                  :items="departments"
                  :rules="[(v) => !!v || '部门不能为空！']"
                  label="意向部门（可选）"
                  required
                ></v-select>
                <!-- 自我介绍 -->
                <v-textarea
                  v-model="form.intro"
                  :rules="introRules"
                  label="用一段简短的文字介绍你自己！"
                  required
                  :loading="loading"
                  placeholder="说点儿什么 这将有助于我们更好的了解你"
                ></v-textarea>
                <!-- 确认信息 -->
                <v-checkbox
                  v-model="checkbox"
                  :rules="[(v) => !!v || '你必须确认才能继续哦!']"
                  label="确认信息无误"
                  required
                ></v-checkbox>
                <div>
                  <Vcode :show="isShowShow" @success="success" @close="close" />
                </div>
                <!-- 提交 -->
                <span>
                  <v-btn :disabled="true" color="success" class="mr-4"
                    >敬请期待2022纳新季再次开启</v-btn
                  >
                  <!-- 提交成功 -->
                  <v-dialog max-width="500" v-model="dialog">
                    <v-card>
                      <v-card-text>
                        <v-card-text>
                          <div>Word of the Day</div>
                          <p class="text-h4 text--primary">报名成功</p>
                          <p>success</p>
                          <div class="text--primary">
                            恭喜您报名成功，请进入纳新群（已进群请忽略），后续信息将优先在群内公布。<br />
                            <div>
                              <v-img
                                style="width: 150px; margin: 0 auto"
                                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/X%5BFE(M3_WVG(2BYM53PHDTO%20(2)(1).webp?x-oss-process=image/format,jpg/interlace,1"
                              >
                              </v-img>
                            </div>
                            现在可以点击左上角“≡”按钮
                            ->“查看录取进度”了解自己的报名状态。<br />
                            请注意查看邮箱，我们已经给您发送了一封确认报名成功的邮件。
                          </div>
                        </v-card-text>

                        <v-card-actions>
                          <v-btn text color="teal accent-4" @click="coda">
                            我知道了
                          </v-btn>
                        </v-card-actions>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <!-- 提交失败 -->
                  <v-dialog v-model="dialogFail" width="500">
                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        提交失败！
                      </v-card-title>

                      <v-card-text>
                        对不起，您本次报名失败，请刷新页面或者过段时间再试。
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="codaFail"> 我知道了 </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </span>
                <!-- 重写 -->
                <v-btn color="error" class="mr-4" @click="reset"> 重新填写 </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <!-- right -->
        <v-col v-show="showOr" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card height="942" class="mx-auto">
            <v-card-text>
              <v-img
                height="911"
                lazy-src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E8%A1%A8%E5%8D%95lazy(1).webp?x-oss-process=image/interlace,1"
                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E8%A1%A8%E5%8D%95%20(1)(1).webp?x-oss-process=image/interlace,1"
              ></v-img>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode";

export default {
  name: "Registration",
  data: () => ({
    form: {
      student_id: "",
      user_name: "",
      gender: null,
      major: "",
      phone: "",
      qq: "",
      email: "",
      // 小组
      group: null,
      // 部门
      department: null,
      intro: "",
    },
    valid: true,
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
    showOr: true,
    loading: "false",
    dialog: false,
    dialogFail: false,
    isShowShow: false,
  }),
  components: {
    Vcode,
  },
  methods: {
    // 提交表单
    // 报名确认事件
    validate() {
      this.isShowShow = true;
    },
    reset() {
      this.$refs.form.reset();
    },
    coda() {
      this.dialog = false;
      this.$refs.form.reset();
    },
    codaFail() {
      this.dialogFail = false;
      this.$refs.form.reset();
    },

    submit() {},
    // 用户通过了验证
    success(msg) {
      let flag = this.$refs.form.validate();
      if (flag === true) {
        this.loading = true;

        this.form.status = 1;
        this.$axios
          .post("http://139.9.118.85:8002/student/add", this.form)
          .then((res) => {
            this.loading = false;
            this.dialog = true;
          })
          .catch((err) => {
            this.dialogFail = true;
            this.loading = false;
          });
      }
      this.isShowShow = false; // 通过验证后，需要手动隐藏模态框
    },
    // 用户点击遮罩层，应该关闭模态框
    close() {
      this.isShow = false;
    },
  },
  created() {
    var de = document.documentElement;
    const result = de.offsetWidth;

    if (result <= 600) {
      this.showOr = false;
    }
  },
};
</script>

<style scoped>
.box {
  text-align: center;
}
.container {
  display: inline-block;
}
</style>
