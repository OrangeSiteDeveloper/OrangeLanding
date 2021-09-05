<template>
  <div>
    <!-- top -->
    <v-container>
      <v-row>
        <v-col>
          <v-card :height="sidePic.height" class="mx-auto">
            <v-card-text>
              <v-img :src="sidePic.src"></v-img>
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
                <div>Word of the Day</div>
                <p class="text-h4 text--primary">be•nev•o•lent</p>
                <p>adjective</p>
                <div class="text--primary">
                  well meaning and kindly.<br />
                  "a benevolent smile"
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
              </v-card-actions>

              <div>
                <v-card-title> Top western road trips </v-card-title>
              </div>
            </v-card-text>

            <v-card-text>
              <v-img
                class="img-box"
                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/e11b3c01b0e28dc1178eb89c05a5ece7_401728828.jpg"
              ></v-img>

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
                <v-btn text color="teal accent-4" @click="reveal = true">
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
                      late 16th century (as a noun denoting a place where alms
                      were distributed): from medieval Latin eleemosynarius,
                      from late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                      ‘compassion’
                    </p>
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn text color="teal accent-4" @click="reveal = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
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
              ></v-sparkline>
            </v-card-text>
          </v-card>
          <br />
          <v-card>
            <v-card-text>
              <v-card-text>
                <div>Word of the Day</div>
                <p class="text-h4 text--primary">be•nev•o•lent</p>
                <p>adjective</p>
                <div class="text--primary">
                  well meaning and kindly.<br />
                  "a benevolent smile"
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
              </v-card-actions>

              <div>
                <v-card-title> Top western road trips </v-card-title>
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
                    <v-card height="200" dark>
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <v-img
                          height="200"
                          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                        ></v-img>
                      </div>
                    </v-card>
                    <br />
                    <v-card height="200" dark>
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <v-img
                          height="200"
                          src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
                        ></v-img>
                      </div>
                    </v-card>
                    <br />
                    <v-card height="200" dark>
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <v-img
                          height="200"
                          src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
                        ></v-img>
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
                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

                <v-card-text>
                  <div>Word of the Day</div>
                  <p class="text-h4 text--primary">el·ee·mos·y·nar·y</p>
                  <p>adjective</p>
                  <div class="text--primary">
                    relating to or dependent on charity; charitable.<br />
                    "an eleemosynary educational institution."
                  </div>
                  <div class="text--primary">
                    relating to or dependent on charity; charitable.<br />
                    "an eleemosynary educational institution."
                  </div>
                  <div class="text--primary">
                    relating to or dependent on charity; charitable.<br />
                    "an eleemosynary educational institution."
                  </div>
                  <div class="text--primary">
                    relating to or dependent on charity; charitable.<br />
                  </div>
                  <div class="text--primary">
                    relating to or dependent on charity; charitable.<br />
                    "an eleemosynary educational institution."
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="teal accent-4" @click="reveal = true">
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
                        late 16th century (as a noun denoting a place where alms
                        were distributed): from medieval Latin eleemosynarius,
                        from late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                        ‘compassion’
                      </p>
                    </v-card-text>
                    <v-card-actions class="pt-0">
                      <v-btn text color="teal accent-4" @click="reveal = false">
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition>
              </div>
              <v-img
                class="white--text align-end img-box"
                src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/1.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- down -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="mx-auto">
            <v-card-text>
              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-card-title style="color: black" class="text-h5">
                      Unlimited music now
                    </v-card-title>

                    <v-card-subtitle style="color: black"
                      >Listen to your favorite artists and albums whenever and
                      wherever, online and offline.</v-card-subtitle
                    >

                    <v-card-actions>
                      <v-btn text> Listen Now </v-btn>
                    </v-card-actions>
                  </v-col>

                  <v-col v-for="(item, i) in items" :key="i" cols="12">
                    <v-img height="150" class="img-box" :src="item.imgSrc">
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-card-title
                            class="text-h5"
                            v-text="item.title"
                          ></v-card-title>

                          <v-card-subtitle
                            v-text="item.artist"
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

                            <v-btn
                              v-else
                              class="ml-2 mt-5"
                              outlined
                              rounded
                              small
                            >
                              START RADIO
                            </v-btn>
                          </v-card-actions>
                        </div>

                        <v-avatar class="ma-3" size="125" tile>
                          <!-- <v-img :src="item.src"></v-img> -->
                        </v-avatar>
                      </div>
                    </v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="mx-auto">
            <v-card-text>
              <v-container fluid>
                <v-row dense>
                  <v-col
                    v-for="card in cards"
                    :key="card.title"
                    :cols="card.flex"
                  >
                    <v-card>
                      <v-img
                        :src="card.src"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="229px"
                      >
                        <v-card-title v-text="card.title"></v-card-title>
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
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,
    itemss: [
      {
        src: "https://i.loli.net/2021/09/01/TtksBmOr4Ff3ybW.jpg",
      },
      {
        src: "https://i.loli.net/2021/09/01/iJhNXTE2ytvb9U1.jpg",
      },
      {
        src: "https://i.loli.net/2021/08/31/1RG28JezpYkPl7c.jpg",
      },
      {
        src: "https://i.loli.net/2021/09/01/eoAOGTvfnquQZ3U.jpg",
      },
    ],

    carousel: {
      height: 700,
    },
    sidePic: {
      height: "",
      src: "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/11.png",
    },
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
        imgSrc:
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/699pic_e11b3c01b0e28dc1178eb89c05a5ece7_401728828.jpg",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
        imgSrc: "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/1.jpg",
      },
    ],
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
    ],
    rightHeight: 599,
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
  }),
  created() {
    var de = document.documentElement;
    const result = de.offsetWidth;

    if (result <= 600) {
      this.carousel.height = 200;
      this.sidePic.height = 300;
      this.sidePic.src =
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/12.png";
      this.rightHeight = 300;
    }
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
</style>

