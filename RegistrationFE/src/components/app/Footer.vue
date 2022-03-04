<template>
  <v-footer height="10px">
    <v-container fluid>
      <v-row>
        <v-col md="12">
          <v-card tile class="background lighten-1 white--text text-center">
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon.icon"
                :href="icon.src"
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px">
                  {{ icon.icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
              我们的理念：我的橙果，分你一半。
              我们的宗旨：一群志同道合的人聚集在一起，共同完成心中的梦想。
              我们的社风：自由，平等，开放，温馨，团结，活泼、充满活力，充满创造力。
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} —
              <strong>本网站由橙果工作室网站组强力驱动。</strong>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    icons: [
      {
        icon: "mdi-home",
        src: "http://139.9.118.85:99/#/",
      },
      {
        icon: "mdi-television-classic",
        src:
          "https://space.bilibili.com/432449492?spm_id_from=333.788.b_765f7570696e666f.1",
      },
      {
        icon: "mdi-wechat",
        src: "https://mp.weixin.qq.com/s/lb5OO7W2zVnEJSOPydFnYw",
      },
      {
        icon: "mdi-account-multiple-plus",
        src: "https://jq.qq.com/?_wv=1027&k=Cn20ZgFp",
      },
    ],
  }),
  methods: {},
};
</script>

<style scoped>
footer {
  padding: 0;
}

.container .row .col {
  padding: 0;
}

.background {
  background-image: url("https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/ING_1901.png?x-oss-process=image/format,jpg/interlace,1");
}
</style>
