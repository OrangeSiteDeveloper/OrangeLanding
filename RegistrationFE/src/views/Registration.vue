<template>
  <div class="box">
    <v-container>
      <v-row>
        <!-- right -->
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="mx-auto">
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <!-- 姓名 -->
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="姓名"
                  required
                ></v-text-field>
                <!-- 性别 -->
                <v-select
                  v-model="gender"
                  :items="genders"
                  :rules="[(v) => !!v || '性别不能为空！']"
                  label="性别"
                  required
                ></v-select>
                <!-- 专业 -->
                <v-text-field
                  v-model="faculty"
                  :rules="facultyRules"
                  label="专业"
                  required
                ></v-text-field>
                <!-- 手机 -->
                <v-text-field
                  v-model="mobile"
                  :rules="mobileRules"
                  label="手机号码"
                  required
                  placeholder="手机号码将被用来发送短信通知 请谨慎填写"
                ></v-text-field>
                <!-- QQ -->
                <v-text-field
                  v-model="qq"
                  :rules="qqRules"
                  label="QQ"
                  required
                ></v-text-field>
                <!-- 邮箱 -->
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="电子邮箱"
                  required
                  placeholder="电子邮箱将被用来用来通知面试结果 请谨慎填写"
                ></v-text-field>
                <!-- 小组 -->
                <v-select
                  v-model="select1"
                  :items="groups"
                  :rules="[(v) => !!v || '小组不能为空！']"
                  label="想加入的学习小组"
                  required
                ></v-select>
                <!-- 部门 -->
                <v-select
                  v-model="select2"
                  :items="departments"
                  :rules="[(v) => !!v || '部门不能为空！']"
                  label="想加入的部门"
                  required
                ></v-select>
                <!-- 自我介绍 -->
                <v-textarea
                  v-model="intro"
                  :rules="introRules"
                  label="自我介绍"
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
                <!-- 提交 -->
                <span>
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                    >From the top</v-btn
                  >
                  <v-dialog max-width="500" v-model="dialog">
                    <v-card>
                      <v-card-text>
                        <v-card-text>
                          <div>Word of the Day</div>
                          <p class="text-h4 text--primary">el·ee·mos·y·nar·y</p>
                          <p>adjective</p>
                          <div class="text--primary">
                            relating to or dependent on charity; charitable.<br />
                            "an eleemosynary educational institution."
                          </div>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn
                            text
                            color="teal accent-4"
                            @click="reveal = true"
                          >
                            Learn More
                          </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                          <v-card
                            v-if="reveal"
                            class="transition-fast-in-fast-out v-card--reveal"
                            style="height: 100%"
                          >
                            <v-card-text class="pb-0">
                              <p class="text-h4 text--primary">Origin</p>
                              <p>
                                late 16th century (as a noun denoting a place
                                where alms were distributed): from medieval
                                Latin eleemosynarius, from late Latin eleemosyna
                                ‘alms’, from Greek eleēmosunē ‘compassion’
                              </p>
                            </v-card-text>
                            <v-card-actions class="pt-0">
                              <v-btn
                                text
                                color="teal accent-4"
                                @click="reveal = false"
                              >
                                Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-expand-transition>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </span>
                <!-- 重写 -->
                <v-btn color="error" class="mr-4" @click="reset">
                  重新填写
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <!-- left -->
        <v-col v-show="showOr" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card height="872" class="mx-auto">
            <v-card-text>
              <v-img
                height="840"
                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/699pic_e11b3c01b0e28dc1178eb89c05a5ece7_401728828.jpg"
              ></v-img>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "姓名不能为空！",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    gender: null,
    genders: ["男", "女"],
    // checkbox: false,
    faculty: "",
    facultyRules: [(v) => !!v || "院系不能为空！"],
    mobile: "",
    mobileRules: [(v) => !!v || "手机号码不能为空！"],
    qq: "",
    qqRules: [(v) => !!v || "qq不能为空！"],
    email: "",
    emailRules: [
      (v) => !!v || "邮箱不能为空！",
      (v) => /.+@.+\..+/.test(v) || "邮箱格式不正确",
    ],
    select1: null,
    groups: ["网站组", "程序设计组", "嵌入式组", "大数据组", "硬件组"],
    checkbox: false,
    select2: null,
    departments: ["无", "秘书部", "宣传部", "外联部", "学习部"],
    // checkbox: false,
    intro: "",
    introRules: [(v) => !!v || "自我介绍不能为空！"],
    showOr: true,
    loading: "false",
    dialog: false,
  }),

  methods: {
    validate() {
      let flag = this.$refs.form.validate();
      if (flag === true) {
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
          this.dialog = true;
        }, 2000);
      }
    },
    reset() {
      this.$refs.form.reset();
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
