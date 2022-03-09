<template>
  <div>
    <v-container>
      <v-card class="mx-auto" max-width="1800">
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="card in cards"
              :key="card.title"
              :md="card.flex"
              :cols="card.flexx"
            >
              <template v-for="s in card.src">
                <v-card :flag="card.flag" :height="card.height" light>
                  <v-img
                    :height="card.height"
                    :lazy-src="card.lazysrc"
                    :src="s"
                    class="white--text align-end"
                  >
                    <!-- 二 -->
                    <div
                      v-show="card.flagCover === 'a'"
                      class="box"
                      style="overflow: auto"
                    >
                      <v-card-text>
                        <div>Group Activity</div>
                        <p
                          class="text-h4 text--primary"
                          style="font-size: 1.5rem !important"
                        >
                          小组活动
                        </p>
                        <p>adjective</p>
                        <div class="text--primary">
                          学习知识、经验分享、头脑风暴为主要组成的小组活动是橙果er日常活动的主要形式。
                          <br />
                          <br />在这里，学长和学姐会带领大家推开信息世界遮掩许久的门户，走入广阔无垠的互联网世界，开启“程序人生”。同时这里也是沟通交流的平台，无数奇思妙想在这里生发，头脑风暴在这里酝酿。
                          <br />
                          <br />用知识去创造，用热爱去碰撞下个“风口”，或许就将由你来创造！
                        </div>
                      </v-card-text>
                    </div>
                    <!-- 四 -->
                    <div v-show="card.flagCover === 'b'" class="box">
                      <v-img
                        class="white--text align-end"
                        height="300px"
                        lazy-src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/A3DB8F73D9F0BC8748CB2BEBB859782Flazy.webp"
                        src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/A3DB8F73D9F0BC8748CB2BEBB859782F-_1_.webp"
                      >
                        <v-card-title>橙果电脑服务日</v-card-title>
                      </v-img>

                      <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

                      <v-card-text
                        class="text--primary"
                        style="height: 35%; overflow: auto"
                      >
                        电脑服务日是橙果er的传统活动，由两大部分组成。最初呢，主要活动为电脑义诊，旨在帮助师生解决一些不太复杂的的软硬件问题，为广大师生做一些力所能及的事情。
                        <br />在2020年伊始，我们加入了“信息化科普”活动，作为信息化科普的全新阵地。两大活动同组成了现在的“电脑服务日”活动，从而更好地普及知识，服务师生。
                      </v-card-text>
                    </div>
                    <!-- 六 -->
                    <div v-show="card.flagCover === 'c'" class="box">
                      <v-card class="mx-auto" color="#26c6da" dark height="500">
                        <v-card-title>
                          <v-icon large left> Orange Studio </v-icon>
                        </v-card-title>

                        <v-card-text class="text-h5 font-weight-bold">
                          学长寄语
                        </v-card-text>

                        <v-card-actions>
                          <v-list-item class="grow">
                            <v-list-item-avatar color="grey darken-3">
                              <v-img
                                class="elevation-6"
                                alt=""
                                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/295854713_1a2ff5e8d905d62b98ef04be580b91f9.jpg"
                              ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                              <v-list-item-title>
                                Eat(); Sleep(); Code();Loop();
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card-actions>

                        <v-card-actions>
                          <v-list-item class="grow">
                            <v-list-item-avatar color="grey darken-3">
                              <v-img
                                class="elevation-6"
                                alt=""
                                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/Z91P@X5F%7B%60V36O4S3J@U%60OV.bmp"
                              ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                              <v-list-item-title>
                                老当益壮，宁移白首之心？穷且益坚，不坠青云之志。
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card-actions>

                        <v-card-actions>
                          <v-list-item class="grow">
                            <v-list-item-avatar color="grey darken-3">
                              <v-img
                                class="elevation-6"
                                alt=""
                                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%7D9VBYE_GCVT2DBIJD6U8YFB.bmp"
                              ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                              <v-list-item-title>
                                人之所以能，是相信能。
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card-actions>

                        <v-card-actions>
                          <v-list-item class="grow">
                            <v-list-item-avatar color="grey darken-3">
                              <v-img
                                class="elevation-6"
                                alt=""
                                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20CA94BA4732530C9703E23109536944.jpg"
                              ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                              <v-list-item-title>
                                人生伟业的建立，不在能知，乃在能行。
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card-actions>
                      </v-card>
                    </div>
                  </v-img>
                </v-card>
              </template>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    asd: false,
    winsowWidth: 0,
    cards: [
      {
        title: "Pre-fab homes",
        lazysrc: [""],
        src: [""],
        flex: 6,
        flexx: 12,
        height: "",
        flagCover: false,
      },
      {
        title: "Pre-fab homes",
        lazysrc: [""],
        src: [""],
        flex: 3,
        flexx: 6,
        height: 500,
        flag: "",
        flagCover: "a",
      },
      {
        title: "Favorite road trips",
        lazysrc: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%8B%BC%E5%90%881-_1_lazy.webp",
        ],
        src: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%8B%BC%E5%90%881-_3_.webp",
        ],
        flex: 3,
        flexx: 6,
        height: 500,
        flagCover: false,
      },
      {
        title: "Favorite road trips",
        src: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/09C7332C3952414D00488E84B56007EE.webp",
        ],
        flex: 3,
        flexx: 12,
        height: 500,
        flagCover: "b",
      },
      {
        title: "Best airlines",
        src: [""],
        flex: 3,
        flexx: 6,
        height: 240,
        flag: "",
        flagCover: false,
      },
      {
        title: "Pre-fab homes",
        src: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/09C7332C3952414D00488E84B56007EE.webp",
        ],
        flex: 6,
        flexx: 6,
        height: 500,
        flagCover: "c",
      },
    ],
    screenWidth: document.body.clientWidth,
  }),
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };

    if (that.screenWidth <= 600) {
      that.cards[0].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/3.2.2-_2_.webp",
      ];
      that.cards[0].lazysrc = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/3.2.2lazy.png",
      ];
      that.cards[0].height = "";

      that.cards[2].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%89%8B%E6%9C%BA.%E6%8B%BC%E5%90%88-_1_.webp",
      ];
      that.cards[2].lazysrc = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%89%8B%E6%9C%BA.%E6%8B%BC%E5%90%88lazy.jpg",
      ];

      that.cards[4].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%89%8B%E6%9C%BA.%E7%94%B5%E8%84%91%E4%B9%89%E8%AF%8A.jpg",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%89%8B%E6%9C%BA.%E5%A4%A7%E4%BC%9A%E8%AE%AE%E5%AE%A4.jpg",
      ];
    } else {
      that.cards[0].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%90%88%E7%85%A7.png?x-oss-process=image/format,jpg/interlace,1",
      ];
      that.cards[0].lazysrc = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%90%88%E7%85%A7lazy.png?x-oss-process=image/format,jpg/interlace,1",
      ];
      that.cards[2].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%8B%BC%E5%90%881-_3_.webp",
      ];
      that.cards[2].lazysrc = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%8B%BC%E5%90%881-_1_lazy.webp",
      ];
      that.cards[4].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/2.7.png",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/2.5.png",
      ];

      that.cards[0].height = 500;
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

        setTimeout(function () {
          // 打印screenWidth变化的值
          console.log(that.screenWidth);
          if (that.screenWidth <= 600) {
            that.cards[0].src = [
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/3.2.2-_2_.webp",
              (height = ""),
            ];

            that.cards[2].src = [
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%89%8B%E6%9C%BA.%E6%8B%BC%E5%90%88-_1_.webp",
            ];

            that.cards[4].src = [
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%89%8B%E6%9C%BA.%E7%94%B5%E8%84%91%E4%B9%89%E8%AF%8A.jpg",
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%89%8B%E6%9C%BA.%E5%A4%A7%E4%BC%9A%E8%AE%AE%E5%AE%A4.jpg",
            ];

            that.cards[0].height = "";
          } else {
            that.cards[0].src = [
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E5%90%88%E7%85%A7.png",
              (height = 500),
            ];
            that.cards[2].src = [
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/%E6%8B%BC%E5%90%881-_3_.webp",
            ];
            that.cards[4].src = [
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/2.7.png",
              "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/2.5.png",
            ];
            that.cards[0].height = 500;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  created() {},
};
</script>

<style scoped>
.white--text {
  height: 100%;
}

.col-md-3,
.col-md-6 {
  margin-bottom: 10px !important;
}

[flag] {
  margin-bottom: 20px;
}

.col-md-3[data-v-039c5b43],
.col-md-6[data-v-039c5b43] {
  margin-bottom: -10px !important;
}

.box {
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
}
@media screen and (max-width: 600px) {
  .v-card__actions {
    width: 100%;
    overflow: auto !important;
  }
}
</style>
