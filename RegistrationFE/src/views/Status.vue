<template>
  <div>
    <!-- 进度 -->
    <v-container>
      <v-stepper :key="count" class="stepper" v-model="e6" vertical>
        <!-- dialog -->
        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                请输入学号查询您的信息
              </v-card-title>
              <div style="text-field-box">
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-model="student_id"
                        :counter="12"
                        label="学号"
                        required
                      ></v-text-field>
                      <p>
                        输入您的学号可查询录取状态。
                        输入正确时左上方会显示您的名字，如果输入有误点击右上角的
                        <v-icon> mdi-pencil </v-icon>
                        即可修正。
                      </p>
                      <p>请在点击确认前确认信息填写无误。</p>
                    </v-col>
                  </v-row>
                </v-container>
              </div>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="selectStatus"> 确认 </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <!-- 1 -->
        <v-btn class="mx-2 rewrite" fab dark color="cyan" @click="dialog = true">
          <v-icon dark> mdi-pencil </v-icon>
        </v-btn>
        <v-stepper-step :complete="e6 > 1" :step="step.step1" :color="step.color1">
          hello,{{ this.name }} {{ step.contentStep1 }}
          <small>请关注录取进程</small>
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-card color="grey lighten-1" class="mb-12" height="200px">
            <v-img height="200px" :lazy-src="step.img1[0]" :src="step.img1[1]"></v-img>
          </v-card>
        </v-stepper-content>
        <!-- 2 -->
        <v-stepper-step :complete="e6 > 2" :step="step.step2" :color="step.color2">
          {{ step.contentStep2 }}
        </v-stepper-step>
        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" height="200px">
            <v-img height="200px" :lazy-src="step.img2[0]" :src="step.img2[1]"></v-img>
          </v-card>
        </v-stepper-content>
        <!-- 3 -->
        <v-stepper-step :complete="e6 > 3" :step="step.step3" :color="step.color3">
          {{ step.contentStep3 }}
        </v-stepper-step>
        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px">
            <v-img height="200px" :lazy-src="step.img3[0]" :src="step.img3[1]"></v-img>
          </v-card>
        </v-stepper-content>
        <!-- 4 -->
        <v-stepper-step :step="step.step4" :color="step.color4">{{
          step.contentStep4
        }}</v-stepper-step>
        <v-stepper-content step="4">
          <v-card color="grey lighten-1" class="mb-12" height="200px">
            <v-img height="200px" :lazy-src="step.img4[0]" :src="step.img4[1]"></v-img>
          </v-card>
          <v-btn color="primary" @click="agreement" :disabled="joinDisabled">
            加入！</v-btn
          >&nbsp;
          <v-btn color="error" @click="reject" :disabled="surrenderDisabled">
            放弃！
          </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-container>
    <!-- 日程 -->
    <v-container>
      <v-card>
        <v-card-text>
          <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <!-- Title 1 -->
            <v-timeline-item color="purple lighten-2" fill-dot right>
              <v-card>
                <v-card-title class="purple lighten-2">
                  <v-icon dark size="42" class="mr-4"> mdi-magnify </v-icon>
                  <h2 class="text-h4 white--text font-weight-light">报名成功/未报名</h2>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="10">
                      一只满怀好奇的小橙子在“橙果工作室”的门口看了看。报名呢？还是不报名呢？
                      <br />emmm。。。报名的话会找到一群志同道合的人，一起完成心中的梦想，会收获温馨、热爱、友谊……好多好多~冲鸭!
                    </v-col>
                    <v-col class="hidden-sm-and-down text-right" md="2">
                      <v-icon size="64"> mdi-calendar-text </v-icon>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
            <!-- Title 2 -->
            <v-timeline-item color="amber lighten-1" fill-dot left small>
              <v-card>
                <v-card-title class="amber lighten-1 justify-end">
                  <h2 class="text-h4 mr-4 white--text font-weight-light">
                    初试通过/未通过
                  </h2>
                  <v-icon dark size="42"> mdi-home-outline </v-icon>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12"
                      >来了来了了，“无情的“的第一次面试~
                      <br />初试考察的是“第一印象”，大家通过自我介绍来向面试官展示自己个性和优势。可以说专业知识，也可以说人格修养、兴趣爱好等等。内容不限。面试时长为3min/人。
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
            <!-- Title 3 -->
            <v-timeline-item color="cyan lighten-1" fill-dot right>
              <v-card>
                <v-card-title class="cyan lighten-1">
                  <v-icon class="mr-4" dark size="42"> mdi-email-outline </v-icon>
                  <h2 class="text-h4 white--text font-weight-light">复试通过/未通过</h2>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      经过”无情的“第一次面试同学将迎来一次长跑——第二次面试。
                      <br />面试为期一周左右，大家会收到由小组发出的学习任务，经行为期一周的自学之后会对大家学习内容进行一次考核以检验大家的学习能力。
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>

            <!-- Title 4 -->
            <v-timeline-item color="red lighten-1" fill-dot left small>
              <v-card>
                <v-card-title class="red lighten-1 justify-end">
                  <h2 class="text-h4 mr-4 white--text font-weight-light">确认加入</h2>
                  <v-icon dark size="42"> mdi-account-multiple-outline </v-icon>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col class="hidden-sm-and-down" md="2">
                      <v-icon size="64"> mdi-server-network </v-icon>
                    </v-col>
                    <v-col cols="12" md="10">
                      到此，大家已经通过了全部面试，你的学识和能力已经得到了我们的认可，满足加入橙果工作室的全部要求。
                      <br />在剩余时间内随时可以选择加入，当然也可以选择拒绝。It's up to
                      you.敬候佳音~
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
      <!-- confirm -->
      <!-- agreement -->
      <div class="text-center">
        <v-dialog v-model="dialogAgreement" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2"> 请再次确认 </v-card-title>

            <v-card-text> 您确定要加入我们吗？ </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="agreementConfirm"> 我确定加入 </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <!-- reject -->
      <div class="text-center">
        <v-dialog v-model="dialogReject" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2"> 请再次确认 </v-card-title>

            <v-card-text> 您确定要拒绝加入我们吗？ </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="rejectConfirm"> 我仍然拒绝 </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Status",
  data: () => ({
    count: 1,
    e6: 1,
    name: "小橙子",
    dialog: false,
    dialogAgreement: false,
    dialogReject: false,
    student_id: "",
    step: {
      contentStep1: ",恭喜你报名成功.",
      contentStep2: "初试进行",
      contentStep3: "复试进行",
      contentStep4: "确认是否加入",
      color1: "rgb(104,166,255)",
      color2: "rgb(245,111,135)",
      color3: "rgb(88,245,162)",
      color4: "rgb(189,194,232)",
      step1: 1,
      step2: 2,
      step3: 3,
      step4: 4,
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
    student_id: "",
    screenWidth: document.body.clientWidth,
    joinDisabled: false,
    surrenderDisabled: false,
  }),
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };

    var de = document.documentElement;
    const result = de.offsetWidth;

    if (result <= 1200) {
      this.step.img1 = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%81%AD%E5%96%9C%E6%8A%A5%E5%90%8D%E6%88%90%E5%8A%9F1(2)%20(1)lazy.png?x-oss-process=image/interlace,1",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%81%AD%E5%96%9C%E6%8A%A5%E5%90%8D%E6%88%90%E5%8A%9F1(2).png?x-oss-process=image/interlace,1",
      ];
      this.step.img2 = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E7%B2%89%E5%AB%A9(1)lazy.png?x-oss-process=image/interlace,1",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E7%B2%89%E5%AB%A9(1).png?x-oss-process=image/interlace,1",
      ];
      this.step.img3 = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E7%BB%BF%E8%89%B2(1)lazy.png?x-oss-process=image/interlace,1",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E7%BB%BF%E8%89%B2(1).png?x-oss-process=image/interlace,1",
      ];
      this.step.img4 = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E7%B4%AB(1)lazy.png?x-oss-process=image/interlace,1",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E7%B4%AB(1).png?x-oss-process=image/interlace,1",
      ];
    }
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;

        setInterval(function () {
          // 打印screenWidth变化的值
          if (that.screenWidth <= 1200) {
            that.step.img1[1] =
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%81%AD%E5%96%9C%E6%8A%A5%E5%90%8D%E6%88%90%E5%8A%9F1(2).png?x-oss-process=image/interlace,1";
            that.step.img2[1] =
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E7%B2%89%E5%AB%A9(1).png?x-oss-process=image/interlace,1";
            that.step.img3[1] =
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E7%BB%BF%E8%89%B2(1).png?x-oss-process=image/interlace,1";
            that.step.img4[1] =
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E7%B4%AB(1).png?x-oss-process=image/interlace,1";
          } else {
            // 与data相同
            that.step.img1[1] =
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%81%AD%E5%96%9C%E6%8A%A5%E5%90%8D%E6%88%90%E5%8A%9F%20(1)(1).webp?x-oss-process=image/interlace,1";
            that.step.img2[1] =
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%88%9D%E8%AF%95%E7%BB%93%E6%9D%9F%20(1)(1).webp?x-oss-process=image/interlace,1";
            that.step.img3[1] =
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%A4%8D%E8%AF%95%E7%BB%93%E6%9D%9F%20(1)(1)%20(1).webp?x-oss-process=image/interlace,1";
            that.step.img4[1] =
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%98%AF%E5%90%A6%E7%A1%AE%E5%AE%9A%E5%8A%A0%E5%85%A5%20(1)(1).webp?x-oss-process=image/interlace,1";
          }

          that.timer = false;
        }, 1000);
      }
    },
  },
  methods: {
    selectStatus() {
      const student = {
        student_id: this.student_id,
      };

      this.$axios
        .post("http://139.9.118.85:8002/student/select", student)
        .then((res) => {
          console.log("ddd");
          localStorage.setItem("student", res.data[0].student_id);
          this.name = res.data[0].user_name;
          this.student_id = res.data[0].student_id;
          if (res.data[0].status == 1) {
            this.e6 = res.data[0].status;
            this.step.contentStep2 = "初试进行";
            this.step.contentStep3 = "复试进行";
            this.step.contentStep4 = "确认是否加入";
            this.step.step2 = 2;
            this.step.step3 = 3;
            this.step.step4 = 4;
          } else if (res.data[0].status == 21) {
            this.e6 = 2;
            this.step.contentStep2 = "初试通过";
            this.step.contentStep3 = "复试进行";
            this.step.contentStep4 = "确认是否加入";
            this.step.step3 = 3;
            this.step.step4 = 4;
          } else if (res.data[0].status == 22) {
            this.e6 = 2;
            this.step.contentStep2 = "初试未通过";
            this.step.color2 = "red";
            this.step.step2 = "×";
            this.step.contentStep3 = "复试进行";
            this.step.contentStep4 = "确认是否加入";
            this.step.step3 = 3;
            this.step.step4 = 4;
          } else if (res.data[0].status == 31) {
            this.e6 = 3;
            this.contentStep3 = "复试通过";
            this.step.contentStep2 = "初试进行";
            this.step.contentStep4 = "确认是否加入";
            this.step.step2 = 2;
            this.step.step4 = 4;
          } else if (res.data[0].status == 32) {
            this.e6 = 3;
            this.step.contentStep3 = "复试没有完全通过";
            this.step.contentStep2 = "初试进行";
            this.step.contentStep4 = "确认是否加入";
            this.step.step2 = 2;
            this.step.step4 = 4;
          } else if (res.data[0].status == 33) {
            this.e6 = 3;
            this.step.contentStep3 = "复试未通过";
            this.step.color3 = "red";
            this.step.step3 = "×";
            this.step.contentStep2 = "初试进行";
            this.step.contentStep4 = "确认是否加入";
            this.step.step2 = 2;
            this.step.step4 = 4;
          } else if (res.data[0].status == 4) {
            this.e6 = res.data[0].status;
            this.step.contentStep2 = "初试进行";
            this.step.contentStep3 = "复试进行";
            this.step.step2 = 2;
            this.step.step3 = 3;
          } else if (res.data[0].status == 41) {
            this.e6 = 4;
            this.step.contentStep4 = "您已经确认加入我们";
            this.step.contentStep2 = "初试进行";
            this.step.contentStep3 = "复试进行";
            this.step.step2 = 2;
            this.step.step3 = 3;
            this.joinDisabled = true;
            this.surrenderDisabled = true;
          } else if (res.data[0].status == 42) {
            this.e6 = 4;
            this.step.contentStep4 = "您已经拒绝加入我们";
            this.step.contentStep2 = "初试进行";
            this.step.contentStep3 = "复试进行";
            this.step.step2 = 2;
            this.step.step3 = 3;
            this.joinDisabled = true;
            this.surrenderDisabled = true;
          }
          this.dialog = false;
        })
        .catch((err) => {});
    },
    agreement() {
      this.dialogAgreement = true;
    },
    agreementConfirm() {
      const student = {
        student_id: this.student_id,
        status: 41,
      };

      this.$axios
        .post("http://139.9.118.85:8002/student/confirm", student)
        .then((res) => {
          console.log("稍后您会收到我们的offer");
          this.joinDisabled = true;
          this.surrenderDisabled = true;
          this.dialogAgreement = false;
        })
        .catch((err) => {});
    },
    reject() {
      this.dialogReject = true;
    },
    rejectConfirm() {
      const student = {
        student_id: this.student_id,
        status: 42,
      };

      this.$axios
        .post("http://139.9.118.85:8002/student/confirm", student)
        .then((res) => {
          console.log("感谢您参与我们的面试");
          this.joinDisabled = true;
          this.surrenderDisabled = true;
          this.dialogReject = false;
        })
        .catch((err) => {});
    },
  },
  created() {
    this.dialog = true;

    if (localStorage.getItem("student")) {
      const studentObj = {
        student_id: localStorage.getItem("student"),
      };
      this.$axios
        .post("http://139.9.118.85:8002/student/select", studentObj)
        .then((res) => {
          this.dialog = false;
          this.name = res.data[0].user_name;
          this.student_id = res.data[0].student_id;
          if (res.data[0].status == 1) {
            this.e6 = res.data[0].status;
          } else if (res.data[0].status == 21) {
            this.e6 = 2;
            this.contentStep2 = "初试通过";
          } else if (res.data[0].status == 22) {
            this.e6 = 2;
            this.step.contentStep2 = "初试未通过";
            this.step.color2 = "red";
            this.step.step2 = "×";
          } else if (res.data[0].status == 31) {
            this.e6 = 3;
            this.contentStep3 = "复试全部通过";
          } else if (res.data[0].status == 32) {
            this.e6 = 3;
            this.step.contentStep3 = "复试通过但没有完全通过";
          } else if (res.data[0].status == 33) {
            this.e6 = 3;
            this.step.contentStep3 = "复试未通过";
            this.step.color3 = "red";
            this.step.step3 = "×";
          } else if (res.data[0].status == 4) {
            this.e6 = res.data[0].status;
          } else if (res.data[0].status == 41) {
            this.e6 = 4;
            this.step.contentStep4 = "您已经确认加入我们";
            this.joinDisabled = true;
            this.surrenderDisabled = true;
          } else if (res.data[0].status == 42) {
            this.e6 = 4;
            this.step.contentStep4 = "您已经拒绝加入我们";
            this.joinDisabled = true;
            this.surrenderDisabled = true;
          }
        })
        .catch((err) => {
          console.log("出现错误");
        });
    }
  },
};
</script>

<style scoped>
.timeline-box {
  padding-left: 10%;
  padding-right: 10%;
}

.stepper {
  box-shadow: 0px 3px 4px -2px rgb(0 0 0 / 20%), 0px 12px 31px 0px rgb(0 0 0 / 14%),
    0px 1px 22px 0px rgb(0 0 0 / 12%) !important;
}

.rewrite {
  float: right;
  margin-top: 2%;
}

.text-field-box {
  padding: 10px 10px;
}
</style>
