<template>
  <div>
    <!-- overlays -->
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title
            class="text-h5 grey lighten-2"
            style="color: red; font-size: 1.3rem !important"
          >
            报名流程！！！（此对话框可以可以向下滑动）
          </v-card-title>
          <div>
            <video
              id="videoOne"
              style="margin: 10px auto;display: block;}"
              width="65%"
              controls
            >
              <source
                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/BD124B61ACDE922264FB0C2E4BD9EE28_1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <v-card-text>
            欢迎来到橙果工作室纳新系统~<br />
            进行报名之前请先扫描二维码加入我们的官方纳新qq群。顶部视频将对报名流程进行简介，请务必观看。
            <div style="width: 100%">
              <img
                style="display: block; margin: 0 auto"
                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%A9%99%E6%9E%9C%E5%B7%A5%E4%BD%9C%E5%AE%A421%E7%BA%A7%E6%96%B0%E7%94%9F%E4%BA%A4%E6%B5%81%E7%BE%A4%E7%BE%A4%E8%81%8A%E4%BA%8C%E7%BB%B4%E7%A0%81.png?x-oss-process=image/format,jpg/interlace,1"
              />
            </div>

            下面介绍该系统使用方法，本页是首页，在这里你能简单了解工作室的大体情况。
            <br />若想报名，请点击页面左上角“≡”按钮；点击"我要报名"，进行报名；点击"查询报名进度"，可以查看自己的报名状态。
            <v-container class="px-0" fluid>
              <v-switch v-model="switch1" label="下次不再提示"></v-switch>
            </v-container>
          </v-card-text>
          <!-- radio -->

          <!--  -->
          <v-divider></v-divider>
          <!--  -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="closeDialog"> 我知道了 </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <!-- top -->
    <v-container>
      <v-row>
        <v-col>
          <v-card :height="sidePic.height" class="mx-auto">
            <v-card-text>
              <v-img
                lazy-src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/11lazy_1_.webp?x-oss-process=image/interlace,1"
                :src="sidePic.src"
                v-show="summerShowPc"
              >
                <v-col cols="5" offset="1" class="summer-off-box">
                  <p class="text-h4 text--primary">欢迎你们——未来的“小橙子~”</p>
                  <p>orange studio</p>
                  <div class="text--primary summer-box">
                    <p>初入工大，还未领略图书馆的庄严肃穆，宿舍楼的温暖安详，</p>
                    <p>实验北和机电A也还是未知之地、神秘之所。</p>

                    <p>此刻，你或许坐在椅上，激战峡谷；</p>
                    <p>或许躺在床上，追随月光……</p>
                    <p>
                      有时就着漫天朝霞，憧憬未来的大学时光，却不由想起五月的阳光，黯然神伤。
                    </p>
                    <p>
                      我们，总是贪恋舒适区的安详，当思绪飞到陌生的土地上方，对自己无数疑问便爬到心上。
                    </p>
                    <p>来工大做什么？毕业之后将成为什么样的人？</p>
                    <p>其实更想知道，M78星云的光是否曾照耀远方~</p>
                    <p>其实更想知道的是，进入大学后的我，此刻，到底最需要的是什么？</p>
                  </div>
                  <v-card-actions>
                    <v-btn text color="teal accent-4">
                      <a href="http://139.9.118.85:99/#/" target="_blank"
                        >现在，我将告诉你答案——橙果工作室。</a
                      >
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-img>

              <v-img
                lazy-src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%A9%99%E6%9E%9C%E5%90%8D%E7%89%872lazy_1_.webp?x-oss-process=image/interlace,1"
                :src="sidePic.srcMobile"
                v-show="summerShowMo"
              ></v-img>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- center -->
    <v-container>
      <v-row>
        <!-- left -->
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card>
            <v-card-text>
              <v-card-text>
                <p class="text-h4 text--primary">小组介绍</p>
                <p>Group Introduction</p>
                <div class="text--primary">
                  <p class="group-text-box text-box-lineh">
                    硬件组，学习硬件知识，打通底层逻辑；<br />
                    嵌入式组，赋能传统装备，万物皆可智能；<br />
                    网站组，寥寥数行代码，页面千变万化；<br />
                    大数据组，分析数据变化，决胜数据时代；<br />
                    程序设计组，大道至简，行稳致远。
                  </p>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="deep-purple accent-4"
                  href="http://139.9.118.85:99/#/website"
                  >欢迎加入学习小组~</v-btn
                >
              </v-card-actions>
            </v-card-text>

            <v-card-text>
              <v-img
                class="img-box"
                lazy-src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/e11b3c01b0e28dc1178eb89c05a5ece7_401728828-_1__1_.webp?x-oss-process=image/interlace,1"
                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/ooy-_2__1_.webp?x-oss-process=image/format,jpg/interlace,1"
              ></v-img>

              <v-card-text>
                <p class="text-h4 text--primary">部门简介</p>
                <p>Department introduction</p>
                <div class="text--primary">
                  <p class="text-box-lineh group-text-box">
                    学习部、秘书部、宣传部、外联部，作为社团运行中枢，统筹负责工作室的日常运营。包括各种活动的筹备和举办、成员学习进度的督导、资源的协调和调配，大小会议室的使用（工作室设有专门的会议室当作自习室向同学们开放，干净整洁、安静、配备空调和热水!）
                  </p>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="teal accent-4" href="http://139.9.118.85:99/#/study"
                  >欢迎加入管理部门~</v-btn
                >
              </v-card-actions>
            </v-card-text>
            <br />

            <v-card-text>
              <v-sparkline
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
                show-labels
                :labels="labels"
              ></v-sparkline>
            </v-card-text>
          </v-card>

          <br />
          <v-card>
            <v-card-text style="height: 423px; overflow: auto">
              <v-card-text>
                <div></div>
                <p class="text-h4 text--primary">成果er展示</p>
                <p>此卡片内部可以向下滑动</p>
                <div class="text--primary">
                  <p class="group-text-box text-box-lineh">
                    制作和维护学校以及学院官网以及工作室官网。<br />
                    搭建和维护大学城融创云平台。 <br />作为电脑义诊的主力服务师生。<br />
                    参加电子设计大赛、机器人竞赛等大型竞赛。<br />
                    对社团成员以及广大师生开展信息化科普，提高我校信息化素质。<br />
                    设计制作新生返校数据之大屏展示。<br />
                  </p>
                </div>
              </v-card-text>

              <div>
                <v-card-title>我的橙果，分你一半</v-card-title>
                <v-card-title
                  >一群志同道合的人聚集在一起，共同完成心中的梦想。</v-card-title
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <!-- right -->

        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card>
            <v-card-text>
              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-card height="200">
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <v-img
                          height="200"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.1)"
                          lazy-src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/1.2lazy_1_.webp?x-oss-process=image/interlace,1"
                          src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/1.2-_1__1_.webp?x-oss-process=image/interlace,1"
                        ></v-img>
                        <v-card-title
                          style="position: absolute; color: white;font-weight: 500;top: 138px;}"
                          >电脑义诊</v-card-title
                        >
                      </div>
                    </v-card>
                    <br />
                    <v-card height="200">
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <v-img
                          height="200"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          lazy-src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/1.1lazy-_1__1_.webp?x-oss-process=image/interlace,1"
                          src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/1.1-_1__1_%20(1).webp?x-oss-process=image/interlace,1"
                        ></v-img>
                        <v-card-title
                          style="position: absolute; color: white;font-weight: 500;top: 138px; font-size: 1rem;}"
                          >Eat(); Sleep(); Code(); Repeat();</v-card-title
                        >
                      </div>
                    </v-card>
                    <br />
                    <v-card height="200">
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <v-img
                          height="200"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          lazy-src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/1.3lazy(1).webp?x-oss-process=image/interlace,1"
                          src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/1.3-_1__1_.webp?x-oss-process=image/interlace,1"
                        ></v-img>
                        <v-card-title
                          style="position: absolute; color: white;font-weight: 500;top: 138px;}"
                          >清灰换硅脂</v-card-title
                        >
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <br />
          <v-card>
            <v-card-text>
              <div class="content-box-right">
                <v-card-text>
                  <div>学习氛围浓厚</div>
                  <p class="text-h4 text--primary">势力范围介绍</p>
                  <p>adjective</p>
                  <div class="text--primary">
                    <p class="text-box-lineh group-text-box">
                      社团主要活动场所位于图书馆一楼东南部的网络信息中心，共包括：大会议室，小会议室，研发小屋，维修仓库，社团办公室等部分。其中大会议室除用于举办社团活动之外作为24小时自习室开放，为同学们提供干净整洁、安静的学习环境。小会议室在必要时刻亦可用于自习。此外，我们将提供二十余个工位给有需求的同学使用，以支持他的学习和实践活动。
                    </p>
                  </div>
                </v-card-text>
              </div>

              <v-carousel cycle show-arrows-on-hover :height="carouselHeight">
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :src="slide.src"
                  :lazy-src="slide.lazysrc"
                  :key="i"
                >
                  <!-- <v-img :src="slide"></v-img -->
                  ></v-carousel-item
                >
              </v-carousel>
            </v-card-text>
          </v-card>
          <br />

          <v-card>
            <v-card-text>
              <div>
                <v-img
                  style="background-size: 90%"
                  lazy-src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210920215534lazy(1).webp?x-oss-process=image/interlace,1"
                  src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20210920215534(1).webp?x-oss-process=image/interlace,1"
                ></v-img>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- down -->
    <v-container>
      <v-row>
        <!-- left -->
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="mx-auto">
            <v-card-text>
              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-card-title style="color: black" class="text-h5"
                      >培养计划</v-card-title
                    >

                    <p class="group-text-box text-box-lineh">
                      全方位了解计算机领域知识同时，按照各组研究方向展开进一步学习和实践活动。
                      “导师制”助力大学生涯不迷茫。 “项目制”让你学有所练，练有所得。
                    </p>

                    <!-- <v-card-actions>
                      <v-btn text>Listen Now</v-btn>
                    </v-card-actions> -->
                  </v-col>

                  <v-col v-for="(item, i) in items" :key="i" cols="12">
                    <v-img height="150" class="img-box" :imgColor="item.imgColor">
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-card-title
                            class="text-h5"
                            v-text="item.title"
                            :style="item.fontStyle"
                          ></v-card-title>

                          <v-card-subtitle
                            v-text="item.artist"
                            :style="item.fontStyle"
                          ></v-card-subtitle>

                          <v-card-actions>
                            <v-btn
                              v-if="item.artist === 'Ellie Goulding'"
                              class="ml-2 mt-3"
                              fab
                              icon
                              height="40px"
                              right
                              width="40px"
                            >
                              <v-icon>mdi-play</v-icon>
                            </v-btn>

                            <v-btn v-else class="ml-2 mt-5" outlined rounded small
                              ><a class="button" :style="item.fontStyle" :href="item.src"
                                >LEARN MORE</a
                              ></v-btn
                            >
                          </v-card-actions>
                        </div>

                        <v-avatar class="ma-3" size="125" tile></v-avatar>
                      </div>
                    </v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
        <!-- right -->
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="mx-auto">
            <v-card-text>
              <v-container fluid>
                <v-row dense>
                  <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                    <v-card>
                      <v-img
                        :lazy-src="card.lazysrc"
                        :src="card.src"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
                        height="229px"
                      >
                        <v-card-title
                          v-text="card.title"
                          style="font-size: 1rem"
                        ></v-card-title>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  name: "Home",
  data: () => ({
    dialog: true,
    switch1: false,
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [30, 40, 45, 65, 87, 88, 94],
    labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,

    carousel: {
      height: 700,
    },
    sidePic: {
      height: "",
      src:
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/aqccb-itej1.webp?x-oss-process=image/interlace,1",
      srcMobile:
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%A9%99%E6%9E%9C%E5%90%8D%E7%89%872-_1__1_.webp?x-oss-process=image/interlace,1",
    },
    items: [
      {
        color: "#1F7087",
        src: "https://mp.weixin.qq.com/s/nqc-5W1RpKziuEo5AbTy0A",
        title: "导师计划",
        artist: "sessions",
        imgSrc: "https://mp.weixin.qq.com/s/nqc-5W1RpKziuEo5AbTy0A",
        imgColor: "img1",
        fontStyle: "color:black",
      },
      {
        color: "#952175",
        src: "https://mp.weixin.qq.com/s/q8KBJgThg7GOUgU-lgXOOg",
        title: "项目驱动",
        artist: " project-based",
        imgSrc: "linear-gradient(to right,#d84c4c,#e8a45d,#e5f1a5)",
        imgColor: "img2",
        fontStyle: "color:white",
      },
    ],
    cards: [
      {
        title: "我的橙果，分你一半",
        src:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E8%83%8C%E6%99%AF(1).webp?x-oss-process=image/interlace,1",
        lazysrc:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E8%83%8C%E6%99%AFlazy(1).webp?x-oss-process=image/interlace,1",
        flex: 12,
      },
      {
        title: "Orange Studio",
        src:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/6.6(1).webp?x-oss-process=image/interlace,1",
        lazysrc:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/6.6lazy(1).webp?x-oss-process=image/interlace,1",
        flex: 6,
      },
      {
        title: "Eat code sleep loop",
        src:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/9.9%20(1)(1).webp?x-oss-process=image/interlace,1",
        lazysrc:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/9.9lazy(1).webp?x-oss-process=image/interlace,1",
        flex: 6,
      },
    ],
    rightHeight: 0,
    messages: [
      {
        from: "You",
        message: `Sure, I'll see you later.`,
        time: "10:42am",
        color: "deep-purple lighten-1",
      },
      {
        from: "John Doe",
        message: "Yeah, sure. Does 1:00pm work?",
        time: "10:37am",
        color: "green",
      },
      {
        from: "You",
        message: "Did you still want to grab lunch today?",
        time: "9:47am",
        color: "deep-purple lighten-1",
      },
    ],
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: [
      {
        src:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_20210905_153521(1)%20(1)(1).webp?x-oss-process=image/interlace,1",
        lazysrc:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_20210905_153521(1)lazy(1).webp?x-oss-process=image/interlace,1",
      },
      {
        src:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_011%20(1)(1).webp?x-oss-process=image/interlace,1",
        lazysrc:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_011lazy(1).webp?x-oss-process=image/interlace,1",
      },
      {
        src:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_20210905_153855(1)%20(1)(1).webp?x-oss-process=image/interlace,1",
        lazysrc:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_20210905_153855(1)lazy(1).webp?x-oss-process=image/interlace,1",
      },
      {
        src:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_013%20(1)(1).webp?x-oss-process=image/interlace,1",
        lazysrc:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/IMG_01lazy(1).webp?x-oss-process=image/interlace,1",
      },
    ],
    carouselHeight: 555.9,
    screenWidth: document.body.clientWidth,
    summerShowPc: true,
    summerShowMo: false,
  }),
  created() {
    var de = document.documentElement;
    const result = de.offsetWidth;

    if (result <= 600) {
      this.carousel.height = 200;
      this.sidePic.height = 300;
      this.sidePic.src =
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/aqccb-itej1.webp?x-oss-process=image/interlace,1";
      this.rightHeight = 300;
      this.summerShowPc = false;
      this.summerShowMo = true;
    } else {
      this.summerShowPc = true;
      this.summerShowMo = false;
    }
    if (localStorage.getItem("flag") == "true") {
      this.dialog = false;
    }
  },
  mounted() {
    let carouselWidth = document.getElementsByClassName("col-6")[0].offsetWidth - 32;
    this.carouselHeight = carouselWidth * 1.5047;

    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;

        let carouselWidth = document.getElementsByClassName("col-6")[0].offsetWidth - 32;
        setInterval(function () {
          // 打印screenWidth变化的值
          if (that.screenWidth <= 600) {
            that.carouselHeight = 238.18;
            that.carousel.height = 200;
            that.sidePic.height = 300;
            that.sidePic.src =
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/aqccb-itej1.webp?x-oss-process=image/interlace,1";
            that.rightHeight = 300;
            that.carouselHeight = carouselWidth * 1.5047;
          } else {
            that.carouselHeight = 555.9;
            that.carousel.height = 700;
            that.sidePic.height = "";
            that.sidePic.src =
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/aqccb-itej1.webp?x-oss-process=image/interlace,1";
            that.rightHeight = 599;
            that.carouselHeight = carouselWidth * 1.5047;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  methods: {
    closeDialog() {
      this.dialog = false;
      var videoElement = document.getElementById("videoOne");
      videoElement.pause();
      localStorage.setItem("flag", this.switch1);
    },
  },
};
</script>

<style scoped>
.content-box {
  height: 172px;
}

.content-box-right {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}

.img-box {
  border-radius: 6px;
}

[imgColor="img1"] {
  background-image: linear-gradient(to right, #d8eddd, #c3e4e5, #a5d7f1);
}
[imgColor="img2"] {
  background-image: linear-gradient(
    to right,
    rgb(242, 57, 101),
    rgb(248, 99, 66),
    rgb(253, 132, 41)
  );
}

.summer-box {
  font-size: 20px;
}

.summer-off-box {
  padding-top: 7%;
}
.group-text-box {
  font-size: 1rem !important;
}

.text-box-lineh {
  line-height: 31px;
}

.content-box-right[data-v-fae5bece] {
  white-space: normal !important;
}

.button {
  text-decoration: none;
}
</style>
