<template>
  <v-footer height="10px">
    <v-container fluid>
      <v-row>
        <v-col md="12">
          <v-card tile class="background lighten-1 white--text text-center">
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
              amet. Mauris cursus commodo interdum. Praesent ut risus eget metus
              luctus accumsan id ultrices nunc. Sed at orci sed massa
              consectetur dignissim a sit amet dui.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
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
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
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
  background-image: url("https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/ING_1901.png");

}
</style>