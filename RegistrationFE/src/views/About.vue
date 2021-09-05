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
                <v-card :flag="card.flag" :height="card.height" :key="s" light>
                  <v-img
                    :height="card.height"
                    :src="s"
                    class="white--text align-end"
                  >
                    <div v-show="card.flagCover === 'a'" class="box">
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
                              where alms were distributed): from medieval Latin
                              eleemosynarius, from late Latin eleemosyna ‘alms’,
                              from Greek eleēmosunē ‘compassion’
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
                    </div>

                    <div v-show="card.flagCover === 'b'" class="box">
                      <v-img
                        class="white--text align-end"
                        height="300px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                      >
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                      </v-img>

                      <v-card-subtitle class="pb-0">
                        Number 10
                      </v-card-subtitle>

                      <v-card-text class="text--primary">
                        <div>Whitehaven Beach</div>

                        <div>Whitsunday Island, Whitsunday Islands</div>
                      </v-card-text>

                      <v-card-actions>
                        <v-btn color="orange" text> Share </v-btn>

                        <v-btn color="orange" text> Explore </v-btn>
                      </v-card-actions>
                    </div>
                    <!--  -->
                    <div v-show="card.flagCover === 'c'" class="box">
                      <v-card class="mx-auto" color="#26c6da" dark height="500">
                        <v-card-title>
                          <v-icon large left> mdi-twitter </v-icon>
                          <span class="text-h6 font-weight-light">Twitter</span>
                        </v-card-title>

                        <v-card-text class="text-h5 font-weight-bold">
                          "Turns out semicolon-less style is easier and safer in
                          TS because most gotcha edge cases are type invalid as
                          well." "Turns out semicolon-less style is easier and
                          safer in TS because most gotcha edge cases are type
                          invalid as well." "Turns out semicolon-less style is
                          easier and safer in TS because most gotcha edge cases
                          are type invalid as well."
                        </v-card-text>

                        <v-card-actions>
                          <v-list-item class="grow">
                            <v-list-item-avatar color="grey darken-3">
                              <v-img
                                class="elevation-6"
                                alt=""
                                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                              ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                              <v-list-item-title>Evan You</v-list-item-title>
                            </v-list-item-content>

                            <v-row align="center" justify="end">
                              <v-icon class="mr-1"> mdi-heart </v-icon>
                              <span class="subheading mr-2">256</span>
                              <span class="mr-1">·</span>
                              <v-icon class="mr-1"> mdi-share-variant </v-icon>
                              <span class="subheading">45</span>
                            </v-row>
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
        src: ["https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/3.2.png"],
        flex: 6,
        flexx: 12,
        height: 500,
        flagCover: false,
      },
      {
        title: "Pre-fab homes",
        src: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/09C7332C3952414D00488E84B56007EE.jpg",
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/09C7332C3952414D00488E84B56007EE.jpg",
        ],
        flex: 3,
        flexx: 6,
        height: 240,
        flag: "",
        flagCover: "a",
      },
      {
        title: "Favorite road trips",
        src: ["https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/2(1).png"],
        flex: 3,
        flexx: 6,
        height: 500,
        flagCover: false,
      },
      {
        title: "Favorite road trips",
        src: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/09C7332C3952414D00488E84B56007EE.jpg",
        ],
        flex: 3,
        flexx: 12,
        height: 500,
        flagCover: "b",
      },
      {
        title: "Best airlines",
        src: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/4(1).png",
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/5(1).png",
        ],
        flex: 3,
        flexx: 6,
        height: 240,
        flag: "",
        flagCover: false,
      },
      {
        title: "Pre-fab homes",
        src: [
          "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/09C7332C3952414D00488E84B56007EE.jpg",
        ],
        flex: 6,
        flexx: 6,
        height: 500,
        flagCover: "c",
      },
    ],
  }),
  methods: {},
  created() {
    var de = document.documentElement;
    const result = de.offsetWidth;

    if (result <= 600) {
      this.cards[2].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/m.4.jpg",
      ];

      this.cards[4].src = [
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/m.3.jpg",
        "https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/m.2.jpg",
      ];

      this.cards[0].height = "";
    }
  },
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
</style>
