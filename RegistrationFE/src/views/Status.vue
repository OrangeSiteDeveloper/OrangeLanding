<template>
  <div>
    <!-- 进度 -->
    <v-container>
      <v-stepper
        class="stepper"
        v-model="e6"
        vertical
      >
        <!-- 1 -->
        <v-stepper-step :complete="e6 > 1" step="1">
          报名成功
          <small>请关注录取进程</small>
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-card color="grey lighten-1" class="mb-12" height="200px">
            <v-img
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            ></v-img>
          </v-card>
          <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
        <!-- 2 -->
        <v-stepper-step :complete="e6 > 2" step="2"> 初试通过 </v-stepper-step>
        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" height="200px">
            <v-img
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
            ></v-img>
          </v-card>
          <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
        <!-- 3 -->
        <v-stepper-step :complete="e6 > 3" step="3">复试通过</v-stepper-step>
        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px">
            <v-img
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
            ></v-img>
          </v-card>
          <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
        <!-- 4 -->
        <v-stepper-step step="4">确认加入</v-stepper-step>
        <v-stepper-content step="4">
          <v-card color="grey lighten-1" class="mb-12" height="200px">
            <v-img
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            ></v-img>
          </v-card>
          <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
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
                  <h2 class="text-h4 white--text font-weight-light">
                    报名成功/未报名
                  </h2>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="10">
                      Lorem ipsum dolor sit amet, no nam oblique veritus.
                      Commune scaevola imperdiet nec ut, sed euismod convenire
                      principes at. Est et nobis iisque percipit.
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
                    <v-col cols="12" md="8">
                      Lorem ipsum dolor sit amet, no nam oblique veritus.
                      Commune scaevola imperdiet nec ut, sed euismod convenire
                      principes at. Est et nobis iisque percipit.
                    </v-col>
                    <v-col cols="12" md="4">
                      Lorem ipsum dolor sit amet, no nam oblique veritus.
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
            <!-- Title 3 -->
            <v-timeline-item color="cyan lighten-1" fill-dot right>
              <v-card>
                <v-card-title class="cyan lighten-1">
                  <v-icon class="mr-4" dark size="42">
                    mdi-email-outline
                  </v-icon>
                  <h2 class="text-h4 white--text font-weight-light">
                    复试通过/未通过
                  </h2>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col v-for="n in 3" :key="n" cols="12" md="4">
                      Lorem ipsum dolor sit amet, no nam oblique veritus no nam
                      oblique.
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>

            <!-- Title 4 -->
            <v-timeline-item color="red lighten-1" fill-dot left small>
              <v-card>
                <v-card-title class="red lighten-1 justify-end">
                  <h2 class="text-h4 mr-4 white--text font-weight-light">
                    确认加入
                  </h2>
                  <v-icon dark size="42"> mdi-account-multiple-outline </v-icon>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col class="hidden-sm-and-down" md="2">
                      <v-icon size="64"> mdi-server-network </v-icon>
                    </v-col>
                    <v-col cols="12" md="10">
                      Lorem ipsum dolor sit amet, no nam oblique veritus.
                      Commune scaevola imperdiet nec ut, sed euismod convenire
                      principes at. Est et nobis iisque percipit, an vim zril
                      disputando voluptatibus.
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Status",
  data: () => ({
    e6: 1,
  }),
};
</script>

<style scoped>
.timeline-box {
  padding-left: 10%;
  padding-right: 10%;
}

.stepper {
  box-shadow: 0px 3px 4px -2px rgb(0 0 0 / 20%), 0px 12px 31px 0px rgb(0 0 0 / 14%), 0px 1px 22px 0px rgb(0 0 0 / 12%)!important;
}
</style>
