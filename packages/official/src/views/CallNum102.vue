<template>
  <main>
    <header
      class="page-header page-header-dark bg-gradient-primary-to-secondary"
    >
			<h1 class="text-center mt-15 name">橙果工作室初次面试（1教JT102）</h1>
      <div class="page-header-content pb-5">
        <div class="container">
          <!-- logo -->
          <!-- <div class="asd col-lg-6" data-aos="fade-up" data-aos-delay="50">
            <img
              src="https://s1.ax1x.com/2020/08/25/dgHtjP.png"
              class="img-fluid"
            />
          </div> -->

          <!-- 方式2 轮播 -->
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-interval="0"
          >
            <div class="carousel-inner">
              <!-- active页 -->
              <div class="carousel-item active row">
                <!-- 正在面试 -->
                <div class="card text-white bg-dark mb-3 col-xl-6 col-md-12">
                  <div class="card-header">
                    <h4 class="card-titledark">正在面试...</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title card-titledark name">
                      {{ numlist[indexname].userName }}
                    </h1>
                    <p class="card-text card-titledark college">
                      {{ numlist[indexname].college }}
                    </p>
                    <p class="card-text card-titledark college">
                      面试小组：{{ numlist[indexname].groupName }}
                    </p>
                    <p class="card-text card-titledark college">
                      面试部门：{{ numlist[indexname].department }}
                    </p>
										<p class="card-text card-titledark college">
											报名id：{{ numlist[indexname].id }}
										</p>
                  </div>
                </div>
                <!-- 准备 -->
                <div class="card bg-light mb-3 col-xl-6 col-md-12">
                  <div class="card-header">
                    <h5>下一位请准备...</h5>
                  </div>
                  <div class="card-body">
                    <h2 class="card-title name">
                      {{ numlist[indexname2].userName }}
                    </h2>
                    <p class="card-text college">
                      {{ numlist[indexname2].college }}
                    </p>
                    <!-- <p class="card-text">{{ numlist[indexname2].id }}</p> -->
                  </div>
                </div>
              </div>

              <!-- 下一页 -->

              <div class="carousel-item row">
                <div class="card text-white bg-dark mb-3 col-xl-6 col-md-12">
                  <div class="card-header">
                    <h4 class="card-titledark">正在面试...</h4>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title card-titledark name">
                      {{ numlist[indexname].userName }}
                    </h3>
                    <p class="card-text card-titledark college">
                      {{ numlist[indexname].college }}
                    </p>
                    <p class="card-text card-titledark college">
											面试小组：{{ numlist[indexname].groupName }}
                    </p>
                    <p class="card-text card-titledark college">
                      面试部门：{{ numlist[indexname].department }}
                    </p>
										<p class="card-text card-titledark college">
											报名id：{{ numlist[indexname].id }}
										</p>
                    <!-- <p class="card-text">{{ numlist[indexname].id }}</p> -->
                  </div>
                </div>
                <div class="card bg-light mb-3 col-xl-6 col-md-12">
                  <div class="card-header">
                    <h5>下一位请准备...</h5>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title name">
                      {{ numlist[indexname2].userName }}
                    </h5>
                    <p class="card-text college">
                      {{ numlist[indexname2].college }}
                    </p>
                    <!-- <p class="card-text">{{ numlist[indexname2].id }}</p> -->
                  </div>
                </div>
              </div>
            </div>

            <!-- 左 -->
            <a
              @click="funL(), funL2()"
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <!-- 右边 -->
            <a
              @click="funR(), funR2()"
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 弧度 -->
      <div class="svg-border-rounded text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.54 17.34"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
          ></path>
        </svg>
      </div>
    </header>
    <foot></foot>
  </main>
</template>

<script>
import foot from "@/components/Footer.vue";
// import $ from jquery;
export default {
  data() {
    return {
      numlist: [],
      indexname: 0,
      indexname2: 2,
    };
  },
  components: {
    foot,
  },
  methods: {
    funL() {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        this.indexname--;
        if (this.numlist[this.indexname].id % 2 != 0) break;
      }
    },
    funR() {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        this.indexname++;
        if (this.numlist[this.indexname].id % 2 != 0) break;
      }
    },
    funR2() {
      this.indexname2 = this.indexname;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        this.indexname2++;
        if (this.numlist[this.indexname2].id % 2 != 0) break;
      }
    },
    funL2() {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        this.indexname2--;
        if (this.numlist[this.indexname2].id % 2 != 0) break;
      }
    },
  },
  created() {
    this.axios
      .get("getInform")
      .then((res) => {
        // console.log(res.data.content);
        this.numlist = res.data.content;
        // console.log(this.numlist);
        for (let data of this.numlist) {
          data.createTime = data.createTime.split("T")[0];
        }
      })
      .catch((res) => {
        console.log("获取学生信息失败", res.data);
      });
  },
};
</script>

<!-- em rem vw vh -->

<style scoped>
	.name {
		font-size: 4rem;
	}
	.college {
		font-size: 20px;
	}
	.carousel {
		margin-top: 100px;
	}
	.asd {
		margin-bottom: -130px;
	}
	.col-lg-6 {
		position: relative;
		top: -125px;
		left: -210px;
	}
	.card-text {
		color: black;
	}
	.list-group-item {
		color: black;
	}
	.card-link {
		color: blue;
	}
	.card {
		display: inline-block;
	}
	.bg-dark {
		width: 33.5%;
		margin-left: 13rem;
		margin-right: 30px;
		margin-top: 20px;
		background: rgba(30, 30, 30, 0.9) !important;
	}
	.bg-light {
		width: 33.5%;
		/* margin-left: 50px; */
		background: rgba(239, 243, 249, 0.8) !important;
	}
	.carousel {
		margin-left: -48px;
		width: 111.2%;
	}
	.card-titledark {
		color: white;
	}
</style>