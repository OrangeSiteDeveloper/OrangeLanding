<template>
  <main>
    <header
      class="page-header page-header-dark bg-gradient-primary-to-secondary"
    >
      <div class="page-header-content pt-10 pb-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6" data-aos="fade-up">
              <h1 class="page-header-title text-center">橙果工作室</h1>
              <h1 class="page-header-title text-center">大数据组</h1>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="50">
              <img
                src="https://s3.ax1x.com/2020/11/18/De1PeS.png"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
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
    <section class="bg-white py-10">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="card post-preview post-preview-featured lift mb-5">
              <div class="row no-gutters">
                <div class="col-lg-5">
                  <div
                    class="post-preview-featured-img"
                    style="
                      background-image: url('https://s1.ax1x.com/2020/09/13/wwWXX4.jpg');
                    "
                  ></div>
                </div>
                <div class="col-lg-7">
                  <div class="card-body">
                    <div class="py-5">
                      <h5 class="card-title">橙果工作室大数据组</h5>
                      <p class="card-text" style="text-indent: 2em">
                        Big
                        Data（大数据），已经与我们的生活紧密的联系起来了。作为大数据组的成员，我们将学习C语言、python、Java等编程语言，为今后的学习打下坚实的基础，我们也将学习数据采集、数据存储与管理、数据处理与分析、数据隐私与安全等大数据的关键技术。大数据作为第三次信息化浪潮的标志之一，属于它的时代已经全面到来，它早已不是“水中月、镜中花”，而是触手可及的风暴。
                      </p>
                      <p class="card-text" style="text-indent: 2em">
                        大量的数据输入计算机，七分变成了显示屏上的图画，剩下的三分，随风飘散，就弥散在了人们的生活中。
                      </p>
                    </div>
                    <hr />
                    <div class="post-preview-meta">
                      <img
                        class="post-preview-meta-img"
                        src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/QQ%E5%9B%BE%E7%89%8720210922122204.jpg"
                      />
                      <div class="post-preview-meta-details">
                        <div class="post-preview-meta-details-name">包云恒</div>
                        <div class="post-preview-meta-details-date">
                          2021-09-10
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <div v-for="(news, index) in newslist" :key="index">
			<section class="bg-light py-10">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-12">
							<div class="text-center mb-3">
								<h2 class="sub-header">{{news.title}}</h2>
								<p>发布者：{{news.publisher}}</p>
								<p>{{news.createTime}}</p>
							</div>
							<div class="row">
								<div class="col-12">
									<div class="container p-0" v-html="news.content"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div> -->

    <section class="bg-white py-10">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="text-center mb-3">
              <h2 class="sub-header">自我介绍，Python的基础知识讲解</h2>
              <p>马中城</p>
              <p>2020-11-01 22:23:00</p>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="container">
                  <h2>基本信息</h2>
                  <p>时间：10.26</p>
                  <p>场地：大会议室</p>
                  <p>到场人员：大数据组19级，20级</p>
                  <h2>详细内容</h2>
                  <p>Python的外部环境安装，Python的基础知识讲解</p>
                  <p class="text-center">
                    <img
                      src="https://s1.ax1x.com/2020/11/01/B0Wpa4.png"
                      referrerpolicy="no-referrer"
                      alt="B0Wpa4.png"
                    />
                  </p>
                  <p></p>
                  <p class="text-center">
                    <img
                      src="https://s1.ax1x.com/2020/11/01/B0WiGR.png"
                      referrerpolicy="no-referrer"
                      alt="B0WiGR.png"
                    />
                  </p>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <foot></foot>
  </main>
</template>

<script>
import foot from "@/components/Footer.vue";
export default {
  data() {
    return {
      newslist: [],
    };
  },
  components: {
    foot,
  },
  created() {
    this.axios
      .get("listGroupInformationByName?groupName=" + "大数据组")
      .then((res) => {
        // console.log('获取大数据组新闻成功', res.data.content);
        this.newslist = res.data.content;
        for (let data of this.newslist) {
          data.createTime = data.createTime.split("T")[0];
          // console.log(data);
        }
      })
      .catch((res) => {
        console.log("获取大数据组新闻失败", res.data);
      });
  },
};
</script>

<style>
</style>
